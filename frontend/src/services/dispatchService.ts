import { apiClient } from './apiClient';
import type { DispatchSuggestion, DispatchApproveResponse } from '../types';

export const dispatchService = {
  /**
   * Lấy danh sách đề xuất phân công theo quy tắc nghiệp vụ
   * GET /api/dispatch/suggestions
   */
  async getSuggestions(): Promise<DispatchSuggestion[]> {
    return await apiClient.get<DispatchSuggestion[]>('/api/dispatch/suggestions');
  },

  /**
   * Điều phối viên duyệt đề xuất phân công đơn cho tài xế
   * POST /api/dispatch/approve
   */
  async approveSuggestion(assignmentId: string): Promise<DispatchApproveResponse> {
    return await apiClient.post<DispatchApproveResponse>('/api/dispatch/approve', {
      assignmentId,
    });
  },

  /**
   * Điều phối viên từ chối đề xuất phân công
   * POST /api/dispatch/reject
   */
  async rejectSuggestion(assignmentId: string): Promise<DispatchApproveResponse> {
    return await apiClient.post<DispatchApproveResponse>('/api/dispatch/reject', {
      assignmentId,
    });
  },
};
