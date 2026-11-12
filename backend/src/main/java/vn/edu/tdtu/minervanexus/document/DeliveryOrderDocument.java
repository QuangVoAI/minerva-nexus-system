package vn.edu.tdtu.minervanexus.document;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import vn.edu.tdtu.minervanexus.common.OrderStatus;
import vn.edu.tdtu.minervanexus.common.ServiceLevel;
import vn.edu.tdtu.minervanexus.common.SlaRiskLevel;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;

@Document("delivery_orders")
public class DeliveryOrderDocument {
    @Id private String id;
    private String orderCode;
    private String trackingCode;
    private String hubId;
    private String areaId;
    private Party sender;
    private Party recipient;
    private ServiceLevel serviceLevel;
    private Instant slaDeadline;
    private OrderStatus status = OrderStatus.PENDING;
    private int failureCount;
    private AssignmentRef currentAssignment;
    private SlaAssessment slaAssessment;
    private List<StatusEvent> statusHistory = new ArrayList<>();
    private List<DeliveryException> exceptions = new ArrayList<>();
    private ReturnInfo returnInfo;
    private Instant createdAt;
    private Instant updatedAt;

    public String getId() { return id; }
    public String getOrderCode() { return orderCode; }
    public void setOrderCode(String value) { orderCode = value; }
    public String getTrackingCode() { return trackingCode; }
    public void setTrackingCode(String value) { trackingCode = value; }
    public String getHubId() { return hubId; }
    public void setHubId(String value) { hubId = value; }
    public String getAreaId() { return areaId; }
    public void setAreaId(String value) { areaId = value; }
    public Party getSender() { return sender; }
    public void setSender(Party value) { sender = value; }
    public Party getRecipient() { return recipient; }
    public void setRecipient(Party value) { recipient = value; }
    public ServiceLevel getServiceLevel() { return serviceLevel; }
    public void setServiceLevel(ServiceLevel value) { serviceLevel = value; }
    public Instant getSlaDeadline() { return slaDeadline; }
    public void setSlaDeadline(Instant value) { slaDeadline = value; }
    public OrderStatus getStatus() { return status; }
    public void setStatus(OrderStatus value) { status = value; }
    public int getFailureCount() { return failureCount; }
    public void setFailureCount(int value) { failureCount = value; }
    public AssignmentRef getCurrentAssignment() { return currentAssignment; }
    public void setCurrentAssignment(AssignmentRef value) { currentAssignment = value; }
    public SlaAssessment getSlaAssessment() { return slaAssessment; }
    public void setSlaAssessment(SlaAssessment value) { slaAssessment = value; }
    public List<StatusEvent> getStatusHistory() { return statusHistory; }
    public List<DeliveryException> getExceptions() { return exceptions; }
    public ReturnInfo getReturnInfo() { return returnInfo; }
    public void setReturnInfo(ReturnInfo value) { returnInfo = value; }
    public Instant getCreatedAt() { return createdAt; }
    public void setCreatedAt(Instant value) { createdAt = value; }
    public Instant getUpdatedAt() { return updatedAt; }
    public void setUpdatedAt(Instant value) { updatedAt = value; }

    public static class Party { public String name; public String phone; public String address; }
    public static class AssignmentRef { public String assignmentId; public String shiftId; public String driverId; public Instant assignedAt; public String approvedBy; }
    public static class SlaAssessment { public String ruleVersion; public long remainingMinutes; public SlaRiskLevel riskLevel; public boolean overdue; public List<String> reasons = new ArrayList<>(); public Instant assessedAt; }
    public static class StatusEvent { public OrderStatus fromStatus; public OrderStatus toStatus; public String actorId; public String reasonCode; public String note; public Instant changedAt; }
    public static class DeliveryException { public int attemptNumber; public String driverId; public String reasonCode; public String note; public Instant reportedAt; public String resolution; }
    public static class ReturnInfo { public String returnCode; public Instant returnRequestedAt; public Instant returnConfirmedAt; public String confirmedBy; public String reason; }
}
