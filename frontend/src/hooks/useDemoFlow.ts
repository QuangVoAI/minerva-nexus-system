import { useState, useCallback } from 'react';
import { orderService, dispatchService, analyticsService } from '../services';
import type { DeliveryOrder, StatusHistoryItem, AnalyticsMetrics } from '../types';

export interface DemoLogItem {
  id: string;
  time: string;
  stepName: string;
  endpoint: string;
  method: 'GET' | 'POST';
  status: 'pending' | 'success' | 'error';
  requestPayload?: unknown;
  responsePayload?: unknown;
  message: string;
}

export function useDemoFlow() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [demoOrder, setDemoOrder] = useState<{
    orderId: string;
    trackingCode: string;
    status: string;
    recipientName: string;
    phone: string;
    address: string;
    codAmount: number;
    assignmentId?: string;
    driverId?: string;
  } | null>(null);

  const [auditHistory, setAuditHistory] = useState<StatusHistoryItem[]>([]);
  const [analytics, setAnalytics] = useState<AnalyticsMetrics | null>(null);
  const [logs, setLogs] = useState<DemoLogItem[]>([]);
  const [isRunningAll, setIsRunningAll] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const addLog = useCallback((
    stepName: string,
    endpoint: string,
    method: 'GET' | 'POST',
    status: 'pending' | 'success' | 'error',
    message: string,
    requestPayload?: unknown,
    responsePayload?: unknown
  ) => {
    const item: DemoLogItem = {
      id: Math.random().toString(36).substring(2, 9),
      time: new Date().toLocaleTimeString('vi-VN'),
      stepName,
      endpoint,
      method,
      status,
      message,
      requestPayload,
      responsePayload,
    };
    setLogs((prev) => [item, ...prev].slice(0, 30));
  }, []);

  /**
   * BƯỚC 1: Tạo đơn hàng mới qua API POST /api/orders
   */
  const executeCreateOrder = useCallback(async (customPayload?: {
    recipientName?: string;
    phone?: string;
    address?: string;
    codAmount?: number;
  }) => {
    setIsLoading(true);
    setErrorMessage(null);
    const randSuffix = Math.floor(1000 + Math.random() * 9000);
    const payload = {
      recipientName: customPayload?.recipientName || `Nguyễn Văn Demo ${randSuffix}`,
      phone: customPayload?.phone || `0912${randSuffix}`,
      address: customPayload?.address || `${randSuffix % 200 + 1} Huỳnh Tấn Phát, P. Tân Thuận Đông, Q7`,
      areaId: 'Q7_TAN_THUAN',
      serviceLevel: 'STANDARD' as const,
      codAmount: customPayload?.codAmount ?? 350000,
    };

    try {
      addLog('Bước 1: Tiếp nhận đơn', '/api/orders', 'POST', 'pending', 'Đang gửi yêu cầu tạo đơn...');
      const res = await orderService.createOrder(payload);
      const newOrder = {
        orderId: res.orderId,
        trackingCode: res.trackingCode,
        status: 'PENDING',
        recipientName: payload.recipientName,
        phone: payload.phone,
        address: payload.address,
        codAmount: payload.codAmount,
      };
      setDemoOrder(newOrder);
      setActiveStep(1);
      addLog(
        'Bước 1: Tiếp nhận đơn',
        '/api/orders',
        'POST',
        'success',
        `Tạo đơn thành công! Mã đơn: ${res.orderId}, Mã vận đơn: ${res.trackingCode}`,
        payload,
        res
      );
      return newOrder;
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Tạo đơn thất bại.';
      setErrorMessage(msg);
      addLog('Bước 1: Tiếp nhận đơn', '/api/orders', 'POST', 'error', msg, payload);
      return null;
    } finally {
      setIsLoading(false);
    }
  }, [addLog]);

  /**
   * BƯỚC 2: Kiểm tra đơn & Đánh giá SLA từ GET /api/orders
   */
  const executeAssessSla = useCallback(async (targetOrderId?: string) => {
    const id = targetOrderId || demoOrder?.orderId;
    if (!id) {
      setErrorMessage('Chưa có mã đơn hàng cần kiểm tra SLA.');
      return null;
    }
    setIsLoading(true);
    setErrorMessage(null);
    try {
      addLog('Bước 2: Đánh giá SLA', '/api/orders', 'GET', 'pending', 'Đang truy vấn danh sách đơn & SLA...');
      const orders = await orderService.getOrders();
      const found = orders.find((o) => o.orderId === id || o.trackingCode === demoOrder?.trackingCode);
      if (found) {
        setDemoOrder((prev) => (prev ? { ...prev, status: found.status } : null));
        setActiveStep(2);
        addLog(
          'Bước 2: Đánh giá SLA',
          '/api/orders',
          'GET',
          'success',
          `SLA xác định: Mức rủi ro ${found.riskLevel} (${found.riskExplanation || 'Đúng hạn'}), Hạn chót: ${found.slaDeadline}`,
          null,
          found
        );
        return found;
      } else {
        addLog('Bước 2: Đánh giá SLA', '/api/orders', 'GET', 'success', `Đã nhận danh sách ${orders.length} đơn`);
        setActiveStep(2);
        return null;
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Lỗi kiểm tra SLA.';
      setErrorMessage(msg);
      addLog('Bước 2: Đánh giá SLA', '/api/orders', 'GET', 'error', msg);
      return null;
    } finally {
      setIsLoading(false);
    }
  }, [demoOrder, addLog]);

  /**
   * BƯỚC 3: Gợi ý và Duyệt phân công qua GET /api/dispatch/suggestions & POST /api/dispatch/approve
   */
  const executeApproveDispatch = useCallback(async () => {
    setIsLoading(true);
    setErrorMessage(null);
    try {
      addLog('Bước 3: Lấy gợi ý', '/api/dispatch/suggestions', 'GET', 'pending', 'Đang tính toán phân công theo quy tắc...');
      const suggestions = await dispatchService.getSuggestions();
      let targetSuggestion = suggestions[0];
      if (demoOrder) {
        const match = suggestions.find((s) => s.orderId === demoOrder.orderId || s.trackingCode === demoOrder.trackingCode);
        if (match) targetSuggestion = match;
      }

      if (!targetSuggestion) {
        addLog('Bước 3: Điều phối', '/api/dispatch/suggestions', 'GET', 'error', 'Không tìm thấy gợi ý phân công phù hợp.');
        return false;
      }

      addLog(
        'Bước 3: Phân công theo quy tắc',
        '/api/dispatch/suggestions',
        'GET',
        'success',
        `Gợi ý tài xế ${targetSuggestion.driverName} (${targetSuggestion.driverId}) - Điểm: ${targetSuggestion.suggestedScore} (${targetSuggestion.matchReason})`,
        null,
        targetSuggestion
      );

      // Tiến hành duyệt
      addLog('Bước 3: Duyệt phân công', '/api/dispatch/approve', 'POST', 'pending', `Đang duyệt phân công ${targetSuggestion.assignmentId}...`);
      const approveRes = await dispatchService.approveSuggestion(targetSuggestion.assignmentId);
      if (approveRes.success) {
        setDemoOrder((prev) => (prev ? {
          ...prev,
          status: 'ASSIGNED',
          assignmentId: targetSuggestion.assignmentId,
          driverId: targetSuggestion.driverId,
        } : null));
        setActiveStep(3);
        addLog(
          'Bước 3: Duyệt phân công',
          '/api/dispatch/approve',
          'POST',
          'success',
          `Đã duyệt phân công mã ${targetSuggestion.assignmentId}. Trạng thái chuyển sang ASSIGNED.`,
          { assignmentId: targetSuggestion.assignmentId },
          approveRes
        );
        return true;
      } else {
        throw new Error('Duyệt phân công thất bại trên máy chủ.');
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Lỗi duyệt phân công.';
      setErrorMessage(msg);
      addLog('Bước 3: Duyệt phân công', '/api/dispatch/approve', 'POST', 'error', msg);
      return false;
    } finally {
      setIsLoading(false);
    }
  }, [demoOrder, addLog]);

  /**
   * BƯỚC 4: Tài xế quét xuất kho bắt đầu giao hàng (IN_TRANSIT) qua POST /api/driver/update
   */
  const executeDriverTransit = useCallback(async () => {
    const id = demoOrder?.orderId;
    if (!id) {
      setErrorMessage('Chưa có mã đơn để thực hiện xuất kho.');
      return false;
    }
    setIsLoading(true);
    setErrorMessage(null);
    try {
      addLog('Bước 4: Tài xế xuất kho', '/api/driver/update', 'POST', 'pending', `Tài xế quét xuất kho đơn ${id}...`);
      const payload = {
        orderId: id,
        action: 'TRANSIT' as const,
        driverId: demoOrder.driverId || 'DRV-01',
      };
      const res = await orderService.updateDriverStatus(payload);
      if (res.success) {
        setDemoOrder((prev) => (prev ? { ...prev, status: 'IN_TRANSIT' } : null));
        setActiveStep(4);
        addLog(
          'Bước 4: Tài xế xuất kho',
          '/api/driver/update',
          'POST',
          'success',
          `Đơn ${id} đã xuất kho thành công. Trạng thái: IN_TRANSIT (Đang giao hàng).`,
          payload,
          res
        );
        return true;
      } else {
        throw new Error('Cập nhật trạng thái xuất kho thất bại.');
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Lỗi xuất kho.';
      setErrorMessage(msg);
      addLog('Bước 4: Tài xế xuất kho', '/api/driver/update', 'POST', 'error', msg);
      return false;
    } finally {
      setIsLoading(false);
    }
  }, [demoOrder, addLog]);

  /**
   * BƯỚC 5A: Giao hàng thành công (DELIVERED) qua POST /api/driver/update
   */
  const executeDriverDelivered = useCallback(async () => {
    const id = demoOrder?.orderId;
    if (!id) {
      setErrorMessage('Chưa có đơn hàng để giao.');
      return false;
    }
    setIsLoading(true);
    setErrorMessage(null);
    try {
      addLog('Bước 5: Giao thành công', '/api/driver/update', 'POST', 'pending', `Xác nhận giao thành công đơn ${id}...`);
      const payload = {
        orderId: id,
        action: 'DELIVERED' as const,
        driverId: demoOrder.driverId || 'DRV-01',
      };
      const res = await orderService.updateDriverStatus(payload);
      if (res.success) {
        setDemoOrder((prev) => (prev ? { ...prev, status: 'DELIVERED' } : null));
        setActiveStep(5);
        addLog(
          'Bước 5: Giao thành công',
          '/api/driver/update',
          'POST',
          'success',
          `Đơn ${id} giao thành công! Thu tiền COD và cập nhật tải tài xế. Trạng thái: DELIVERED.`,
          payload,
          res
        );
        return true;
      } else {
        throw new Error('Xác nhận giao hàng thất bại.');
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Lỗi xác nhận giao hàng.';
      setErrorMessage(msg);
      addLog('Bước 5: Giao thành công', '/api/driver/update', 'POST', 'error', msg);
      return false;
    } finally {
      setIsLoading(false);
    }
  }, [demoOrder, addLog]);

  /**
   * BƯỚC 5B: Báo thất bại (FAILED) qua POST /api/driver/update
   */
  const executeDriverFailed = useCallback(async (reasonCode = 'CUSTOMER_UNREACHABLE', note = 'Khách không bắt máy') => {
    const id = demoOrder?.orderId;
    if (!id) {
      setErrorMessage('Chưa có đơn hàng để báo thất bại.');
      return false;
    }
    setIsLoading(true);
    setErrorMessage(null);
    try {
      addLog('Bước 5: Báo giao thất bại', '/api/driver/update', 'POST', 'pending', `Ghi nhận lý do thất bại cho đơn ${id}...`);
      const payload = {
        orderId: id,
        action: 'FAILED' as const,
        driverId: demoOrder.driverId || 'DRV-01',
        reasonCode,
        note,
      };
      const res = await orderService.updateDriverStatus(payload);
      if (res.success) {
        setDemoOrder((prev) => (prev ? { ...prev, status: 'FAILED' } : null));
        setActiveStep(5);
        addLog(
          'Bước 5: Báo giao thất bại',
          '/api/driver/update',
          'POST',
          'success',
          `Đã ghi nhận thất bại cho đơn ${id}. Lý do: ${reasonCode} - ${note}. Trạng thái: FAILED.`,
          payload,
          res
        );
        return true;
      } else {
        throw new Error('Ghi nhận thất bại không thành công.');
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Lỗi báo thất bại.';
      setErrorMessage(msg);
      addLog('Bước 5: Báo giao thất bại', '/api/driver/update', 'POST', 'error', msg);
      return false;
    } finally {
      setIsLoading(false);
    }
  }, [demoOrder, addLog]);

  /**
   * BƯỚC 6: Xem Lịch sử / Audit Trail & Cập nhật KPI
   */
  const executeFetchHistoryAndKPI = useCallback(async () => {
    const id = demoOrder?.orderId;
    if (!id) {
      setErrorMessage('Chưa có mã đơn để tra cứu lịch sử.');
      return;
    }
    setIsLoading(true);
    setErrorMessage(null);
    try {
      addLog('Bước 6: Tra cứu lịch sử', `/api/order/history?orderId=${id}`, 'GET', 'pending', 'Đang tải toàn bộ vết kiểm toán (Audit Trail)...');
      const hist = await orderService.getOrderHistory(id);
      setAuditHistory(hist);
      addLog(
        'Bước 6: Tra cứu lịch sử',
        `/api/order/history?orderId=${id}`,
        'GET',
        'success',
        `Đã tải thành công ${hist.length} mốc biến động trạng thái cho đơn ${id}.`,
        null,
        hist
      );

      addLog('Bước 6: Cập nhật KPI', '/api/analytics', 'GET', 'pending', 'Đang đồng bộ bảng điều hành thời gian thực...');
      const metrics = await analyticsService.getAnalytics();
      setAnalytics(metrics);
      setActiveStep(6);
      addLog(
        'Bước 6: Cập nhật KPI',
        '/api/analytics',
        'GET',
        'success',
        `KPI đồng bộ: Tổng ${metrics.totalOrders} đơn, Đã giao: ${metrics.deliveredCount}, Thất bại: ${metrics.failedCount}, Tỷ lệ SLA: ${metrics.slaRate}%`,
        null,
        metrics
      );
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Lỗi tải lịch sử / KPI.';
      setErrorMessage(msg);
      addLog('Bước 6: Tra cứu lịch sử & KPI', '/api/analytics', 'GET', 'error', msg);
    } finally {
      setIsLoading(false);
    }
  }, [demoOrder, addLog]);

  /**
   * CHẠY TOÀN BỘ LUỒNG DEMO TỰ ĐỘNG END-TO-END
   */
  const runFullHappyPathDemo = useCallback(async () => {
    setIsRunningAll(true);
    setErrorMessage(null);
    const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

    try {
      // 1. Tạo đơn mới
      const created = await executeCreateOrder();
      if (!created) throw new Error('Không thể tạo đơn hàng.');
      await sleep(1200);

      // 2. Đánh giá SLA
      await executeAssessSla(created.orderId);
      await sleep(1200);

      // 3. Gợi ý & Duyệt điều phối
      const approved = await executeApproveDispatch();
      if (!approved) throw new Error('Không thể duyệt phân công.');
      await sleep(1200);

      // 4. Tài xế xuất kho
      const transit = await executeDriverTransit();
      if (!transit) throw new Error('Không thể xuất kho.');
      await sleep(1200);

      // 5. Giao thành công
      const delivered = await executeDriverDelivered();
      if (!delivered) throw new Error('Không thể giao hàng.');
      await sleep(1200);

      // 6. Lịch sử & KPI
      await executeFetchHistoryAndKPI();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Demo tự động bị gián đoạn.';
      setErrorMessage(msg);
    } finally {
      setIsRunningAll(false);
    }
  }, [
    executeCreateOrder,
    executeAssessSla,
    executeApproveDispatch,
    executeDriverTransit,
    executeDriverDelivered,
    executeFetchHistoryAndKPI,
  ]);

  const resetDemo = useCallback(() => {
    setActiveStep(0);
    setDemoOrder(null);
    setAuditHistory([]);
    setErrorMessage(null);
  }, []);

  return {
    activeStep,
    demoOrder,
    auditHistory,
    analytics,
    logs,
    isLoading,
    isRunningAll,
    errorMessage,
    executeCreateOrder,
    executeAssessSla,
    executeApproveDispatch,
    executeDriverTransit,
    executeDriverDelivered,
    executeDriverFailed,
    executeFetchHistoryAndKPI,
    runFullHappyPathDemo,
    resetDemo,
  };
}
