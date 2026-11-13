import { useState, useEffect, useCallback, useMemo } from 'react';
import { orderService } from '../services';
import type { DeliveryOrder, OrderStatus, SlaRiskLevel } from '../types';

export function useOrders(autoFetch = true) {
  const [orders, setOrders] = useState<DeliveryOrder[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [statusFilter, setStatusFilter] = useState<OrderStatus | 'ALL'>('ALL');
  const [riskFilter, setRiskFilter] = useState<SlaRiskLevel | 'ALL'>('ALL');

  const fetchOrders = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await orderService.getOrders();
      setOrders(data);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Lỗi không xác định khi tải danh sách đơn hàng.';
      setError(msg);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (autoFetch) {
      fetchOrders();
    }
  }, [autoFetch, fetchOrders]);

  const filteredOrders = useMemo(() => {
    return orders.filter((order) => {
      // Search matching code, recipient, phone, address
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchCode = order.trackingCode?.toLowerCase().includes(query) || order.orderId?.toLowerCase().includes(query);
        const matchRecipient = order.recipientName?.toLowerCase().includes(query);
        const matchPhone = order.recipientPhone?.toLowerCase().includes(query);
        const matchAddress = order.address?.toLowerCase().includes(query);
        if (!matchCode && !matchRecipient && !matchPhone && !matchAddress) {
          return false;
        }
      }
      // Status filter
      if (statusFilter !== 'ALL' && order.status !== statusFilter) {
        return false;
      }
      // Risk filter
      if (riskFilter !== 'ALL' && order.riskLevel !== riskFilter) {
        return false;
      }
      return true;
    });
  }, [orders, searchQuery, statusFilter, riskFilter]);

  const stats = useMemo(() => {
    const total = orders.length;
    const highRisk = orders.filter((o) => o.riskLevel === 'HIGH_RISK').length;
    const atRisk = orders.filter((o) => o.riskLevel === 'AT_RISK').length;
    const safe = orders.filter((o) => o.riskLevel === 'SAFE').length;
    const delivered = orders.filter((o) => o.status === 'DELIVERED').length;
    const failed = orders.filter((o) => o.status === 'FAILED').length;
    const inTransit = orders.filter((o) => o.status === 'IN_TRANSIT').length;

    return { total, highRisk, atRisk, safe, delivered, failed, inTransit };
  }, [orders]);

  return {
    orders,
    filteredOrders,
    isLoading,
    error,
    refresh: fetchOrders,
    searchQuery,
    setSearchQuery,
    statusFilter,
    setStatusFilter,
    riskFilter,
    setRiskFilter,
    stats,
  };
}
