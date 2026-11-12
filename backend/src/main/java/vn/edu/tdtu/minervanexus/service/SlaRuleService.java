package vn.edu.tdtu.minervanexus.service;

import org.springframework.stereotype.Service;
import vn.edu.tdtu.minervanexus.common.OrderStatus;
import vn.edu.tdtu.minervanexus.common.SlaRiskLevel;
import vn.edu.tdtu.minervanexus.document.DeliveryOrderDocument;

import java.time.Duration;
import java.time.Instant;
import java.util.ArrayList;

@Service
public class SlaRuleService {
    public DeliveryOrderDocument.SlaAssessment assess(DeliveryOrderDocument order, Instant now) {
        var assessment = new DeliveryOrderDocument.SlaAssessment();
        assessment.ruleVersion = "SLA-RULE-v1";
        assessment.assessedAt = now;
        if (order.getSlaDeadline() == null) {
            assessment.riskLevel = SlaRiskLevel.UNKNOWN;
            assessment.reasons.add("Đơn chưa có hạn SLA hợp lệ.");
            return assessment;
        }
        assessment.remainingMinutes = Duration.between(now, order.getSlaDeadline()).toMinutes();
        if (assessment.remainingMinutes < 0 && order.getStatus() != OrderStatus.DELIVERED) {
            assessment.riskLevel = SlaRiskLevel.BREACHED;
            assessment.overdue = true;
            assessment.reasons.add("Đơn đã quá hạn SLA nhưng chưa giao thành công.");
        } else if (assessment.remainingMinutes < 60) {
            assessment.riskLevel = SlaRiskLevel.HIGH_RISK;
            assessment.reasons.add("Đơn còn dưới 60 phút đến hạn SLA.");
        } else if (assessment.remainingMinutes <= 120) {
            assessment.riskLevel = SlaRiskLevel.AT_RISK;
            assessment.reasons.add("Đơn còn từ 60 đến 120 phút đến hạn SLA.");
        } else {
            assessment.riskLevel = SlaRiskLevel.SAFE;
            assessment.reasons.add("Đơn còn trên 120 phút đến hạn SLA.");
        }
        return assessment;
    }
}
