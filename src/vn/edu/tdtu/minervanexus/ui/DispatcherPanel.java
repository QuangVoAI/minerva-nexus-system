package vn.edu.tdtu.minervanexus.ui;

import vn.edu.tdtu.minervanexus.common.OrderStatus;
import vn.edu.tdtu.minervanexus.common.RiskLevel;
import vn.edu.tdtu.minervanexus.model.Assignment;
import vn.edu.tdtu.minervanexus.model.DeliveryOrder;
import vn.edu.tdtu.minervanexus.model.RiskPrediction;
import vn.edu.tdtu.minervanexus.service.IDispatchEngine;
import vn.edu.tdtu.minervanexus.service.IOrderService;

import javax.swing.*;
import javax.swing.table.DefaultTableCellRenderer;
import javax.swing.table.DefaultTableModel;
import java.awt.*;
import java.util.List;

public class DispatcherPanel extends JPanel {
    private final IOrderService orderService;
    private final IDispatchEngine dispatchEngine;
    private final Runnable onDataChanged;

    private JTable orderTable;
    private DefaultTableModel orderTableModel;
    private JTable suggestionTable;
    private DefaultTableModel suggestionTableModel;

    public DispatcherPanel(IOrderService orderService, IDispatchEngine dispatchEngine, Runnable onDataChanged) {
        this.orderService = orderService;
        this.dispatchEngine = dispatchEngine;
        this.onDataChanged = onDataChanged;
        initComponents();
        reloadOrders();
    }

    private void initComponents() {
        setLayout(new BorderLayout(10, 10));
        setBorder(BorderFactory.createEmptyBorder(10, 10, 10, 10));

        // Top Panel: Title & Actions
        JPanel topPanel = new JPanel(new BorderLayout());
        JLabel lblTitle = new JLabel("BÀN ĐIỀU PHỐI ĐƠN HÀNG & CẢNH BÁO NGUY CƠ SLA (DISPATCHER CONSOLE)");
        lblTitle.setFont(new Font("SansSerif", Font.BOLD, 15));
        lblTitle.setForeground(new Color(24, 43, 73));
        topPanel.add(lblTitle, BorderLayout.WEST);

        JPanel btnPanel = new JPanel(new FlowLayout(FlowLayout.RIGHT));
        JButton btnScanAI = new JButton("⚡ Chạy gợi ý phân công theo quy tắc");
        btnScanAI.setBackground(new Color(13, 110, 253));
        btnScanAI.setForeground(Color.WHITE);
        btnScanAI.setOpaque(true);
        btnScanAI.setBorderPainted(false);
        btnScanAI.setFont(new Font("SansSerif", Font.BOLD, 12));

        JButton btnRefresh = new JButton("Làm mới dữ liệu");
        btnPanel.add(btnRefresh);
        btnPanel.add(btnScanAI);
        topPanel.add(btnPanel, BorderLayout.EAST);
        add(topPanel, BorderLayout.NORTH);

        // Center: SplitPane between Orders and Suggestions
        JSplitPane splitPane = new JSplitPane(JSplitPane.VERTICAL_SPLIT);
        splitPane.setResizeWeight(0.6);

        // 1. Order Table Panel
        JPanel orderPanel = new JPanel(new BorderLayout());
        orderPanel.setBorder(BorderFactory.createTitledBorder("Danh sách Đơn hàng tại Hub (Kèm Đánh giá Rủi ro SLA)"));
        String[] orderCols = {"Mã Đơn", "Mã Vận Đơn", "Người Nhận", "Khu Vực", "Gói Dịch Vụ", "Hạn SLA", "Rủi Ro SLA", "Trạng Thái", "Tài Xế Gán"};
        orderTableModel = new DefaultTableModel(orderCols, 0) {
            @Override
            public boolean isCellEditable(int row, int column) { return false; }
        };
        orderTable = new JTable(orderTableModel);
        orderTable.setRowHeight(25);
        setupRiskColumnRenderer();
        orderPanel.add(new JScrollPane(orderTable), BorderLayout.CENTER);
        splitPane.setTopComponent(orderPanel);

        // 2. Suggestions Panel
        JPanel suggestPanel = new JPanel(new BorderLayout());
        suggestPanel.setBorder(BorderFactory.createTitledBorder("Gợi ý Phân công Tự động (Cặp Đơn - Tài xế tối ưu)"));
        String[] suggestCols = {"Mã Gợi Ý", "Mã Đơn", "Tài Xế Đề Xuất", "Điểm Khớp", "Lý Do Ghép Nối", "Trạng Thái Quyết Định"};
        suggestionTableModel = new DefaultTableModel(suggestCols, 0) {
            @Override
            public boolean isCellEditable(int row, int column) { return false; }
        };
        suggestionTable = new JTable(suggestionTableModel);
        suggestionTable.setRowHeight(25);

        JPanel suggestActions = new JPanel(new FlowLayout(FlowLayout.RIGHT));
        JButton btnApprove = new JButton("✔ Phê duyệt phân công đã chọn");
        btnApprove.setBackground(new Color(25, 135, 84));
        btnApprove.setForeground(Color.WHITE);
        btnApprove.setOpaque(true);
        btnApprove.setBorderPainted(false);

        JButton btnReject = new JButton("✖ Từ chối đề xuất");
        suggestActions.add(btnReject);
        suggestActions.add(btnApprove);

        suggestPanel.add(new JScrollPane(suggestionTable), BorderLayout.CENTER);
        suggestPanel.add(suggestActions, BorderLayout.SOUTH);
        splitPane.setBottomComponent(suggestPanel);

        add(splitPane, BorderLayout.CENTER);

        // Events
        btnRefresh.addActionListener(e -> reloadOrders());

        btnScanAI.addActionListener(e -> {
            List<Assignment> suggestions = dispatchEngine.generateDispatchSuggestions("SHIFT-01");
            reloadSuggestions(suggestions);
            if (suggestions.isEmpty()) {
                JOptionPane.showMessageDialog(this, "Không có đơn hàng nào chờ gán hoặc tất cả tài xế đã đầy tải!", "Thông báo", JOptionPane.INFORMATION_MESSAGE);
            } else {
                JOptionPane.showMessageDialog(this, "Đã sinh thành công " + suggestions.size() + " gợi ý ghép đơn - tài xế tối ưu!", "Dispatch Engine", JOptionPane.INFORMATION_MESSAGE);
            }
        });

        btnApprove.addActionListener(e -> {
            int selectedRow = suggestionTable.getSelectedRow();
            if (selectedRow < 0) {
                JOptionPane.showMessageDialog(this, "Vui lòng chọn một dòng gợi ý để phê duyệt!", "Chú ý", JOptionPane.WARNING_MESSAGE);
                return;
            }
            String assignId = (String) suggestionTableModel.getValueAt(selectedRow, 0);
            boolean ok = dispatchEngine.approveAssignment(assignId, "DISPATCHER_01");
            if (ok) {
                JOptionPane.showMessageDialog(this, "Đã duyệt phân công mã " + assignId + " thành công!", "Thành công", JOptionPane.INFORMATION_MESSAGE);
                reloadOrders();
                reloadSuggestions(dispatchEngine.getPendingAssignments());
                if (onDataChanged != null) onDataChanged.run();
            }
        });

        btnReject.addActionListener(e -> {
            int selectedRow = suggestionTable.getSelectedRow();
            if (selectedRow >= 0) {
                String assignId = (String) suggestionTableModel.getValueAt(selectedRow, 0);
                dispatchEngine.rejectAssignment(assignId);
                reloadSuggestions(dispatchEngine.getPendingAssignments());
            }
        });
    }

