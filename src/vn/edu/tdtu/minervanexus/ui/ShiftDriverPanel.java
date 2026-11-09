package vn.edu.tdtu.minervanexus.ui;

import vn.edu.tdtu.minervanexus.model.Driver;
import vn.edu.tdtu.minervanexus.service.IDriverShiftService;

import javax.swing.*;
import javax.swing.table.DefaultTableModel;
import java.awt.*;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

public class ShiftDriverPanel extends JPanel {
    private final IDriverShiftService driverShiftService;
    private final Runnable onDataChanged;

    private JTable driverTable;
    private DefaultTableModel driverTableModel;

    public ShiftDriverPanel(IDriverShiftService driverShiftService, Runnable onDataChanged) {
        this.driverShiftService = driverShiftService;
        this.onDataChanged = onDataChanged;
        initComponents();
        reloadDrivers();
    }

    private void initComponents() {
        setLayout(new BorderLayout(10, 10));
        setBorder(BorderFactory.createEmptyBorder(10, 10, 10, 10));

        // Top Panel
        JPanel topPanel = new JPanel(new BorderLayout());
        JLabel lblTitle = new JLabel("QUẢN LÝ CA GIAO & DANH SÁCH TÀI XẾ TRỰC THUỘC HUB");
        lblTitle.setFont(new Font("SansSerif", Font.BOLD, 15));
        lblTitle.setForeground(new Color(24, 43, 73));
        topPanel.add(lblTitle, BorderLayout.WEST);

        JPanel btnPanel = new JPanel(new FlowLayout(FlowLayout.RIGHT));
        JButton btnCreateShift = new JButton("+ Tạo ca trực mới");
        JButton btnAddDriver = new JButton("+ Đăng ký tài xế mới");
        btnPanel.add(btnCreateShift);
        btnPanel.add(btnAddDriver);
        topPanel.add(btnPanel, BorderLayout.EAST);
        add(topPanel, BorderLayout.NORTH);

        // Center: Drivers Table
        String[] cols = {"Mã Tài Xế", "Họ Và Tên", "Số Điện Thoại", "Tuyến Phụ Trách", "Tải Hiện Tại", "Sức Chứa Ca", "Tỷ Lệ Tải (%)", "Trạng Thái"};
        driverTableModel = new DefaultTableModel(cols, 0) {
            @Override
            public boolean isCellEditable(int row, int col) { return false; }
        };
        driverTable = new JTable(driverTableModel);
        driverTable.setRowHeight(25);
        add(new JScrollPane(driverTable), BorderLayout.CENTER);

        // Events
        btnCreateShift.addActionListener(e -> {
            driverShiftService.createShift("HUB-Q7-01", LocalDate.now(), LocalTime.of(8, 0), LocalTime.of(12, 0));
            JOptionPane.showMessageDialog(this, "Đã mở ca giao sáng (08:00 - 12:00) tại Hub Quận 7 thành công!", "Mở ca giao", JOptionPane.INFORMATION_MESSAGE);
            if (onDataChanged != null) onDataChanged.run();
        });

        btnAddDriver.addActionListener(e -> {
            JTextField txtName = new JTextField();
            JTextField txtPhone = new JTextField();
            JTextField txtArea = new JTextField("Q7_TAN_THUAN");
            JTextField txtCap = new JTextField("15");

            Object[] fields = {
                    "Họ tên tài xế:", txtName,
                    "Số điện thoại:", txtPhone,
                    "Khu vực phụ trách:", txtArea,
                    "Sức chứa tối đa (đơn):", txtCap
            };

            int res = JOptionPane.showConfirmDialog(this, fields, "Đăng ký tài xế mới", JOptionPane.OK_CANCEL_OPTION);
            if (res == JOptionPane.OK_OPTION && !txtName.getText().trim().isEmpty()) {
                String id = "DRV-" + String.format("%02d", driverShiftService.getAllDrivers().size() + 1);
                int cap = 15;
                try { cap = Integer.parseInt(txtCap.getText().trim()); } catch (Exception ignored) {}
                Driver d = new Driver(id, txtName.getText().trim(), txtPhone.getText().trim(), txtArea.getText().trim(), cap);
                driverShiftService.registerDriver(d);
                reloadDrivers();
                if (onDataChanged != null) onDataChanged.run();
            }
        });
    }

    public void reloadDrivers() {
        driverTableModel.setRowCount(0);
        List<Driver> drivers = driverShiftService.getAllDrivers();
        for (Driver d : drivers) {
            double pct = d.getCapacityPerShift() > 0 ? ((double) d.getCurrentLoad() / d.getCapacityPerShift()) * 100.0 : 0.0;
            String status = d.isActive() ? (d.canAcceptMoreOrders() ? "Sẵn sàng nhận đơn" : "Đã đầy tải") : "Nghỉ";
            driverTableModel.addRow(new Object[]{
                    d.getDriverId(),
                    d.getName(),
                    d.getPhone(),
                    d.getAssignedAreaId(),
                    d.getCurrentLoad(),
                    d.getCapacityPerShift(),
                    String.format("%.1f%%", pct),
                    status
            });
        }
    }
}

