package vn.edu.tdtu.minervanexus.service;

import org.junit.jupiter.api.Test;
import vn.edu.tdtu.minervanexus.common.*;
import vn.edu.tdtu.minervanexus.document.DeliveryOrderDocument;
import java.time.Instant;
import static org.junit.jupiter.api.Assertions.*;

class SlaRuleServiceTest {
    private final Instant now = Instant.parse("2026-11-14T03:00:00Z");
    private final SlaRuleService service = new SlaRuleService();
    private DeliveryOrderDocument order() { var o = new DeliveryOrderDocument(); o.setStatus(OrderStatus.READY_TO_DISPATCH); return o; }
    @Test void exactBoundariesAndMissingDeadline() {
        var o = order(); assertEquals(SlaRiskLevel.UNKNOWN, service.assess(o, now).riskLevel);
        long[] millis = {-1, 0, 3599999, 3600000, 7200000, 7200001};
        SlaRiskLevel[] expected = {SlaRiskLevel.BREACHED, SlaRiskLevel.HIGH_RISK, SlaRiskLevel.HIGH_RISK,
                SlaRiskLevel.AT_RISK, SlaRiskLevel.AT_RISK, SlaRiskLevel.SAFE};
        for (int i = 0; i < millis.length; i++) { o.setSlaDeadline(now.plusMillis(millis[i])); assertEquals(expected[i], service.assess(o, now).riskLevel, "offset " + millis[i]); }
    }
    @Test void deliveredAssessmentUsesDeliveryTimeNotRefreshTime() {
        var o = order(); o.setStatus(OrderStatus.DELIVERED); o.setSlaDeadline(now.plusSeconds(7201));
        var e = new DeliveryOrderDocument.StatusEvent(); e.toStatus = OrderStatus.DELIVERED; e.changedAt = now; o.getStatusHistory().add(e);
        var a = service.assess(o, now.plusSeconds(20000));
        assertEquals(SlaRiskLevel.SAFE, a.riskLevel); assertFalse(a.overdue); assertFalse(a.reasons.isEmpty());
    }
}
