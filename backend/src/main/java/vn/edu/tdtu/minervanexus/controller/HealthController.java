package vn.edu.tdtu.minervanexus.controller;

import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class HealthController {
    private final MongoTemplate mongoTemplate;
    public HealthController(MongoTemplate mongoTemplate) { this.mongoTemplate = mongoTemplate; }
    @GetMapping("/api/health")
    public Map<String, Object> health() { return Map.of("status", "UP", "database", mongoTemplate.getDb().getName(), "mode", "RULE_BASED"); }
}
