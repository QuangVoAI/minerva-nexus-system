package vn.edu.tdtu.minervanexus.repository;

import vn.edu.tdtu.minervanexus.model.DeliveryOrder;
import vn.edu.tdtu.minervanexus.common.OrderStatus;

import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.stream.Collectors;

public class OrderRepository {
    private final Map<String, DeliveryOrder> orderMap = new ConcurrentHashMap<>();

    public void save(DeliveryOrder order) {
        orderMap.put(order.getOrderId(), order);
    }

    public Optional<DeliveryOrder> findById(String orderId) {
        return Optional.ofNullable(orderMap.get(orderId));
    }

    public Optional<DeliveryOrder> findByTrackingCode(String trackingCode) {
        return orderMap.values().stream()
                .filter(o -> o.getTrackingCode().equalsIgnoreCase(trackingCode))
                .findFirst();
    }

    public List<DeliveryOrder> findAll() {
        return new ArrayList<>(orderMap.values());
    }

    public List<DeliveryOrder> findByStatus(OrderStatus status) {
        return orderMap.values().stream()
                .filter(o -> o.getStatus() == status)
                .collect(Collectors.toList());
    }

    public List<DeliveryOrder> findByDriverId(String driverId) {
        return orderMap.values().stream()
                .filter(o -> driverId.equals(o.getAssignedDriverId()))
                .collect(Collectors.toList());
    }

    public List<DeliveryOrder> findByAreaId(String areaId) {
        return orderMap.values().stream()
                .filter(o -> areaId.equals(o.getAreaId()))
                .collect(Collectors.toList());
    }

    public int count() {
        return orderMap.size();
    }
}
