package vn.edu.tdtu.minervanexus.service;

import java.util.Map;

public interface IAnalyticsService {
    int getTotalOrders();

    int getDeliveredOrdersCount();

    int getFailedOrdersCount();

    int getPendingOrdersCount();

    double getSuccessDeliveryRate();

    double getOnTimeSlaRate();

    int getHighRiskOrdersCount();

    Map<String, Double> getDriverWorkloadPercentage();
}
