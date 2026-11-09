package vn.edu.tdtu.minervanexus.model;

import vn.edu.tdtu.minervanexus.common.OrderStatus;
import vn.edu.tdtu.minervanexus.common.ServiceLevel;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class DeliveryOrder {
    private String orderId;
    private String trackingCode;
    private String senderName;
    private String recipientName;
    private String recipientPhone;
    private String deliveryAddress;
    private String areaId;
    private ServiceLevel serviceLevel;
    private LocalDateTime slaDeadline;
    private double codAmount;
    private OrderStatus status;
    private String assignedDriverId;
    private int failureCount;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    public DeliveryOrder() {
        this.status = OrderStatus.PENDING;
        this.failureCount = 0;
        this.createdAt = LocalDateTime.now();
        this.updatedAt = LocalDateTime.now();
    }

    public DeliveryOrder(String orderId, String trackingCode, String recipientName, String recipientPhone,
                         String deliveryAddress, String areaId, ServiceLevel serviceLevel,
                         LocalDateTime slaDeadline, double codAmount) {
        this.orderId = orderId;
        this.trackingCode = trackingCode;
        this.recipientName = recipientName;
        this.recipientPhone = recipientPhone;
        this.deliveryAddress = deliveryAddress;
        this.areaId = areaId;
        this.serviceLevel = serviceLevel;
        this.slaDeadline = slaDeadline;
        this.codAmount = codAmount;
        this.status = OrderStatus.PENDING;
        this.failureCount = 0;
        this.createdAt = LocalDateTime.now();
        this.updatedAt = LocalDateTime.now();
    }

    public String getOrderId() { return orderId; }
    public void setOrderId(String orderId) { this.orderId = orderId; }

    public String getTrackingCode() { return trackingCode; }
    public void setTrackingCode(String trackingCode) { this.trackingCode = trackingCode; }

    public String getSenderName() { return senderName; }
    public void setSenderName(String senderName) { this.senderName = senderName; }

    public String getRecipientName() { return recipientName; }
    public void setRecipientName(String recipientName) { this.recipientName = recipientName; }

    public String getRecipientPhone() { return recipientPhone; }
    public void setRecipientPhone(String recipientPhone) { this.recipientPhone = recipientPhone; }

    public String getDeliveryAddress() { return deliveryAddress; }
    public void setDeliveryAddress(String deliveryAddress) { this.deliveryAddress = deliveryAddress; }

    public String getAreaId() { return areaId; }
    public void setAreaId(String areaId) { this.areaId = areaId; }

    public ServiceLevel getServiceLevel() { return serviceLevel; }
    public void setServiceLevel(ServiceLevel serviceLevel) { this.serviceLevel = serviceLevel; }

    public LocalDateTime getSlaDeadline() { return slaDeadline; }
    public void setSlaDeadline(LocalDateTime slaDeadline) { this.slaDeadline = slaDeadline; }

    public double getCodAmount() { return codAmount; }
    public void setCodAmount(double codAmount) { this.codAmount = codAmount; }

    public OrderStatus getStatus() { return status; }
    public void setStatus(OrderStatus status) {
        this.status = status;
        this.updatedAt = LocalDateTime.now();
    }

    public String getAssignedDriverId() { return assignedDriverId; }
    public void setAssignedDriverId(String assignedDriverId) { this.assignedDriverId = assignedDriverId; }

    public int getFailureCount() { return failureCount; }
    public void setFailureCount(int failureCount) { this.failureCount = failureCount; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }

    public LocalDateTime getUpdatedAt() { return updatedAt; }
    public void setUpdatedAt(LocalDateTime updatedAt) { this.updatedAt = updatedAt; }

    public String getFormattedSla() {
        if (slaDeadline == null) return "N/A";
        return slaDeadline.format(DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm"));
    }

    @Override
    public String toString() {
        return trackingCode + " [" + status.getDescription() + "] - " + recipientName + " (" + areaId + ")";
    }
}

