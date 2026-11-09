package vn.edu.tdtu.minervanexus.ui;

import vn.edu.tdtu.minervanexus.common.FailureReason;
import vn.edu.tdtu.minervanexus.common.OrderStatus;
import vn.edu.tdtu.minervanexus.model.DeliveryOrder;
import vn.edu.tdtu.minervanexus.model.Driver;
import vn.edu.tdtu.minervanexus.service.IDriverShiftService;
import vn.edu.tdtu.minervanexus.service.IOrderService;

import javax.swing.*;
import javax.swing.table.DefaultTableModel;
import java.awt.*;
import java.util.List;

public class DriverExecutionPanel extends JPanel {
    private final IOrderService orderService;
    private final IDriverShiftService driverShiftService;
    private final Runnable onDataChanged;

    private JComboBox<Driver> driverCombo;
    private JTable taskTable;
    private DefaultTableModel taskTableModel;

    public DriverExecutionPanel(IOrderService orderService, IDriverShiftService driverShiftService, Runnable onDataChanged) {
        this.orderService = orderService;
        this.driverShiftService = driverShiftService;
        this.onDataChanged = onDataChanged;
        initComponents();
    }

    private void initComponents() {
        setLayout(new BorderLayout(10, 10));
        setBorder(BorderFactory.createEmptyBorder(10, 10, 10, 10));

        // Top: Driver Selection & Role simulation
        JPanel topPanel = new JPanel(new FlowLayout(FlowLayout.LEFT, 10, 5));
        topPanel.setBorder(BorderFactory.createTitledBorder("Mô phỏng Ứng dụng Di động dành cho Tài xế (Driver Mobile App Simulator)"));

        JLabel lblSelect = new JLabel("Chọn tài xế đang đăng nhập:");
        lblSelect.setFont(new Font("SansSerif", Font.BOLD, 12));
        driverCombo = new JComboBox<>();
        driverCombo.setPreferredSize(new Dimension(300, 30));

        JButton btnReload = new JButton("Làm mới danh sách");
        topPanel.add(lblSelect);
        topPanel.add(driverCombo);
        topPanel.add(btnReload);
        add(topPanel, BorderLayout.NORTH);

        // Center: Tasks Table
        String[] cols = {"Mã Đơn", "Mã Vận Đơn", "Người Nhận", "Số Điện Thoại", "Địa Chỉ Giao", "Tiền Thu COD", "Hạn SLA", "Trạng Thái Hiện Tại"};
        taskTableModel = new DefaultTableModel(cols, 0) {
            @Override
            public boolean isCellEditable(int row, int col) { return false; }
        };
        taskTable = new JTable(taskTableModel);
        taskTable.setRowHeight(25);
        add(new JScrollPane(taskTable), BorderLayout.CENTER);

        // Bottom: Driver Actions
        JPanel bottomPanel = new JPanel(new FlowLayout(FlowLayout.RIGHT, 15, 10));

        JButton btnStartTransit = new JButton("🚀 Bắt đầu đi giao (IN_TRANSIT)");
        btnStartTransit.setBackground(new Color(13, 110, 253));
        btnStartTransit.setForeground(Color.WHITE);
        btnStartTransit.setOpaque(true);
        btnStartTransit.setBorderPainted(false);

        JButton btnDelivered = new JButton("✔ Xác nhận Giao thành công (DELIVERED)");
        btnDelivered.setBackground(new Color(25, 135, 84));
        btnDelivered.setForeground(Color.WHITE);
        btnDelivered.setOpaque(true);
        btnDelivered.setBorderPainted(false);

        JButton btnFailed = new JButton("✖ Báo Giao thất bại (FAILED)");
        btnFailed.setBackground(new Color(220, 53, 69));
        btnFailed.setForeground(Color.WHITE);
        btnFailed.setOpaque(true);
        btnFailed.setBorderPainted(false);

        bottomPanel.add(btnStartTransit);
        bottomPanel.add(btnDelivered);
        bottomPanel.add(btnFailed);
        add(bottomPanel, BorderLayout.SOUTH);

        // Events
        driverCombo.addActionListener(e -> reloadDriverTasks());
        btnReload.addActionListener(e -> updateDriverCombo());

        btnStartTransit.addActionListener(e -> {
            DeliveryOrder order = getSelectedOrder();
            if (order != null) {
                Driver d = (Driver) driverCombo.getSelectedItem();
                orderService.updateOrderStatus(order.getOrderId(), OrderStatus.IN_TRANSIT, d != null ? d.getDriverId() : "DRIVER", "Tài xế bắt đầu hành trình phát");
                reloadDriverTasks();
                if (onDataChanged != null) onDataChanged.run();
            }
        });

        btnDelivered.addActionListener(e -> {
            DeliveryOrder order = getSelectedOrder();
            if (order != null) {
                Driver d = (Driver) driverCombo.getSelectedItem();
                orderService.updateOrderStatus(order.getOrderId(), OrderStatus.DELIVERED, d != null ? d.getDriverId() : "DRIVER", "Giao thành công cho người nhận");
                if (d != null) driverShiftService.decrementDriverLoad(d.getDriverId());
                JOptionPane.showMessageDialog(this, "Đã cập nhật đơn " + order.getTrackingCode() + " thành công!", "Giao hàng thành công", JOptionPane.INFORMATION_MESSAGE);
                reloadDriverTasks();
                if (onDataChanged != null) onDataChanged.run();
            }
        });

        btnFailed.addActionListener(e -> {
            DeliveryOrder order = getSelectedOrder();
            if (order != null) {
                JComboBox<FailureReason> reasonBox = new JComboBox<>(FailureReason.values());
                JTextField txtNote = new JTextField();
                Object[] fields = {
                        "Đơn hàng:", order.getTrackingCode() + " - " + order.getRecipientName(),
                        "Chọn lý do thất bại (SRS 4.5.4):", reasonBox,
                        "Ghi chú bổ sung:", txtNote
                };
                int res = JOptionPane.showConfirmDialog(this, fields, "Báo cáo sự cố giao thất bại", JOptionPane.OK_CANCEL_OPTION);
                if (res == JOptionPane.OK_OPTION) {
                    FailureReason reason = (FailureReason) reasonBox.getSelectedItem();
                    Driver d = (Driver) driverCombo.getSelectedItem();
                    orderService.reportDeliveryFailure(order.getOrderId(), d != null ? d.getDriverId() : "DRIVER", reason, txtNote.getText().trim());
                    if (d != null) driverShiftService.decrementDriverLoad(d.getDriverId());
                    JOptionPane.showMessageDialog(this, "Đã ghi nhận sự cố giao thất bại cho đơn " + order.getTrackingCode(), "Ghi nhận sự cố", JOptionPane.WARNING_MESSAGE);
                    reloadDriverTasks();
                    if (onDataChanged != null) onDataChanged.run();
                }
            }
        });

        updateDriverCombo();
    }

