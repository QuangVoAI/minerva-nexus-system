package vn.edu.tdtu.minervanexus.controller;

import java.util.Map;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import vn.edu.tdtu.minervanexus.common.OrderStatus;
import vn.edu.tdtu.minervanexus.common.SlaRiskLevel;
import vn.edu.tdtu.minervanexus.repository.DeliveryOrderRepository;

@RestController
public class AnalyticsController {
  private final DeliveryOrderRepository orders;

  public AnalyticsController(DeliveryOrderRepository orders) { this.orders = orders; }

  @GetMapping("/api/analytics")
  public Map<String, Object> metrics() {
    var all = orders.findAll();
    long delivered = all.stream().filter(o -> o.getStatus() == OrderStatus.DELIVERED).count();
    long failed = all.stream().filter(o -> o.getStatus() == OrderStatus.FAILED || o.getStatus() == OrderStatus.RETURN_PENDING || o.getStatus() == OrderStatus.RETURNED).count();
    long pending = all.stream().filter(o -> o.getStatus() != OrderStatus.DELIVERED && o.getStatus() != OrderStatus.RETURNED && o.getStatus() != OrderStatus.CANCELLED).count();
    long highRisk = all.stream().filter(o -> o.getSlaAssessment() != null && o.getSlaAssessment().riskLevel == SlaRiskLevel.HIGH_RISK).count();
    double successRate = delivered * 100.0 / Math.max(1, all.size());
    double slaRate = all.stream().filter(o -> o.getStatus() == OrderStatus.DELIVERED).filter(o -> o.getSlaDeadline() != null && o.getUpdatedAt() != null && !o.getUpdatedAt().isAfter(o.getSlaDeadline())).count() * 100.0 / Math.max(1, delivered);
    return Map.of("totalOrders", all.size(), "deliveredCount", delivered, "failedCount", failed, "pendingCount", pending, "successRate", Math.round(successRate * 10) / 10.0, "slaRate", Math.round(slaRate * 10) / 10.0, "highRiskCount", highRisk);
  }
}
