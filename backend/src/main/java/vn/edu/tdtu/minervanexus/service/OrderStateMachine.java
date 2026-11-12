package vn.edu.tdtu.minervanexus.service;

import org.springframework.stereotype.Component;
import vn.edu.tdtu.minervanexus.common.OrderStatus;

import java.util.EnumMap;
import java.util.EnumSet;
import java.util.Map;

@Component
public class OrderStateMachine {
    private final Map<OrderStatus, EnumSet<OrderStatus>> allowed = new EnumMap<>(OrderStatus.class);

    public OrderStateMachine() {
        allowed.put(OrderStatus.PENDING, EnumSet.of(OrderStatus.READY_TO_DISPATCH, OrderStatus.CANCELLED));
        allowed.put(OrderStatus.READY_TO_DISPATCH, EnumSet.of(OrderStatus.ASSIGNED, OrderStatus.CANCELLED));
        allowed.put(OrderStatus.ASSIGNED, EnumSet.of(OrderStatus.DRIVER_ACCEPTED, OrderStatus.READY_TO_DISPATCH));
        allowed.put(OrderStatus.DRIVER_ACCEPTED, EnumSet.of(OrderStatus.IN_TRANSIT));
        allowed.put(OrderStatus.IN_TRANSIT, EnumSet.of(OrderStatus.DELIVERED, OrderStatus.FAILED));
        allowed.put(OrderStatus.FAILED, EnumSet.of(OrderStatus.READY_FOR_REDELIVERY, OrderStatus.RETURN_PENDING));
        allowed.put(OrderStatus.READY_FOR_REDELIVERY, EnumSet.of(OrderStatus.ASSIGNED, OrderStatus.RETURN_PENDING));
        allowed.put(OrderStatus.RETURN_PENDING, EnumSet.of(OrderStatus.RETURNED));
    }

    public void requireAllowed(OrderStatus from, OrderStatus to) {
        if (!allowed.getOrDefault(from, EnumSet.noneOf(OrderStatus.class)).contains(to)) {
            throw new IllegalStateException("Không thể chuyển đơn từ " + from + " sang " + to + ".");
        }
    }
}