    private void setupRiskColumnRenderer() {
        orderTable.getColumnModel().getColumn(6).setCellRenderer(new DefaultTableCellRenderer() {
            @Override
            public Component getTableCellRendererComponent(JTable table, Object value, boolean isSelected, boolean hasFocus, int row, int column) {
                Component c = super.getTableCellRendererComponent(table, value, isSelected, hasFocus, row, column);
                if (value != null) {
                    String val = value.toString();
                    if (val.contains("CAO")) {
                        c.setBackground(new Color(255, 204, 204));
                        c.setForeground(new Color(178, 34, 34));
                        setFont(getFont().deriveFont(Font.BOLD));
                    } else if (val.contains("CẢNH BÁO")) {
                        c.setBackground(new Color(255, 243, 205));
                        c.setForeground(new Color(133, 100, 4));
                        setFont(getFont().deriveFont(Font.BOLD));
                    } else {
                        c.setBackground(new Color(209, 231, 221));
                        c.setForeground(new Color(15, 81, 50));
                    }
                }
                if (isSelected) {
                    c.setBackground(table.getSelectionBackground());
                    c.setForeground(table.getSelectionForeground());
                }
                return c;
            }
        });
    }

    public void reloadOrders() {
        orderTableModel.setRowCount(0);
        List<DeliveryOrder> orders = orderService.getAllOrders();
        for (DeliveryOrder o : orders) {
            RiskPrediction pred = dispatchEngine.predictOrderRisk(o);
            String riskText = pred.getRiskLabel() == RiskLevel.HIGH ? "🔴 NGUY CƠ CAO" :
                    (pred.getRiskLabel() == RiskLevel.MEDIUM ? "🟡 CẢNH BÁO" : "🟢 AN TOÀN");

            String driverText = (o.getAssignedDriverId() != null) ? o.getAssignedDriverId() : "Chưa gán";
            orderTableModel.addRow(new Object[]{
                    o.getOrderId(),
                    o.getTrackingCode(),
                    o.getRecipientName(),
                    o.getAreaId(),
                    o.getServiceLevel().getDisplayName(),
                    o.getFormattedSla(),
                    riskText,
                    o.getStatus().getDescription(),
                    driverText
            });
        }
    }

    public void reloadSuggestions(List<Assignment> suggestions) {
        suggestionTableModel.setRowCount(0);
        for (Assignment a : suggestions) {
            suggestionTableModel.addRow(new Object[]{
                    a.getAssignmentId(),
                    a.getOrderId(),
                    a.getDriverId(),
                    String.format("%.0f điểm", a.getSuggestedScore()),
                    a.getMatchReason(),
                    a.getDecisionStatus()
            });
        }
    }
}

