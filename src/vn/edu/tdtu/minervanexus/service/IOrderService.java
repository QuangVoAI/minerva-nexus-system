package vn.edu.tdtu.minervanexus.service;

import vn.edu.tdtu.minervanexus.common.FailureReason;
import vn.edu.tdtu.minervanexus.common.OrderStatus;
import vn.edu.tdtu.minervanexus.common.ServiceLevel;
import vn.edu.tdtu.minervanexus.model.DeliveryOrder;
import vn.edu.tdtu.minervanexus.model.StatusHistory;

import java.io.File;
import java.util.List;
import java.util.Optional;

public interface IOrderService {
    DeliveryOrder createOrder(String recipientName, String phone, String address,
                              String areaId, ServiceLevel serviceLevel, double codAmount);

    void importOrdersFromCsv(File csvFile);

    List<DeliveryOrder> getAllOrders();

    Optional<DeliveryOrder> getOrderById(String orderId);

    Optional<DeliveryOrder> getOrderByTrackingCode(String trackingCode);

    List<DeliveryOrder> getOrdersByStatus(OrderStatus status);

    List<DeliveryOrder> getOrdersByDriver(String driverId);

    boolean updateOrderStatus(String orderId, OrderStatus newStatus, String actorId, String reasonNote);

    boolean reportDeliveryFailure(String orderId, String driverId, FailureReason reason, String note);

    List<StatusHistory> getOrderHistory(String orderId);
}
