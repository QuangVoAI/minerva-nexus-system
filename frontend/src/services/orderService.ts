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
  async createOrder(payload: CreateOrderPayload): Promise<CreateOrderResponse> {
    const now = Date.now();
    const trackingCode = `MNX${String(now).slice(-9)}`;
    const created = await apiClient.post<any>('/api/orders', {
      orderCode: `ORD-${now}`,
      trackingCode,
      hubId: 'HUB01',
      areaId: payload.areaId,
      sender: { name: 'Demo Hub', phone: '0900000000', address: 'Hub Quận 7' },
      recipient: { name: payload.recipientName, phone: payload.phone, address: payload.address },
      serviceLevel: payload.serviceLevel,
      slaDeadline: new Date(Date.now() + (payload.serviceLevel === 'EXPRESS' ? 2 : payload.serviceLevel === 'SAME_DAY' ? 8 : 24) * 60 * 60 * 1000).toISOString(),
    });
    return { success: true, orderId: created.id, trackingCode: created.trackingCode };
  },

  /**
   * Lấy lịch sử biến động trạng thái (audit trail) của một đơn hàng
   * GET /api/order/history?orderId=...
   */
  async getOrderHistory(orderId: string): Promise<StatusHistoryItem[]> {
    const events = await apiClient.get<any[]>(`/api/orders/${encodeURIComponent(orderId)}/timeline`);
    return events.map((event, index) => ({
      historyId: `${orderId}-${index}`,
      oldStatus: event.fromStatus || null,
      newStatus: event.toStatus,
      actorId: event.actorId,
      reasonCode: event.reasonCode,
      note: event.note || '',
      time: event.changedAt,
    }));
  },

  /**
   * Cập nhật trạng thái tài xế (xuất kho TRANSIT, giao thành công DELIVERED, báo thất bại FAILED)
   * POST /api/driver/update
   */
  async updateDriverStatus(payload: DriverStatusUpdatePayload): Promise<{ success: boolean }> {
    const actor = payload.driverId || 'DRIVER_APP';
    if (payload.action === 'FAILED') {
      await apiClient.post(`/api/orders/${encodeURIComponent(payload.orderId)}/failures?reasonCode=${encodeURIComponent(payload.reasonCode || 'CUSTOMER_UNREACHABLE')}&note=${encodeURIComponent(payload.note || '')}`, undefined, { 'X-Actor-Id': actor });
    } else {
      const target = payload.action === 'TRANSIT' ? 'IN_TRANSIT' : 'DELIVERED';
      await apiClient.patch(`/api/orders/${encodeURIComponent(payload.orderId)}/status?target=${target}&note=${encodeURIComponent(payload.note || '')}`, undefined, { 'X-Actor-Id': actor });
    }
    return { success: true };
  },
};

function normalizeOrder(row: any): DeliveryOrder {
  const recipient = row.recipient || {};
  return {
    orderId: row.id || row.orderId,
    trackingCode: row.trackingCode,
    recipientName: recipient.name || '',
    recipientPhone: recipient.phone || '',
    address: recipient.address || '',
    areaId: row.areaId,
    serviceLevel: row.serviceLevel,
    serviceLevelDisplay: row.serviceLevel,
    slaDeadline: row.slaDeadline,
    codAmount: 0,
    status: row.status,
    statusDisplay: row.status,
    assignedDriverId: row.currentAssignment?.driverId || null,
    failureCount: row.failureCount || 0,
    riskLevel: row.slaAssessment?.riskLevel || 'UNKNOWN',
    riskExplanation: row.slaAssessment?.reasons?.join(' ') || '',
  };
}
