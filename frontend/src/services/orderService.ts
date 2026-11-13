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
    return await apiClient.get<DeliveryOrder[]>('/api/orders');
  },

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
    return await apiClient.get<StatusHistoryItem[]>('/api/order/history', {
      orderId,
    });
  },

  /**
   * Cập nhật trạng thái tài xế (xuất kho TRANSIT, giao thành công DELIVERED, báo thất bại FAILED)
   * POST /api/driver/update
   */
  async updateDriverStatus(payload: DriverStatusUpdatePayload): Promise<{ success: boolean }> {
    return await apiClient.post<{ success: boolean }>('/api/driver/update', {
      orderId: payload.orderId,
      action: payload.action,
      driverId: payload.driverId || 'DRIVER_APP',
      reasonCode: payload.reasonCode || 'CUSTOMER_UNREACHABLE',
      note: payload.note || '',
    });
  },
};
