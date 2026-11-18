package vn.edu.tdtu.minervanexus.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vn.edu.tdtu.minervanexus.service.JwtService;

import java.util.Locale;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private record DemoAccount(String userId, String username, String password, String fullName, String role, String defaultHub) {}

    private static final Map<String, DemoAccount> ACCOUNTS = Map.ofEntries(
            Map.entry("NV0128", new DemoAccount("DISPATCHER_NV0128", "NV0128", "password123", "Trần Văn Bình", "DISPATCHER", "Hub Quận 7")),
            Map.entry("DISPATCHER", new DemoAccount("DISPATCHER_WEB", "DISPATCHER", "password123", "Trần Văn Bình", "DISPATCHER", "Hub Quận 7")),
            Map.entry("ADMIN", new DemoAccount("HUB_MANAGER_ADMIN", "ADMIN", "admin123", "Võ Xuân Quang", "HUB_MANAGER", "Hub Quận 7")),
            Map.entry("TX045", new DemoAccount("DRV-01", "TX045", "password123", "Nguyễn Văn An", "DRIVER", "Hub Quận 7")),
            Map.entry("DRV-01", new DemoAccount("DRV-01", "DRV-01", "password123", "Nguyễn Văn An", "DRIVER", "Hub Quận 7")),
            Map.entry("DRV-02", new DemoAccount("DRV-02", "DRV-02", "password123", "Trần Thị Minh Châu", "DRIVER", "Hub Quận 7")),
            Map.entry("DRV-03", new DemoAccount("DRV-03", "DRV-03", "password123", "Lê Hoàng Nam", "DRIVER", "Hub Quận 7")),
            Map.entry("DRV-04", new DemoAccount("DRV-04", "DRV-04", "password123", "Phạm Quốc Huy", "DRIVER", "Hub Quận 7")),
            Map.entry("DRV-05", new DemoAccount("DRV-05", "DRV-05", "password123", "Võ Minh Đức", "DRIVER", "Hub Quận 7")),
            Map.entry("DRV-06", new DemoAccount("DRV-06", "DRV-06", "password123", "Đặng Thu Hà", "DRIVER", "Hub Quận 7"))
    );

    public record LoginRequest(String username, String password, String hub) {}
    public record UserInfo(String userId, String username, String fullName, String role, String hub) {}
    public record LoginResponse(String accessToken, String tokenType, long expiresIn, UserInfo user) {}

    private final JwtService jwtService;

    public AuthController(JwtService jwtService) {
        this.jwtService = jwtService;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody(required = false) LoginRequest req) {
        if (req == null || req.username() == null || req.username().isBlank()
                || req.password() == null || req.password().isBlank()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(Map.of("error", "Vui lòng nhập đầy đủ tên đăng nhập và mật khẩu."));
        }

        String key = req.username().trim().toUpperCase(Locale.ROOT);
        DemoAccount account = ACCOUNTS.get(key);
        if (account == null || !account.password().equals(req.password())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(Map.of("error", "Sai tên đăng nhập hoặc mật khẩu. Vui lòng kiểm tra lại."));
        }

        String hub = (req.hub() != null && !req.hub().isBlank()) ? req.hub().trim() : account.defaultHub();
        String token = jwtService.generateToken(account.userId(), account.username(), account.fullName(), account.role(), hub);
        UserInfo user = new UserInfo(account.userId(), account.username(), account.fullName(), account.role(), hub);
        return ResponseEntity.ok(new LoginResponse(token, "Bearer", jwtService.getTtlSeconds(), user));
    }

    @GetMapping("/me")
    public ResponseEntity<?> me(@RequestHeader(value = "Authorization", required = false) String authorization) {
        if (authorization == null || !authorization.startsWith("Bearer ")) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(Map.of("error", "Thiếu mã xác thực JWT (Authorization: Bearer <token>)."));
        }
        String token = authorization.substring(7).trim();
        return jwtService.verifyToken(token)
                .<ResponseEntity<?>>map(claims -> ResponseEntity.ok(Map.of(
                        "userId", claims.sub(),
                        "username", claims.username(),
                        "fullName", claims.fullName(),
                        "role", claims.role(),
                        "hub", claims.hub(),
                        "exp", claims.exp()
                )))
                .orElseGet(() -> ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                        .body(Map.of("error", "Phiên đăng nhập không hợp lệ hoặc đã hết hạn. Vui lòng đăng nhập lại.")));
    }

    @PostMapping("/logout")
    public ResponseEntity<?> logout() {
        return ResponseEntity.ok(Map.of("success", true, "message", "Đã đăng xuất thành công."));
    }
}
