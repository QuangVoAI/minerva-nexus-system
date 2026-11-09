package vn.edu.tdtu.minervanexus.service.impl;

import vn.edu.tdtu.minervanexus.common.OrderStatus;
import vn.edu.tdtu.minervanexus.common.RiskLevel;
import vn.edu.tdtu.minervanexus.model.DeliveryOrder;
import vn.edu.tdtu.minervanexus.model.Driver;
import vn.edu.tdtu.minervanexus.service.IAnalyticsService;
import vn.edu.tdtu.minervanexus.service.IDispatchEngine;
import vn.edu.tdtu.minervanexus.service.IDriverShiftService;
import vn.edu.tdtu.minervanexus.service.IOrderService;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class AnalyticsServiceImpl implements IAnalyticsService {
    private final IOrderService orderService;
    private final IDriverShiftService driverShiftService;
    private final IDispatchEngine dispatchEngine;

    public AnalyticsServiceImpl(IOrderService orderService,
                                IDriverShiftService driverShiftService,
                                IDispatchEngine dispatchEngine) {
        this.orderService = orderService;
        this.driverShiftService = driverShiftService;
        this.dispatchEngine = dispatchEngine;
    }

    @Override
    public int getTotalOrders() {
        return orderService.getAllOrders().size();
    }

    @Override
    public int getDeliveredOrdersCount() {
        return orderService.getOrdersByStatus(OrderStatus.DELIVERED).size();
    }

    @Override
    public int getFailedOrdersCount() {
        return orderService.getOrdersByStatus(OrderStatus.FAILED).size() +
                orderService.getOrdersByStatus(OrderStatus.RETURNED).size();
    }

    @Override
    public int getPendingOrdersCount() {
        return orderService.getOrdersByStatus(OrderStatus.PENDING).size() +
                orderService.getOrdersByStatus(OrderStatus.READY_TO_DISPATCH).size();
    }

    @Override
    public double getSuccessDeliveryRate() {
        int delivered = getDeliveredOrdersCount();
        int failed = getFailedOrdersCount();
        int completed = delivered + failed;
        if (completed == 0) return 100.0;
        return ((double) delivered / completed) * 100.0;
    }

    @Override
    public double getOnTimeSlaRate() {
        List<DeliveryOrder> deliveredOrders = orderService.getOrdersByStatus(OrderStatus.DELIVERED);
        if (deliveredOrders.isEmpty()) return 100.0;

        long onTimeCount = deliveredOrders.stream()
                .filter(o -> o.getUpdatedAt() != null && o.getSlaDeadline() != null)
                .filter(o -> !o.getUpdatedAt().isAfter(o.getSlaDeadline()))
                .count();

        return ((double) onTimeCount / deliveredOrders.size()) * 100.0;
    }

    @Override
    public int getHighRiskOrdersCount() {
        List<DeliveryOrder> activeOrders = orderService.getAllOrders();
        long count = 0;
        for (DeliveryOrder order : activeOrders) {
            if (order.getStatus() != OrderStatus.DELIVERED &&
                order.getStatus() != OrderStatus.RETURNED &&
                order.getStatus() != OrderStatus.CANCELLED) {
                if (dispatchEngine.predictOrderRisk(order).getRiskLabel() == RiskLevel.HIGH) {
                    count++;
                }
            }
        }
        return (int) count;
    }

    @Override
    public Map<String, Double> getDriverWorkloadPercentage() {
        Map<String, Double> workload = new HashMap<>();
        for (Driver d : driverShiftService.getAllDrivers()) {
            double pct = d.getCapacityPerShift() > 0 ?
                    ((double) d.getCurrentLoad() / d.getCapacityPerShift()) * 100.0 : 0.0;
            workload.put(d.getName(), pct);
        }
        return workload;
    }
}
