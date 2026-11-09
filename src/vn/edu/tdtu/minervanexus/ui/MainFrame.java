package vn.edu.tdtu.minervanexus.ui;

import vn.edu.tdtu.minervanexus.common.AppConstants;
import vn.edu.tdtu.minervanexus.service.IAnalyticsService;
import vn.edu.tdtu.minervanexus.service.IDispatchEngine;
import vn.edu.tdtu.minervanexus.service.IDriverShiftService;
import vn.edu.tdtu.minervanexus.service.IOrderService;

import javax.swing.*;
import java.awt.*;

public class MainFrame extends JFrame {
    private final IOrderService orderService;
    private final IDriverShiftService driverShiftService;
    private final IDispatchEngine dispatchEngine;
    private final IAnalyticsService analyticsService;

    private DispatcherPanel dispatcherPanel;
    private ShiftDriverPanel shiftDriverPanel;
    private DriverExecutionPanel driverExecutionPanel;
    private DashboardPanel dashboardPanel;

    public MainFrame(IOrderService orderService,
                     IDriverShiftService driverShiftService,
                     IDispatchEngine dispatchEngine,
                     IAnalyticsService analyticsService) {
        this.orderService = orderService;
        this.driverShiftService = driverShiftService;
        this.dispatchEngine = dispatchEngine;
        this.analyticsService = analyticsService;

        setTitle(AppConstants.APP_NAME + " - " + AppConstants.APP_VERSION + " [TDTU - N10]");
        setSize(1100, 700);
        setMinimumSize(new Dimension(950, 600));
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);

        initUI();
    }

    private void initUI() {
        Runnable refreshAll = this::refreshAllPanels;

        dispatcherPanel = new DispatcherPanel(orderService, dispatchEngine, refreshAll);
        shiftDriverPanel = new ShiftDriverPanel(driverShiftService, refreshAll);
        driverExecutionPanel = new DriverExecutionPanel(orderService, driverShiftService, refreshAll);
        dashboardPanel = new DashboardPanel(analyticsService);

        JTabbedPane tabbedPane = new JTabbedPane();
        tabbedPane.setFont(new Font("SansSerif", Font.BOLD, 13));

        tabbedPane.addTab("📦 1. Bàn Điều Phối & Cảnh Báo SLA", dispatcherPanel);
        tabbedPane.addTab("🚚 2. Quản Lý Ca & Đội Ngũ Tài Xế", shiftDriverPanel);
        tabbedPane.addTab("📱 3. Mô Phỏng Tác Vụ Tài Xế (Mobile)", driverExecutionPanel);
        tabbedPane.addTab("📊 4. Dashboard KPI Vận Hành", dashboardPanel);

        tabbedPane.addChangeListener(e -> refreshAllPanels());

        // Header Banner
        JPanel headerPanel = new JPanel(new BorderLayout());
        headerPanel.setBackground(new Color(24, 43, 73));
        headerPanel.setBorder(BorderFactory.createEmptyBorder(10, 15, 10, 15));

        JLabel lblBrand = new JLabel("MINERVA NEXUS — HỆ THỐNG ĐIỀU HÀNH GIAO HÀNG CHẶNG CUỐI THÔNG MINH");
        lblBrand.setForeground(Color.WHITE);
        lblBrand.setFont(new Font("SansSerif", Font.BOLD, 14));

        JLabel lblSub = new JLabel("Đồ án môn Phân Tích & Thiết Kế Yêu Cầu | TDTU - Lớp N10 | SV: Võ Xuân Quang (523H0173)");
        lblSub.setForeground(new Color(200, 220, 245));
        lblSub.setFont(new Font("SansSerif", Font.ITALIC, 11));

        headerPanel.add(lblBrand, BorderLayout.WEST);
        headerPanel.add(lblSub, BorderLayout.EAST);

        getContentPane().setLayout(new BorderLayout());
        getContentPane().add(headerPanel, BorderLayout.NORTH);
        getContentPane().add(tabbedPane, BorderLayout.CENTER);
    }

    public void refreshAllPanels() {
        if (dispatcherPanel != null) dispatcherPanel.reloadOrders();
        if (shiftDriverPanel != null) shiftDriverPanel.reloadDrivers();
        if (driverExecutionPanel != null) {
            driverExecutionPanel.updateDriverCombo();
            driverExecutionPanel.reloadDriverTasks();
        }
        if (dashboardPanel != null) dashboardPanel.reloadMetrics();
    }
}
