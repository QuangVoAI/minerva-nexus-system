import { useState, useEffect, useCallback } from 'react';
import { orderService } from '../services';
import type { StatusHistoryItem } from '../types';

export function useOrderDetail(orderId: string | null) {
  const [history, setHistory] = useState<StatusHistoryItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchHistory = useCallback(async (id: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await orderService.getOrderHistory(id);
      setHistory(data);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Lỗi khi tải lịch sử đơn hàng.';
      setError(msg);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (orderId) {
      fetchHistory(orderId);
    } else {
      setHistory([]);
    }
  }, [orderId, fetchHistory]);

  return {
    history,
    isLoading,
    error,
    refresh: () => (orderId ? fetchHistory(orderId) : Promise.resolve()),
  };
}
