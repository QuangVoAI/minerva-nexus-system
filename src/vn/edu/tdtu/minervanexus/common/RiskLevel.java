package vn.edu.tdtu.minervanexus.common;

/**
 * Mức độ rủi ro trễ hạn SLA dự báo bởi Dispatch Engine / AI
 */
public enum RiskLevel {
    LOW("Thấp", "#28A745"),       // Xanh lá
    MEDIUM("Trung bình", "#FFC107"), // Vàng cam
    HIGH("Nguy cơ cao", "#DC3545");   // Đỏ

    private final String label;
    private final String colorHex;

    RiskLevel(String label, String colorHex) {
        this.label = label;
        this.colorHex = colorHex;
    }

    public String getLabel() {
        return label;
    }

    public String getColorHex() {
        return colorHex;
    }

    @Override
    public String toString() {
        return label;
    }
}
