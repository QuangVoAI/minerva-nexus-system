import { useState, useCallback } from 'react';
import { orderService } from '../services';
import type { DriverStatusUpdatePayload, FailureReason } from '../types';

export function useDriverTasks() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [lastActionResult, setLastActionResult] = useState<string | null>(null);

  const updateStatus = useCallback(async (payload: DriverStatusUpdatePayload): Promise<boolean> => {
    setIsLoading(true);
    setError(null);
    setLastActionResult(null);

    try {
      const res = await orderService.updateDriverStatus(payload);
      if (res.success) {
        let msg = '';
        if (payload.action === 'TRANSIT') {
          msg = `Đơn ${payload.orderId} đã xuất kho, tài xế bắt đầu đi phát.`;
        } else if (payload.action === 'DELIVERED') {
          msg = `Đơn ${payload.orderId} đã giao thành công!`;
        } else if (payload.action === 'FAILED') {
          msg = `Đơn ${payload.orderId} đã ghi nhận giao thất bại (Lý do: ${payload.reasonCode}).`;
        }
        setLastActionResult(msg);
        return true;
      } else {
        setError(`Thao tác cập nhật trạng thái đơn ${payload.orderId} thất bại.`);
        return false;
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Lỗi khi cập nhật trạng thái đơn.';
      setError(msg);
      return false;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const startTransit = useCallback((orderId: string, driverId?: string) => {
    return updateStatus({ orderId, action: 'TRANSIT', driverId });
  }, [updateStatus]);

  const markDelivered = useCallback((orderId: string, driverId?: string) => {
    return updateStatus({ orderId, action: 'DELIVERED', driverId });
  }, [updateStatus]);

  const reportFailure = useCallback((orderId: string, reasonCode: FailureReason | string, note?: string, driverId?: string) => {
    return updateStatus({ orderId, action: 'FAILED', reasonCode, note, driverId });
  }, [updateStatus]);

  return {
    isLoading,
    error,
    lastActionResult,
    startTransit,
    markDelivered,
    reportFailure,
  };
}
