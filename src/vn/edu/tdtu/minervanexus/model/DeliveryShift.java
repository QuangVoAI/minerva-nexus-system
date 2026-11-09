package vn.edu.tdtu.minervanexus.model;

import java.time.LocalDate;
import java.time.LocalTime;

public class DeliveryShift {
    private String shiftId;
    private String hubId;
    private LocalDate shiftDate;
    private LocalTime startTime;
    private LocalTime endTime;
    private String status; // OPEN, IN_PROGRESS, CLOSED

    public DeliveryShift() {
        this.status = "OPEN";
    }

    public DeliveryShift(String shiftId, String hubId, LocalDate shiftDate, LocalTime startTime, LocalTime endTime) {
        this.shiftId = shiftId;
        this.hubId = hubId;
        this.shiftDate = shiftDate;
        this.startTime = startTime;
        this.endTime = endTime;
        this.status = "OPEN";
    }

    public String getShiftId() { return shiftId; }
    public void setShiftId(String shiftId) { this.shiftId = shiftId; }

    public String getHubId() { return hubId; }
    public void setHubId(String hubId) { this.hubId = hubId; }

    public LocalDate getShiftDate() { return shiftDate; }
    public void setShiftDate(LocalDate shiftDate) { this.shiftDate = shiftDate; }

    public LocalTime getStartTime() { return startTime; }
    public void setStartTime(LocalTime startTime) { this.startTime = startTime; }

    public LocalTime getEndTime() { return endTime; }
    public void setEndTime(LocalTime endTime) { this.endTime = endTime; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    @Override
    public String toString() {
        return "Ca " + shiftId + " (" + startTime + " - " + endTime + ") [" + status + "]";
    }
}

