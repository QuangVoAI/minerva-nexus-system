package vn.edu.tdtu.minervanexus.config;

import java.util.Arrays;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/** Allows the local Vite app and the deployed Vercel SPA to call this API. */
@Configuration
public class CorsConfig implements WebMvcConfigurer {
  @Value("${CORS_ALLOWED_ORIGIN_PATTERNS:http://localhost:3000,http://localhost:8080,https://*.vercel.app}")
  private String allowedOriginPatterns;

  @Override
  public void addCorsMappings(CorsRegistry registry) {
    String[] origins = Arrays.stream(allowedOriginPatterns.split(","))
        .map(String::trim).filter(value -> !value.isEmpty()).toArray(String[]::new);
    registry.addMapping("/api/**")
        .allowedOriginPatterns(origins)
        .allowedMethods("GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS")
        .allowedHeaders("Content-Type", "Accept", "X-Actor-Id")
        .maxAge(3600);
  }
}
