package vn.edu.tdtu.minervanexus.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;
import vn.edu.tdtu.minervanexus.controller.AuthController;

import java.time.Clock;
import java.time.Instant;
import java.time.ZoneOffset;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

class JwtServiceTest {

    private final ObjectMapper mapper = new ObjectMapper();

    @Test
    void generateAndVerifyValidToken() {
        Clock fixed = Clock.fixed(Instant.parse("2026-11-18T06:00:00Z"), ZoneOffset.UTC);
        JwtService jwt = new JwtService("test-secret-key-for-minerva-nexus", mapper, fixed);

        String token = jwt.generateToken("DISPATCHER_NV0128", "NV0128", "Trần Văn Bình", "DISPATCHER", "Hub Quận 7");
        assertEquals(3, token.split("\\.").length);

        Optional<JwtService.JwtClaims> claims = jwt.verifyToken(token);
        assertTrue(claims.isPresent());
        assertEquals("DISPATCHER_NV0128", claims.get().sub());
        assertEquals("NV0128", claims.get().username());
        assertEquals("DISPATCHER", claims.get().role());
        assertEquals("Hub Quận 7", claims.get().hub());
    }

    @Test
    void rejectTamperedAndExpiredTokens() {
        Clock issueTime = Clock.fixed(Instant.parse("2026-11-18T06:00:00Z"), ZoneOffset.UTC);
        JwtService issuer = new JwtService("test-secret-key-for-minerva-nexus", mapper, issueTime);
        String token = issuer.generateToken("DRV-01", "TX045", "Nguyễn Văn An", "DRIVER", "Hub Quận 7", 60);

        // Tampered signature must fail
        String tampered = token.substring(0, token.length() - 2) + "xx";
        assertTrue(issuer.verifyToken(tampered).isEmpty());

        // Expired token must fail
        Clock later = Clock.fixed(Instant.parse("2026-11-18T06:05:00Z"), ZoneOffset.UTC);
        JwtService verifierLater = new JwtService("test-secret-key-for-minerva-nexus", mapper, later);
        assertTrue(verifierLater.verifyToken(token).isEmpty());
    }

    @Test
    void authControllerLoginAndMeEndpoints() {
        JwtService jwt = new JwtService("test-secret-key-for-minerva-nexus", mapper, Clock.systemUTC());
        AuthController controller = new AuthController(jwt);

        // Wrong password -> 401
        var bad = controller.login(new AuthController.LoginRequest("NV0128", "wrong", "Hub Quận 7"));
        assertEquals(HttpStatus.UNAUTHORIZED, bad.getStatusCode());

        // Valid login -> 200 with Bearer JWT
        var ok = controller.login(new AuthController.LoginRequest("NV0128", "password123", "Hub Quận 7"));
        assertEquals(HttpStatus.OK, ok.getStatusCode());
        AuthController.LoginResponse body = (AuthController.LoginResponse) ok.getBody();
        assertNotNull(body);
        assertEquals("Bearer", body.tokenType());
        assertNotNull(body.accessToken());

        // /me with valid token -> 200
        var meOk = controller.me("Bearer " + body.accessToken());
        assertEquals(HttpStatus.OK, meOk.getStatusCode());

        // /me without token -> 401
        var meNoToken = controller.me(null);
        assertEquals(HttpStatus.UNAUTHORIZED, meNoToken.getStatusCode());
    }
}
