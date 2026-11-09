package vn.edu.tdtu.minervanexus.common;

/**
 * Vai trò người dùng theo ma trận phân quyền SRS 3.2 & 5.1
 */
public enum UserRole {
    MANAGER("Quản lý điều hành"),
    DISPATCHER("Điều phối viên"),
    DRIVER("Tài xế giao hàng");

    private final String description;

    UserRole(String description) {
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
