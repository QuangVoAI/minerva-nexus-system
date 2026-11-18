package vn.edu.tdtu.minervanexus.config;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletRequestWrapper;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import vn.edu.tdtu.minervanexus.service.JwtService;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.Optional;

/**
 * Validates Authorization: Bearer <jwt> tokens on /api/** routes.
 * - Rejects invalid/expired Bearer tokens with HTTP 401.
 * - Propagates authenticated JWT subject into X-Actor-Id for audit trails.
 * - Set JWT_ENFORCE=true to require a Bearer token on every protected API call.
 */
@Component
public class JwtAuthFilter extends OncePerRequestFilter {
    private final JwtService jwtService;
    private final boolean enforceAuth;

    public JwtAuthFilter(
            JwtService jwtService,
            @Value("${JWT_ENFORCE:false}") boolean enforceAuth) {
        this.jwtService = jwtService;
        this.enforceAuth = enforceAuth;
    }

    @Override
    protected void doFilterInternal(
            HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        String path = request.getRequestURI();
        if (!path.startsWith("/api/") || path.startsWith("/api/auth/") || path.equals("/api/health")) {
            filterChain.doFilter(request, response);
            return;
        }

        String header = request.getHeader("Authorization");
        if (header != null && header.startsWith("Bearer ")) {
            String token = header.substring(7).trim();
            Optional<JwtService.JwtClaims> verified = jwtService.verifyToken(token);
            if (verified.isEmpty()) {
                writeUnauthorized(response, "Token JWT không hợp lệ hoặc đã hết hạn.");
                return;
            }
            JwtService.JwtClaims claims = verified.get();
            request.setAttribute("jwt.claims", claims);
            HttpServletRequest wrapped = new HttpServletRequestWrapper(request) {
                @Override
                public String getHeader(String name) {
                    if ("X-Actor-Id".equalsIgnoreCase(name)) {
                        return claims.sub();
                    }
                    return super.getHeader(name);
                }
            };
            filterChain.doFilter(wrapped, response);
            return;
        }

        if (enforceAuth) {
            writeUnauthorized(response, "Yêu cầu đăng nhập (thiếu Bearer JWT token).");
            return;
        }

        filterChain.doFilter(request, response);
    }

    private static void writeUnauthorized(HttpServletResponse response, String message) throws IOException {
        response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
        response.setContentType("application/json;charset=UTF-8");
        byte[] bytes = ("{\"error\":\"" + message + "\"}").getBytes(StandardCharsets.UTF_8);
        response.getOutputStream().write(bytes);
    }
}
