package vn.edu.tdtu.minervanexus.service.impl;

import vn.edu.tdtu.minervanexus.common.FailureReason;
import vn.edu.tdtu.minervanexus.common.OrderStatus;
import vn.edu.tdtu.minervanexus.common.ServiceLevel;
import vn.edu.tdtu.minervanexus.model.DeliveryOrder;
import vn.edu.tdtu.minervanexus.model.StatusHistory;
import vn.edu.tdtu.minervanexus.repository.OrderRepository;
import vn.edu.tdtu.minervanexus.service.IOrderService;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicInteger;

public class OrderServiceImpl implements IOrderService {
    private final OrderRepository orderRepository;
    private final Map<String, List<StatusHistory>> orderHistories = new ConcurrentHashMap<>();
    private final AtomicInteger orderCounter = new AtomicInteger(100);

    public OrderServiceImpl(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    @Override
    public DeliveryOrder createOrder(String recipientName, String phone, String address,
                                     String areaId, ServiceLevel serviceLevel, double codAmount) {
        int seq = orderCounter.incrementAndGet();
        String orderId = "ORD-" + seq;
        String trackingCode = "MNX" + String.format("%06d", seq);
        LocalDateTime deadline = LocalDateTime.now().plusMinutes(serviceLevel.getSlaMinutes());

        DeliveryOrder order = new DeliveryOrder(orderId, trackingCode, recipientName, phone, address,
                areaId, serviceLevel, deadline, codAmount);
        order.setStatus(OrderStatus.READY_TO_DISPATCH);

        orderRepository.save(order);

        recordHistory(orderId, null, OrderStatus.READY_TO_DISPATCH, "SYSTEM", "CREATE_ORDER", "Tiếp nhận đơn hàng mới vào kho");
        return order;
    }

    @Override
    public void importOrdersFromCsv(File csvFile) {
        if (csvFile == null || !csvFile.exists()) return;
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm");

        try (BufferedReader reader = new BufferedReader(new FileReader(csvFile))) {
            String line;
            boolean firstLine = true;
            while ((line = reader.readLine()) != null) {
                if (firstLine) { firstLine = false; continue; }
                String[] parts = line.split(",");
                if (parts.length >= 7) {
                    String orderId = parts[0].trim();
                    String trackingCode = parts[1].trim();
                    String recipientName = parts[2].trim();
                    String phone = parts[3].trim();
                    String address = parts[4].trim();
                    String areaId = parts[5].trim();
                    ServiceLevel serviceLevel = ServiceLevel.valueOf(parts[6].trim().toUpperCase());
                    
                    LocalDateTime deadline = LocalDateTime.now().plusMinutes(serviceLevel.getSlaMinutes());
                    if (parts.length >= 8 && !parts[7].trim().isEmpty()) {
                        String deadlineStr = parts[7].trim();
                        if (deadlineStr.startsWith("+")) {
                            long mins = Long.parseLong(deadlineStr.substring(1));
                            deadline = LocalDateTime.now().plusMinutes(mins);
                        } else {
                            try {
                                deadline = LocalDateTime.parse(deadlineStr, dtf);
                            } catch (Exception ignored) {}
                        }
                    }
                    double cod = (parts.length >= 9) ? Double.parseDouble(parts[8].trim()) : 0.0;

                    DeliveryOrder order = new DeliveryOrder(orderId, trackingCode, recipientName, phone,
                            address, areaId, serviceLevel, deadline, cod);
                    order.setStatus(OrderStatus.READY_TO_DISPATCH);
                    orderRepository.save(order);
                    recordHistory(orderId, null, OrderStatus.READY_TO_DISPATCH, "SYSTEM", "CSV_IMPORT", "Nạp đơn hàng từ CSV");
                }
            }
        } catch (Exception e) {
            System.err.println("Lỗi khi đọc file CSV đơn hàng: " + e.getMessage());
        }
    }

    @Override
    public List<DeliveryOrder> getAllOrders() {
        return orderRepository.findAll();
    }

    @Override
    public Optional<DeliveryOrder> getOrderById(String orderId) {
        return orderRepository.findById(orderId);
    }

    @Override
    public Optional<DeliveryOrder> getOrderByTrackingCode(String trackingCode) {
        return orderRepository.findByTrackingCode(trackingCode);
    }

    @Override
    public List<DeliveryOrder> getOrdersByStatus(OrderStatus status) {
        return orderRepository.findByStatus(status);
    }

    @Override
    public List<DeliveryOrder> getOrdersByDriver(String driverId) {
        return orderRepository.findByDriverId(driverId);
    }

    @Override
    public boolean updateOrderStatus(String orderId, OrderStatus newStatus, String actorId, String reasonNote) {
        Optional<DeliveryOrder> opt = orderRepository.findById(orderId);
        if (opt.isEmpty()) return false;

        DeliveryOrder order = opt.get();
        OrderStatus oldStatus = order.getStatus();
        order.setStatus(newStatus);
        orderRepository.save(order);

        recordHistory(orderId, oldStatus, newStatus, actorId, "STATUS_CHANGE", reasonNote);
        return true;
    }

    @Override
    public boolean reportDeliveryFailure(String orderId, String driverId, FailureReason reason, String note) {
        Optional<DeliveryOrder> opt = orderRepository.findById(orderId);
        if (opt.isEmpty()) return false;

        DeliveryOrder order = opt.get();
        OrderStatus oldStatus = order.getStatus();
        order.setFailureCount(order.getFailureCount() + 1);

        if (order.getFailureCount() >= 3) {
            order.setStatus(OrderStatus.RETURNED);
        } else {
            order.setStatus(OrderStatus.FAILED);
        }
        orderRepository.save(order);

        String detail = reason.getDescription() + (note != null && !note.isEmpty() ? (" (" + note + ")") : "");
        recordHistory(orderId, oldStatus, order.getStatus(), driverId, reason.name(), detail);
        return true;
    }

    @Override
    public List<StatusHistory> getOrderHistory(String orderId) {
        return orderHistories.getOrDefault(orderId, Collections.emptyList());
    }

    private void recordHistory(String orderId, OrderStatus oldStatus, OrderStatus newStatus,
                               String actorId, String reasonCode, String note) {
        String histId = "HIST-" + UUID.randomUUID().toString().substring(0, 8);
        StatusHistory history = new StatusHistory(histId, orderId, oldStatus, newStatus, actorId, reasonCode, note);
        orderHistories.computeIfAbsent(orderId, k -> new ArrayList<>()).add(history);
    }
}
