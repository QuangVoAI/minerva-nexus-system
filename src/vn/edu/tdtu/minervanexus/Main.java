package vn.edu.tdtu.minervanexus;

import vn.edu.tdtu.minervanexus.common.AppConstants;
import vn.edu.tdtu.minervanexus.repository.AssignmentRepository;
import vn.edu.tdtu.minervanexus.repository.DriverRepository;
import vn.edu.tdtu.minervanexus.repository.OrderRepository;
import vn.edu.tdtu.minervanexus.repository.ShiftRepository;
import vn.edu.tdtu.minervanexus.service.IAnalyticsService;
import vn.edu.tdtu.minervanexus.service.IDispatchEngine;
import vn.edu.tdtu.minervanexus.service.IDriverShiftService;
import vn.edu.tdtu.minervanexus.service.IOrderService;
import vn.edu.tdtu.minervanexus.service.impl.AnalyticsServiceImpl;
import vn.edu.tdtu.minervanexus.service.impl.DispatchEngineImpl;
import vn.edu.tdtu.minervanexus.service.impl.DriverShiftServiceImpl;
import vn.edu.tdtu.minervanexus.service.impl.OrderServiceImpl;
import vn.edu.tdtu.minervanexus.ui.MainFrame;

import javax.swing.*;
import java.io.File;
import java.time.LocalDate;
import java.time.LocalTime;

public class Main {
    public static void main(String[] args) {
        System.out.println("=================================================");
        System.out.println("  KHỞI ĐỘNG HỆ THỐNG MINERVA NEXUS (DEMO VERSION)");
        System.out.println("  Đồ án: Phân tích & Thiết kế Yêu cầu - TDTU N10");
        System.out.println("  Leader: Võ Xuân Quang (523H0173)");
        System.out.println("=================================================");

        // 1. Khởi tạo tầng Repository
        OrderRepository orderRepository = new OrderRepository();
        DriverRepository driverRepository = new DriverRepository();
        ShiftRepository shiftRepository = new ShiftRepository();
        AssignmentRepository assignmentRepository = new AssignmentRepository();

        // 2. Khởi tạo tầng Service
        IOrderService orderService = new OrderServiceImpl(orderRepository);
        IDriverShiftService driverShiftService = new DriverShiftServiceImpl(driverRepository, shiftRepository);
        IDispatchEngine dispatchEngine = new DispatchEngineImpl(orderService, driverShiftService, assignmentRepository);
        IAnalyticsService analyticsService = new AnalyticsServiceImpl(orderService, driverShiftService, dispatchEngine);

        // 3. Tự động nạp dữ liệu mẫu ban đầu từ thư mục data/
        File driversFile = new File(AppConstants.SAMPLE_DRIVERS_CSV);
        if (driversFile.exists()) {
            driverShiftService.importDriversFromCsv(driversFile);
            System.out.println("✓ Đã nạp danh sách tài xế từ " + AppConstants.SAMPLE_DRIVERS_CSV);
        }

        File ordersFile = new File(AppConstants.SAMPLE_ORDERS_CSV);
        if (ordersFile.exists()) {
            orderService.importOrdersFromCsv(ordersFile);
            System.out.println("✓ Đã nạp danh mục đơn hàng từ " + AppConstants.SAMPLE_ORDERS_CSV);
        }

        driverShiftService.createShift("HUB-Q7-01", LocalDate.now(), LocalTime.of(8, 0), LocalTime.of(12, 0));
        System.out.println("✓ Đã khởi tạo ca giao hàng sáng (08:00 - 12:00) tại Hub Quận 7");

        // 4. Khởi chạy Giao diện đồ họa Swing
        SwingUtilities.invokeLater(() -> {
            try {
                // Tùy biến Look and Feel theo hệ điều hành
                UIManager.setLookAndFeel(UIManager.getSystemLookAndFeelClassName());
            } catch (Exception ignored) {}

            MainFrame frame = new MainFrame(orderService, driverShiftService, dispatchEngine, analyticsService);
            frame.setVisible(true);
            System.out.println("✓ Giao diện đồ họa Minerva Nexus đã sẵn sàng!");
        });
    }
}
