package vn.edu.tdtu.minervanexus.service.impl;

import vn.edu.tdtu.minervanexus.common.AppConstants;
import vn.edu.tdtu.minervanexus.common.OrderStatus;
import vn.edu.tdtu.minervanexus.common.RiskLevel;
import vn.edu.tdtu.minervanexus.model.Assignment;
import vn.edu.tdtu.minervanexus.model.DeliveryOrder;
import vn.edu.tdtu.minervanexus.model.Driver;
import vn.edu.tdtu.minervanexus.model.RiskPrediction;
import vn.edu.tdtu.minervanexus.repository.AssignmentRepository;
import vn.edu.tdtu.minervanexus.service.IDispatchEngine;
import vn.edu.tdtu.minervanexus.service.IDriverShiftService;
import vn.edu.tdtu.minervanexus.service.IOrderService;

import java.time.Duration;
import java.time.LocalDateTime;
import java.util.*;
import java.util.concurrent.atomic.AtomicInteger;

public class DispatchEngineImpl implements IDispatchEngine {
    private final IOrderService orderService;
    private final IDriverShiftService driverShiftService;
    private final AssignmentRepository assignmentRepository;
    private final AtomicInteger assignmentCounter = new AtomicInteger(100);

    public DispatchEngineImpl(IOrderService orderService,
                              IDriverShiftService driverShiftService,
                              AssignmentRepository assignmentRepository) {
        this.orderService = orderService;
        this.driverShiftService = driverShiftService;
        this.assignmentRepository = assignmentRepository;
    }

    @Override
    public RiskPrediction predictOrderRisk(DeliveryOrder order) {
        if (order == null || order.getSlaDeadline() == null) {
            return new RiskPrediction("PRED-0", "UNKNOWN", "v1.0-RuleBase", 0.1, RiskLevel.LOW, "Dữ liệu hạn chót hợp lệ");
        }

        LocalDateTime now = LocalDateTime.now();
        long minutesLeft = Duration.between(now, order.getSlaDeadline()).toMinutes();

        double prob;
        RiskLevel label;
        String explanation;

        if (minutesLeft <= AppConstants.SLA_RISK_HIGH_MINUTES) {
            prob = 0.88 + (order.getFailureCount() * 0.05);
            label = RiskLevel.HIGH;
            explanation = String.format("CẢNH BÁO CAO: Chỉ còn %d phút đến hạn SLA. Cần gán tài xế hỏa tốc!", Math.max(0, minutesLeft));
        } else if (minutesLeft <= AppConstants.SLA_RISK_MEDIUM_MINUTES) {
            prob = 0.55;
            label = RiskLevel.MEDIUM;
            explanation = String.format("CẢNH BÁO: Còn %d phút đến hạn SLA. Ưu tiên ghép ca sớm.", minutesLeft);
        } else {
            prob = 0.15;
            label = RiskLevel.LOW;
            explanation = String.format("AN TOÀN: Còn %d phút đến hạn SLA. Thời gian phát tiêu chuẩn.", minutesLeft);
        }

        prob = Math.min(0.99, prob);
        String predId = "PRED-" + UUID.randomUUID().toString().substring(0, 8);
        return new RiskPrediction(predId, order.getOrderId(), "Minerva-AI-Heuristic-v1.0", prob, label, explanation);
    }

    @Override
    public List<Assignment> generateDispatchSuggestions(String shiftId) {
        List<DeliveryOrder> unassignedOrders = orderService.getOrdersByStatus(OrderStatus.READY_TO_DISPATCH);
        List<Driver> allDrivers = driverShiftService.getAllDrivers();

        // Sắp xếp đơn: Đơn nguy cơ cao lên đầu
        unassignedOrders.sort((o1, o2) -> {
            RiskPrediction p1 = predictOrderRisk(o1);
            RiskPrediction p2 = predictOrderRisk(o2);
            return Double.compare(p2.getRiskProbability(), p1.getRiskProbability());
        });

        List<Assignment> suggestions = new ArrayList<>();

        for (DeliveryOrder order : unassignedOrders) {
            // Tìm tài xế cùng khu vực và còn sức tải
            Driver bestDriver = allDrivers.stream()
                    .filter(d -> d.isActive() && d.canAcceptMoreOrders())
                    .filter(d -> order.getAreaId().equalsIgnoreCase(d.getAssignedAreaId()))
                    .min(Comparator.comparingInt(Driver::getCurrentLoad))
                    .orElse(null);

            // Nếu không có tài xế cùng khu vực, tìm tài xế khu vực lân cận còn tải thấp nhất
            if (bestDriver == null) {
                bestDriver = allDrivers.stream()
                        .filter(d -> d.isActive() && d.canAcceptMoreOrders())
                        .min(Comparator.comparingInt(Driver::getCurrentLoad))
                        .orElse(null);
            }

            if (bestDriver != null) {
                int id = assignmentCounter.incrementAndGet();
                String assignId = "ASG-" + id;
                double score = 85.0 + (bestDriver.getRemainingCapacity() * 1.0);
                String reason = String.format("Tài xế %s phụ trách tuyến %s, tải hiện tại %d/%d, độ phù hợp: %.0f%%",
                        bestDriver.getName(), bestDriver.getAssignedAreaId(),
                        bestDriver.getCurrentLoad(), bestDriver.getCapacityPerShift(), score);

                Assignment assignment = new Assignment(assignId, order.getOrderId(), shiftId, bestDriver.getDriverId(), score, reason);
                assignmentRepository.save(assignment);
                suggestions.add(assignment);
            }
        }

        return suggestions;
    }

    @Override
    public boolean approveAssignment(String assignmentId, String dispatcherId) {
        Optional<Assignment> opt = assignmentRepository.findById(assignmentId);
        if (opt.isEmpty()) return false;

        Assignment assignment = opt.get();
        assignment.setDecisionStatus("APPROVED");
        assignment.setApprovedBy(dispatcherId);
        assignmentRepository.save(assignment);

        // Cập nhật đơn hàng
        orderService.getOrderById(assignment.getOrderId()).ifPresent(order -> {
            order.setAssignedDriverId(assignment.getDriverId());
            orderService.updateOrderStatus(order.getOrderId(), OrderStatus.ASSIGNED, dispatcherId,
                    "Duyệt phân công cho tài xế " + assignment.getDriverId());
        });

        // Tăng tải tài xế
        driverShiftService.incrementDriverLoad(assignment.getDriverId());
        return true;
    }

    @Override
    public boolean rejectAssignment(String assignmentId) {
        Optional<Assignment> opt = assignmentRepository.findById(assignmentId);
        if (opt.isEmpty()) return false;

        Assignment assignment = opt.get();
        assignment.setDecisionStatus("REJECTED");
        assignmentRepository.save(assignment);
        return true;
    }

    @Override
    public List<Assignment> getPendingAssignments() {
        return assignmentRepository.findPendingAssignments();
    }
}

