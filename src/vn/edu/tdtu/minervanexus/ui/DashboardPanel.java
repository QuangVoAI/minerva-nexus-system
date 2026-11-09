package vn.edu.tdtu.minervanexus.ui;

import vn.edu.tdtu.minervanexus.service.IAnalyticsService;

import javax.swing.*;
import javax.swing.table.DefaultTableModel;
import java.awt.*;
import java.util.Map;

public class DashboardPanel extends JPanel {
    private final IAnalyticsService analyticsService;

    private JLabel lblTotalOrders;
    private JLabel lblSuccessRate;
    private JLabel lblSlaRate;
    private JLabel lblHighRisk;
    private JTable driverLoadTable;
    private DefaultTableModel driverLoadModel;

    public DashboardPanel(IAnalyticsService analyticsService) {
        this.analyticsService = analyticsService;
        initComponents();
        reloadMetrics();
    }

    private void initComponents() {
        setLayout(new BorderLayout(15, 15));
        setBorder(BorderFactory.createEmptyBorder(15, 15, 15, 15));

        // Top: KPI Cards (4 Cards)
        JPanel cardsPanel = new JPanel(new GridLayout(1, 4, 15, 15));

        lblTotalOrders = new JLabel("0", SwingConstants.CENTER);
        lblSuccessRate = new JLabel("0.0%", SwingConstants.CENTER);
        lblSlaRate = new JLabel("0.0%", SwingConstants.CENTER);
        lblHighRisk = new JLabel("0", SwingConstants.CENTER);

        cardsPanel.add(createCard("TỔNG ĐƠN VẬN HÀNH", lblTotalOrders, new Color(13, 110, 253), Color.WHITE));
        cardsPanel.add(createCard("TỶ LỆ GIAO THÀNH CÔNG", lblSuccessRate, new Color(25, 135, 84), Color.WHITE));
        cardsPanel.add(createCard("TỶ LỆ ĐÚNG HẠN SLA", lblSlaRate, new Color(111, 66, 193), Color.WHITE));
        cardsPanel.add(createCard("ĐƠN NGUY CƠ TRỄ (SLA)", lblHighRisk, new Color(220, 53, 69), Color.WHITE));

        add(cardsPanel, BorderLayout.NORTH);

        // Center: Driver Workload Table
        JPanel centerPanel = new JPanel(new BorderLayout(5, 5));
        centerPanel.setBorder(BorderFactory.createTitledBorder("Mức độ Tải của Đội ngũ Tài xế theo Ca (Driver Workload Utilization)"));

        String[] cols = {"Tên Tài Xế", "Tỷ Lệ Tải Hiện Tại (%)", "Mức Độ"};
        driverLoadModel = new DefaultTableModel(cols, 0) {
            @Override
            public boolean isCellEditable(int r, int c) { return false; }
        };
        driverLoadTable = new JTable(driverLoadModel);
        driverLoadTable.setRowHeight(25);
        centerPanel.add(new JScrollPane(driverLoadTable), BorderLayout.CENTER);

        add(centerPanel, BorderLayout.CENTER);
    }

    private JPanel createCard(String title, JLabel valueLabel, Color bg, Color fg) {
        JPanel p = new JPanel(new BorderLayout(5, 5));
        p.setBackground(bg);
        p.setBorder(BorderFactory.createCompoundBorder(
                BorderFactory.createLineBorder(bg.darker(), 1),
                BorderFactory.createEmptyBorder(12, 10, 12, 10)
        ));

        JLabel lblT = new JLabel(title, SwingConstants.CENTER);
        lblT.setForeground(fg);
        lblT.setFont(new Font("SansSerif", Font.BOLD, 12));

        valueLabel.setForeground(fg);
        valueLabel.setFont(new Font("SansSerif", Font.BOLD, 26));

        p.add(lblT, BorderLayout.NORTH);
        p.add(valueLabel, BorderLayout.CENTER);
        return p;
    }

    public void reloadMetrics() {
        lblTotalOrders.setText(String.valueOf(analyticsService.getTotalOrders()));
        lblSuccessRate.setText(String.format("%.1f%%", analyticsService.getSuccessDeliveryRate()));
        lblSlaRate.setText(String.format("%.1f%%", analyticsService.getOnTimeSlaRate()));
        lblHighRisk.setText(String.valueOf(analyticsService.getHighRiskOrdersCount()));

        driverLoadModel.setRowCount(0);
        Map<String, Double> map = analyticsService.getDriverWorkloadPercentage();
        for (Map.Entry<String, Double> e : map.entrySet()) {
            double load = e.getValue();
            String level = load >= 80.0 ? "Gần đầy tải" : (load >= 40.0 ? "Bình thường" : "Tải nhẹ");
            driverLoadModel.addRow(new Object[]{
                    e.getKey(),
                    String.format("%.1f%%", load),
                    level
            });
        }
    }
}
