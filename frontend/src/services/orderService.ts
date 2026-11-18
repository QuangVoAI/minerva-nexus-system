import { apiClient } from './apiClient';
import type {
  DeliveryOrder,
  CreateOrderPayload,
  CreateOrderResponse,
  StatusHistoryItem,
  DriverStatusUpdatePayload,
} from '../types';

export const orderService = {
  /**
   * Lấy danh sách toàn bộ đơn hàng kèm đánh giá nguy cơ vi phạm SLA
   * GET /api/orders
   */
  async getOrders(): Promise<DeliveryOrder[]> {
    const rows = await apiClient.get<any[]>('/api/orders');
    return rows.map(normalizeOrder);
  },

  /**
   * Tạo đơn hàng gửi lẻ mới tại Hub
   * POST /api/orders
   */
  /**
   * Tạo đơn hàng gửi lẻ mới tại Hub
   * POST /api/orders
   */
  async createOrder(payload: CreateOrderPayload): Promise<CreateOrderResponse> {
    return await apiClient.post<CreateOrderResponse>('/api/orders', {
      recipientName: payload.recipientName,
      phone: payload.phone,
      address: payload.address,
      areaId: payload.areaId,
      serviceLevel: payload.serviceLevel,
      codAmount: String(payload.codAmount),
    });
  },

  /**
   * Lấy lịch sử biến động trạng thái (audit trail) của một đơn hàng
   * GET /api/order/history?orderId=...
   */
  async getOrderHistory(orderId: string): Promise<StatusHistoryItem[]> {
    return await apiClient.get<StatusHistoryItem[]>('/api/order/history', { orderId });
  },

  /**
   * Cập nhật trạng thái tài xế (xuất kho TRANSIT, giao thành công DELIVERED, báo thất bại FAILED)
   * POST /api/driver/update
   */
  async updateDriverStatus(payload: DriverStatusUpdatePayload): Promise<{ success: boolean }> {
    const actor = payload.driverId || 'DRIVER_APP';
    return await apiClient.post<{ success: boolean }>('/api/driver/update', {
      orderId: payload.orderId,
      action: payload.action,
      driverId: actor,
      reasonCode: payload.reasonCode || 'CUSTOMER_UNREACHABLE',
      note: payload.note || '',
    });
  },
};

function normalizeOrder(row: any): DeliveryOrder {
  const recipient = row.recipient || {};
  const rawRisk = row.slaAssessment?.riskLevel || row.riskLevel || 'UNKNOWN';
  const mappedRisk =
    rawRisk === 'HIGH' ? 'HIGH_RISK' :
    rawRisk === 'MEDIUM' ? 'AT_RISK' :
    rawRisk === 'LOW' ? 'SAFE' : rawRisk;
  return {
    orderId: row.id || row.orderId,
    trackingCode: row.trackingCode,
    recipientName: recipient.name || row.recipientName || '',
    recipientPhone: recipient.phone || row.recipientPhone || '',
    address: recipient.address || row.address || '',
    areaId: row.areaId,
    serviceLevel: row.serviceLevel,
    serviceLevelDisplay: row.serviceLevelDisplay || row.serviceLevel,
    slaDeadline: row.slaDeadline,
    codAmount: typeof row.codAmount === 'number' ? row.codAmount : Number(row.codAmount || 0),
    status: row.status,
    statusDisplay: row.statusDisplay || row.status,
    assignedDriverId: row.currentAssignment?.driverId || row.assignedDriverId || null,
    failureCount: row.failureCount || 0,
    riskLevel: mappedRisk,
    riskExplanation: row.slaAssessment?.reasons?.join(' ') || row.riskExplanation || '',
  };
}
