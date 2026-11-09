package vn.edu.tdtu.minervanexus.common;

/**
 * Loại gói dịch vụ vận chuyển và cam kết thời gian SLA
 */
public enum ServiceLevel {
    EXPRESS("Hỏa tốc", 120),       // 2 giờ
    STANDARD("Chuẩn", 240),        // 4 giờ
    ECONOMY("Tiết kiệm", 480);    // 8 giờ

    private final String displayName;
    private final int slaMinutes;

    ServiceLevel(String displayName, int slaMinutes) {
        this.displayName = displayName;
        this.slaMinutes = slaMinutes;
    }

    public String getDisplayName() {
        return displayName;
    }

    public int getSlaMinutes() {
        return slaMinutes;
    }

    @Override
    public String toString() {
        return displayName;
    }
}
