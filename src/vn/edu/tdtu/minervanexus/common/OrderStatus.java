package vn.edu.tdtu.minervanexus.common;

/**
 * Trạng thái vòng đời của đơn hàng theo đặc tả SRS (BR-02 & Hình 5.2 State Machine)
 */
public enum OrderStatus {
    PENDING("Chờ tiếp nhận"),
    READY_TO_DISPATCH("Đủ điều kiện phát"),
    ASSIGNED("Đã gán tài xế"),
    IN_TRANSIT("Đang đi giao"),
    DELIVERED("Giao thành công"),
    FAILED("Giao thất bại"),
    RETURNED("Đã hoàn hàng"),
    CANCELLED("Đã hủy đơn");

    private final String description;

    OrderStatus(String description) {
        this.description = description;
    }

    public String getDescription() {
        return description;
    }

    @Override
    public String toString() {
        return description;
    }
}

