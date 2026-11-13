export interface AnalyticsMetrics {
  totalOrders: number;
  deliveredCount: number;
  failedCount: number;
  pendingCount: number;
  successRate: number;
  slaRate: number;
  highRiskCount: number;
}