    private DeliveryOrder getSelectedOrder() {
        int row = taskTable.getSelectedRow();
        if (row < 0) {
            JOptionPane.showMessageDialog(this, "Vui lòng chọn một đơn hàng trong danh sách!", "Chú ý", JOptionPane.WARNING_MESSAGE);
            return null;
        }
        String orderId = (String) taskTableModel.getValueAt(row, 0);
        return orderService.getOrderById(orderId).orElse(null);
    }

    public void updateDriverCombo() {
        driverCombo.removeAllItems();
        List<Driver> drivers = driverShiftService.getAllDrivers();
        for (Driver d : drivers) {
            driverCombo.addItem(d);
        }
        reloadDriverTasks();
    }

    public void reloadDriverTasks() {
        taskTableModel.setRowCount(0);
        Driver selectedDriver = (Driver) driverCombo.getSelectedItem();
        if (selectedDriver == null) return;

        List<DeliveryOrder> orders = orderService.getOrdersByDriver(selectedDriver.getDriverId());
        for (DeliveryOrder o : orders) {
            taskTableModel.addRow(new Object[]{
                    o.getOrderId(),
                    o.getTrackingCode(),
                    o.getRecipientName(),
                    o.getRecipientPhone(),
                    o.getDeliveryAddress(),
                    String.format("%,.0f VNĐ", o.getCodAmount()),
                    o.getFormattedSla(),
                    o.getStatus().getDescription()
            });
        }
    }
}

