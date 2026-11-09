package vn.edu.tdtu.minervanexus.model;

import vn.edu.tdtu.minervanexus.common.OrderStatus;
import java.time.LocalDateTime;

public class StatusHistory {
    private String historyId;
    private String orderId;
    private OrderStatus oldStatus;
    private OrderStatus newStatus;
    private String actorId;
    private String reasonCode;
    private String note;
    private LocalDateTime changedAt;

    public StatusHistory() {
        this.changedAt = LocalDateTime.now();
    }

    public StatusHistory(String historyId, String orderId, OrderStatus oldStatus,
                         OrderStatus newStatus, String actorId, String reasonCode, String note) {
        this.historyId = historyId;
        this.orderId = orderId;
        this.oldStatus = oldStatus;
        this.newStatus = newStatus;
        this.actorId = actorId;
        this.reasonCode = reasonCode;
        this.note = note;
        this.changedAt = LocalDateTime.now();
    }

    public String getHistoryId() { return historyId; }
    public void setHistoryId(String historyId) { this.historyId = historyId; }

    public String getOrderId() { return orderId; }
    public void setOrderId(String orderId) { this.orderId = orderId; }

    public OrderStatus getOldStatus() { return oldStatus; }
    public void setOldStatus(OrderStatus oldStatus) { this.oldStatus = oldStatus; }

    public OrderStatus getNewStatus() { return newStatus; }
    public void setNewStatus(OrderStatus newStatus) { this.newStatus = newStatus; }

    public String getActorId() { return actorId; }
    public void setActorId(String actorId) { this.actorId = actorId; }

    public String getReasonCode() { return reasonCode; }
    public void setReasonCode(String reasonCode) { this.reasonCode = reasonCode; }

    public String getNote() { return note; }
    public void setNote(String note) { this.note = note; }

    public LocalDateTime getChangedAt() { return changedAt; }
    public void setChangedAt(LocalDateTime changedAt) { this.changedAt = changedAt; }
}

