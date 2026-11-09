package vn.edu.tdtu.minervanexus.model;

import java.time.LocalDateTime;

public class Assignment {
    private String assignmentId;
    private String orderId;
    private String shiftId;
    private String driverId;
    private double suggestedScore;
    private String matchReason;
    private String approvedBy;
    private LocalDateTime assignedAt;
    private String decisionStatus; // PENDING, APPROVED, REJECTED

    public Assignment() {
        this.assignedAt = LocalDateTime.now();
        this.decisionStatus = "PENDING";
    }

    public Assignment(String assignmentId, String orderId, String shiftId, String driverId,
                      double suggestedScore, String matchReason) {
        this.assignmentId = assignmentId;
        this.orderId = orderId;
        this.shiftId = shiftId;
        this.driverId = driverId;
        this.suggestedScore = suggestedScore;
        this.matchReason = matchReason;
        this.assignedAt = LocalDateTime.now();
        this.decisionStatus = "PENDING";
    }

    public String getAssignmentId() { return assignmentId; }
    public void setAssignmentId(String assignmentId) { this.assignmentId = assignmentId; }

    public String getOrderId() { return orderId; }
    public void setOrderId(String orderId) { this.orderId = orderId; }

    public String getShiftId() { return shiftId; }
    public void setShiftId(String shiftId) { this.shiftId = shiftId; }

    public String getDriverId() { return driverId; }
    public void setDriverId(String driverId) { this.driverId = driverId; }

    public double getSuggestedScore() { return suggestedScore; }
    public void setSuggestedScore(double suggestedScore) { this.suggestedScore = suggestedScore; }

    public String getMatchReason() { return matchReason; }
    public void setMatchReason(String matchReason) { this.matchReason = matchReason; }

    public String getApprovedBy() { return approvedBy; }
    public void setApprovedBy(String approvedBy) { this.approvedBy = approvedBy; }

    public LocalDateTime getAssignedAt() { return assignedAt; }
    public void setAssignedAt(LocalDateTime assignedAt) { this.assignedAt = assignedAt; }

    public String getDecisionStatus() { return decisionStatus; }
    public void setDecisionStatus(String decisionStatus) { this.decisionStatus = decisionStatus; }
}

