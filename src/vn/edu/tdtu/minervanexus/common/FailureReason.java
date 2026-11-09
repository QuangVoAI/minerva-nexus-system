package vn.edu.tdtu.minervanexus.common;

/**
 * Lý do giao hàng thất bại theo danh mục chuẩn SRS 4.5.4 (UC-16)
 */
public enum FailureReason {
    CUSTOMER_UNREACHABLE("Khách không nghe máy (đã gọi 3 lần)"),
    WRONG_ADDRESS("Sai địa chỉ hoặc không tìm thấy nhà"),
    CUSTOMER_RESCHEDULED("Khách hẹn giao lại ngày/giờ khác"),
    CUSTOMER_REJECTED("Khách từ chối nhận hàng"),
    FORCE_MAJEURE("Thời tiết xấu / ngập lụt / sự cố phương tiện"),
    OTHER("Lý do khác");

    private final String description;

    FailureReason(String description) {
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

