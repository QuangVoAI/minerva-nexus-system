package vn.edu.tdtu.minervanexus.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import vn.edu.tdtu.minervanexus.common.OrderStatus;
import vn.edu.tdtu.minervanexus.document.DeliveryOrderDocument;
import vn.edu.tdtu.minervanexus.repository.DeliveryOrderRepository;

import java.time.Instant;
import java.util.List;

@Service
public class OrderService {
    private final DeliveryOrderRepository repository;
    private final SlaRuleService slaRuleService;
    private final OrderStateMachine stateMachine;
    public OrderService(DeliveryOrderRepository repository, SlaRuleService slaRuleService, OrderStateMachine stateMachine) {
        this.repository = repository; this.slaRuleService = slaRuleService; this.stateMachine = stateMachine;
    }
    public List<DeliveryOrderDocument> findAll() { return repository.findAll(); }
    public DeliveryOrderDocument create(DeliveryOrderDocument order, String actorId) {
        if (repository.existsByTrackingCode(order.getTrackingCode())) throw new IllegalArgumentException("Mã vận đơn đã tồn tại.");
        Instant now = Instant.now();
        order.setStatus(OrderStatus.PENDING);
        order.setCreatedAt(now); order.setUpdatedAt(now);
        var event = new DeliveryOrderDocument.StatusEvent(); event.toStatus = OrderStatus.PENDING; event.actorId = actorId; event.reasonCode = "ORDER_CREATED"; event.note = "Tạo đơn tại Hub"; event.changedAt = now;
        order.getStatusHistory().add(event);
        order.setSlaAssessment(slaRuleService.assess(order, now));
        return repository.save(order);
    }
    @Transactional
    public DeliveryOrderDocument transition(String id, OrderStatus target, String actorId, String note) {
        DeliveryOrderDocument order = repository.findById(id).orElseThrow(() -> new IllegalArgumentException("Không tìm thấy đơn hàng."));
        if (target == OrderStatus.READY_FOR_REDELIVERY && order.getFailureCount() >= 3) {
            throw new IllegalArgumentException("Đơn đã thất bại 3 lần; không thể phát lại và phải chuyển chờ hoàn.");
        }
        stateMachine.requireAllowed(order.getStatus(), target);
        var event = new DeliveryOrderDocument.StatusEvent(); event.fromStatus = order.getStatus(); event.toStatus = target; event.actorId = actorId; event.reasonCode = "STATUS_CHANGE"; event.note = note; event.changedAt = Instant.now();
        order.setStatus(target); order.setUpdatedAt(event.changedAt); order.getStatusHistory().add(event);
        order.setSlaAssessment(slaRuleService.assess(order, event.changedAt));
        return repository.save(order);
    }

    @Transactional
    public DeliveryOrderDocument reportFailure(String id, String actorId, String reasonCode, String note) {
        DeliveryOrderDocument order = repository.findById(id).orElseThrow(() -> new IllegalArgumentException("Không tìm thấy đơn hàng."));
        stateMachine.requireAllowed(order.getStatus(), OrderStatus.FAILED);
        int failureCount = order.getFailureCount() + 1;
        order.setFailureCount(failureCount);
        var exception = new DeliveryOrderDocument.DeliveryException();
        exception.attemptNumber = failureCount; exception.driverId = order.getCurrentAssignment() == null ? null : order.getCurrentAssignment().driverId;
        exception.reasonCode = reasonCode; exception.note = note; exception.reportedAt = Instant.now();
        order.getExceptions().add(exception);
        var event = new DeliveryOrderDocument.StatusEvent(); event.fromStatus = OrderStatus.IN_TRANSIT; event.toStatus = OrderStatus.FAILED;
        event.actorId = actorId; event.reasonCode = reasonCode; event.note = note; event.changedAt = exception.reportedAt;
        order.setStatus(OrderStatus.FAILED); order.setUpdatedAt(exception.reportedAt); order.getStatusHistory().add(event);
        order.setSlaAssessment(slaRuleService.assess(order, exception.reportedAt));
        return repository.save(order);
    }
}
