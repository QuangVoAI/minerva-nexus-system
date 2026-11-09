package vn.edu.tdtu.minervanexus.model;

public class Driver {
    private String driverId;
    private String name;
    private String phone;
    private String assignedAreaId;
    private int capacityPerShift;
    private int currentLoad;
    private boolean active;

    public Driver() {
        this.capacityPerShift = 15;
        this.currentLoad = 0;
        this.active = true;
    }

    public Driver(String driverId, String name, String phone, String assignedAreaId, int capacityPerShift) {
        this.driverId = driverId;
        this.name = name;
        this.phone = phone;
        this.assignedAreaId = assignedAreaId;
        this.capacityPerShift = capacityPerShift;
        this.currentLoad = 0;
        this.active = true;
    }

    public String getDriverId() { return driverId; }
    public void setDriverId(String driverId) { this.driverId = driverId; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }

    public String getAssignedAreaId() { return assignedAreaId; }
    public void setAssignedAreaId(String assignedAreaId) { this.assignedAreaId = assignedAreaId; }

    public int getCapacityPerShift() { return capacityPerShift; }
    public void setCapacityPerShift(int capacityPerShift) { this.capacityPerShift = capacityPerShift; }

    public int getCurrentLoad() { return currentLoad; }
    public void setCurrentLoad(int currentLoad) { this.currentLoad = currentLoad; }

    public boolean isActive() { return active; }
    public void setActive(boolean active) { this.active = active; }

    public int getRemainingCapacity() {
        return Math.max(0, capacityPerShift - currentLoad);
    }

    public boolean canAcceptMoreOrders() {
        return active && currentLoad < capacityPerShift;
    }

    @Override
    public String toString() {
        return name + " (" + driverId + ") [Tải: " + currentLoad + "/" + capacityPerShift + "]";
    }
}
