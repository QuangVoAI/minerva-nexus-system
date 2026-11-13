import { apiClient } from './apiClient';
import type { Driver } from '../types';

export const driverService = {
  /**
   * Lấy danh sách tài xế cùng tải hiện tại và định mức ca
   * GET /api/drivers
   */
  async getDrivers(): Promise<Driver[]> {
    return await apiClient.get<Driver[]>('/api/drivers');
  },
};
