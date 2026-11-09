package vn.edu.tdtu.minervanexus.common;

public final class AppConstants {
    private AppConstants() {}

    public static final String APP_NAME = "Minerva Nexus — Last-mile Delivery Dispatch System";
    public static final String APP_VERSION = "1.0.0-MVP";

    // SLA risk thresholds (phút còn lại)
    public static final int SLA_RISK_HIGH_MINUTES = 60;   // Dưới 60 phút -> Nguy cơ cao
    public static final int SLA_RISK_MEDIUM_MINUTES = 120; // 60 - 120 phút -> Cảnh báo

    // Sức tải mặc định tối đa của một tài xế trong một ca
    public static final int DEFAULT_DRIVER_CAPACITY = 15;

    // Đường dẫn dữ liệu mẫu
    public static final String SAMPLE_ORDERS_CSV = "data/sample_orders.csv";
    public static final String SAMPLE_DRIVERS_CSV = "data/sample_drivers.csv";
}

