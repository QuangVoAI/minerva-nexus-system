import { apiClient } from './apiClient';
import type { AnalyticsMetrics } from '../types';

export const analyticsService = {
  /**
   * Lấy các chỉ số KPI vận hành theo lần cập nhật của Hub
   * GET /api/analytics
   */
  async getAnalytics(): Promise<AnalyticsMetrics> {
    return await apiClient.get<AnalyticsMetrics>('/api/analytics');
  },
};
