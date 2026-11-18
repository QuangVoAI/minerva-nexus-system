package vn.edu.tdtu.minervanexus.server;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.time.Instant;
import java.util.Base64;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

/**
 * Pure JDK RFC 7519 HS256 JWT helper for standalone demo WebServer.
 */
public final class JwtUtil {
    private static final String HMAC_ALG = "HmacSHA256";
    public static final long TTL_SECONDS = 8 * 3600L;
    private static final Base64.Encoder URL_ENCODER = Base64.getUrlEncoder().withoutPadding();
    private static final Base64.Decoder URL_DECODER = Base64.getUrlDecoder();

    private static byte[] secretBytes() {
        String env = System.getenv("JWT_SECRET");
        String effective = (env != null && !env.isBlank())
                ? env
                : "minerva-nexus-dev-jwt-secret-key-2026-tdtu-n10";
        return effective.getBytes(StandardCharsets.UTF_8);
    }

    public static String generateToken(String userId, String username, String fullName, String role, String hub) {
        try {
            long now = Instant.now().getEpochSecond();
            long exp = now + TTL_SECONDS;

            String headerJson = "{\"alg\":\"HS256\",\"typ\":\"JWT\"}";
            String payloadJson = "{"
                    + "\"sub\":\"" + esc(userId) + "\","
                    + "\"username\":\"" + esc(username) + "\","
                    + "\"name\":\"" + esc(fullName) + "\","
                    + "\"role\":\"" + esc(role) + "\","
                    + "\"hub\":\"" + esc(hub) + "\","
                    + "\"iat\":" + now + ","
                    + "\"exp\":" + exp
                    + "}";

            String encodedHeader = URL_ENCODER.encodeToString(headerJson.getBytes(StandardCharsets.UTF_8));
            String encodedPayload = URL_ENCODER.encodeToString(payloadJson.getBytes(StandardCharsets.UTF_8));
            String signingInput = encodedHeader + "." + encodedPayload;
            String signature = URL_ENCODER.encodeToString(sign(signingInput));
            return signingInput + "." + signature;
        } catch (Exception e) {
            throw new IllegalStateException("Cannot sign JWT", e);
        }
    }

    public static Optional<Map<String, String>> verifyToken(String token) {
        if (token == null || token.isBlank()) return Optional.empty();
        String[] parts = token.trim().split("\\.");
        if (parts.length != 3) return Optional.empty();
        try {
            String signingInput = parts[0] + "." + parts[1];
            byte[] expected = sign(signingInput);
            byte[] provided = URL_DECODER.decode(parts[2]);
            if (!MessageDigest.isEqual(expected, provided)) {
                return Optional.empty();
            }

            String header = new String(URL_DECODER.decode(parts[0]), StandardCharsets.UTF_8);
            if (!header.contains("\"HS256\"")) {
                return Optional.empty();
            }

            String payload = new String(URL_DECODER.decode(parts[1]), StandardCharsets.UTF_8);
            Map<String, String> claims = parseFlatJson(payload);
            long exp = Long.parseLong(claims.getOrDefault("exp", "0"));
            if (exp <= Instant.now().getEpochSecond()) {
                return Optional.empty();
            }
            return Optional.of(claims);
        } catch (Exception e) {
            return Optional.empty();
        }
    }

    private static byte[] sign(String input) throws Exception {
        Mac mac = Mac.getInstance(HMAC_ALG);
        mac.init(new SecretKeySpec(secretBytes(), HMAC_ALG));
        return mac.doFinal(input.getBytes(StandardCharsets.UTF_8));
    }

    private static String esc(String s) {
        if (s == null) return "";
        return s.replace("\\", "\\\\").replace("\"", "\\\"");
    }

    private static Map<String, String> parseFlatJson(String json) {
        Map<String, String> map = new HashMap<>();
        String trimmed = json.trim();
        if (trimmed.startsWith("{") && trimmed.endsWith("}")) {
            String inner = trimmed.substring(1, trimmed.length() - 1);
            for (String pair : inner.split(",")) {
                String[] kv = pair.split(":", 2);
                if (kv.length == 2) {
                    String k = kv[0].trim().replace("\"", "");
                    String v = kv[1].trim().replace("\"", "");
                    map.put(k, v);
                }
            }
        }
        return map;
    }
}
