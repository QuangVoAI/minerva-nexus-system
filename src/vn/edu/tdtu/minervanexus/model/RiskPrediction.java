package vn.edu.tdtu.minervanexus.model;

import vn.edu.tdtu.minervanexus.common.RiskLevel;
import java.time.LocalDateTime;

public class RiskPrediction {
    private String predictionId;
    private String orderId;
    private String modelVersion;
    private double riskProbability; // 0.0 -> 1.0
    private RiskLevel riskLabel;
    private String explanation;
    private LocalDateTime predictedAt;

    public RiskPrediction() {
        this.predictedAt = LocalDateTime.now();
    }

    public RiskPrediction(String predictionId, String orderId, String modelVersion,
                          double riskProbability, RiskLevel riskLabel, String explanation) {
        this.predictionId = predictionId;
        this.orderId = orderId;
        this.modelVersion = modelVersion;
        this.riskProbability = riskProbability;
        this.riskLabel = riskLabel;
        this.explanation = explanation;
        this.predictedAt = LocalDateTime.now();
    }

    public String getPredictionId() { return predictionId; }
    public void setPredictionId(String predictionId) { this.predictionId = predictionId; }

    public String getOrderId() { return orderId; }
    public void setOrderId(String orderId) { this.orderId = orderId; }

    public String getModelVersion() { return modelVersion; }
    public void setModelVersion(String modelVersion) { this.modelVersion = modelVersion; }

    public double getRiskProbability() { return riskProbability; }
    public void setRiskProbability(double riskProbability) { this.riskProbability = riskProbability; }

    public RiskLevel getRiskLabel() { return riskLabel; }
    public void setRiskLabel(RiskLevel riskLabel) { this.riskLabel = riskLabel; }

    public String getExplanation() { return explanation; }
    public void setExplanation(String explanation) { this.explanation = explanation; }

    public LocalDateTime getPredictedAt() { return predictedAt; }
    public void setPredictedAt(LocalDateTime predictedAt) { this.predictedAt = predictedAt; }
}

