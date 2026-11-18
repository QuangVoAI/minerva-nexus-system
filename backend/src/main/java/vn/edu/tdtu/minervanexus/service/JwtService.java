package vn.edu.tdtu.minervanexus.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.time.Clock;
import java.time.Instant;
import java.util.Base64;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Optional;

/**
 * Standard RFC 7519 HS256 JWT issuer and verifier using pure JDK crypto.
 * Signing secret is read from JWT_SECRET environment variable when configured.
 */
@Service
public class JwtService {
    private static final String HMAC_ALG = "HmacSHA256";
    private static final long DEFAULT_TTL_SECONDS = 8 * 3600L; // 8 hours (1 delivery shift)
    private static final Base64.Encoder URL_ENCODER = Base64.getUrlEncoder().withoutPadding();
    private static final Base64.Decoder URL_DECODER = Base64.getUrlDecoder();

    private final byte[] secretBytes;
    private final ObjectMapper objectMapper;
    private final Clock clock;

    public record JwtClaims(
            String sub,
            String username,
            String fullName,
            String role,
            String hub,
            long iat,
            long exp
    ) {}

    @org.springframework.beans.factory.annotation.Autowired
    public JwtService(
            @Value("${JWT_SECRET:minerva-nexus-dev-jwt-secret-key-2026-tdtu-n10}") String secret,
            ObjectMapper objectMapper) {
        this(secret, objectMapper, Clock.systemUTC());
    }

    public JwtService(String secret, ObjectMapper objectMapper, Clock clock) {
        String effective = (secret == null || secret.isBlank())
                ? "minerva-nexus-dev-jwt-secret-key-2026-tdtu-n10"
                : secret;
        this.secretBytes = effective.getBytes(StandardCharsets.UTF_8);
        this.objectMapper = objectMapper;
        this.clock = clock;
    }

    public long getTtlSeconds() {
        return DEFAULT_TTL_SECONDS;
    }

    public String generateToken(String userId, String username, String fullName, String role, String hub) {
        return generateToken(userId, username, fullName, role, hub, DEFAULT_TTL_SECONDS);
    }

    public String generateToken(
            String userId, String username, String fullName, String role, String hub, long ttlSeconds) {
        try {
            long now = Instant.now(clock).getEpochSecond();
            long exp = now + ttlSeconds;

            Map<String, Object> header = new LinkedHashMap<>();
            header.put("alg", "HS256");
            header.put("typ", "JWT");

            Map<String, Object> payload = new LinkedHashMap<>();
            payload.put("sub", userId);
            payload.put("username", username);
            payload.put("name", fullName);
            payload.put("role", role);
            payload.put("hub", hub);
            payload.put("iat", now);
            payload.put("exp", exp);

            String encodedHeader = URL_ENCODER.encodeToString(objectMapper.writeValueAsBytes(header));
            String encodedPayload = URL_ENCODER.encodeToString(objectMapper.writeValueAsBytes(payload));
            String signingInput = encodedHeader + "." + encodedPayload;
            String signature = URL_ENCODER.encodeToString(sign(signingInput));
            return signingInput + "." + signature;
        } catch (Exception e) {
            throw new IllegalStateException("Không thể ký JWT token.", e);
        }
    }

    public Optional<JwtClaims> verifyToken(String token) {
        if (token == null || token.isBlank()) {
            return Optional.empty();
        }
        String[] parts = token.trim().split("\\.");
        if (parts.length != 3) {
            return Optional.empty();
        }
        try {
            String signingInput = parts[0] + "." + parts[1];
            byte[] expectedSig = sign(signingInput);
            byte[] providedSig = URL_DECODER.decode(parts[2]);
            if (!MessageDigest.isEqual(expectedSig, providedSig)) {
                return Optional.empty();
            }

            byte[] headerBytes = URL_DECODER.decode(parts[0]);
            @SuppressWarnings("unchecked")
            Map<String, Object> header = objectMapper.readValue(headerBytes, Map.class);
            if (!"HS256".equals(header.get("alg"))) {
                return Optional.empty();
            }

            byte[] payloadBytes = URL_DECODER.decode(parts[1]);
            @SuppressWarnings("unchecked")
            Map<String, Object> payload = objectMapper.readValue(payloadBytes, Map.class);

            long exp = toLong(payload.get("exp"));
            long iat = toLong(payload.get("iat"));
            long now = Instant.now(clock).getEpochSecond();
            if (exp <= now) {
                return Optional.empty();
            }

            return Optional.of(new JwtClaims(
                    String.valueOf(payload.getOrDefault("sub", "")),
                    String.valueOf(payload.getOrDefault("username", "")),
                    String.valueOf(payload.getOrDefault("name", "")),
                    String.valueOf(payload.getOrDefault("role", "")),
                    String.valueOf(payload.getOrDefault("hub", "")),
                    iat,
                    exp
            ));
        } catch (Exception e) {
            return Optional.empty();
        }
    }

    private byte[] sign(String signingInput) throws Exception {
        Mac mac = Mac.getInstance(HMAC_ALG);
        mac.init(new SecretKeySpec(secretBytes, HMAC_ALG));
        return mac.doFinal(signingInput.getBytes(StandardCharsets.UTF_8));
    }

    private static long toLong(Object val) {
        if (val instanceof Number n) {
            return n.longValue();
        }
        if (val instanceof String s) {
            return Long.parseLong(s);
        }
        return 0L;
    }
}
