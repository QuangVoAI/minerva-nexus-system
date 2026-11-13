import { useState, useEffect, useCallback } from 'react';
import { analyticsService } from '../services';
import type { AnalyticsMetrics } from '../types';

export function useAnalytics(autoRefreshIntervalMs = 0) {
  const [metrics, setMetrics] = useState<AnalyticsMetrics | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchMetrics = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await analyticsService.getAnalytics();
      setMetrics(data);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Lỗi khi tải chỉ số thống kê Hub.';
      setError(msg);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMetrics();
    if (autoRefreshIntervalMs > 0) {
      const timer = setInterval(fetchMetrics, autoRefreshIntervalMs);
      return () => clearInterval(timer);
    }
  }, [fetchMetrics, autoRefreshIntervalMs]);

  return {
    metrics,
    isLoading,
    error,
    refresh: fetchMetrics,
  };
}
