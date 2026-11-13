import { useState, useCallback } from 'react';
import { orderService } from '../services';
import type { CreateOrderPayload, CreateOrderResponse, ServiceLevel } from '../types';

export function useCreateOrder() {
  const [formData, setFormData] = useState<CreateOrderPayload>({
    recipientName: '',
    phone: '',
    address: '',
    areaId: 'Q7_TAN_THUAN',
    serviceLevel: 'STANDARD' as ServiceLevel,
    codAmount: 0,
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<CreateOrderResponse | null>(null);

  const updateField = useCallback(<K extends keyof CreateOrderPayload>(key: K, value: CreateOrderPayload[K]) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
    setError(null);
  }, []);

  const resetForm = useCallback(() => {
    setFormData({
      recipientName: '',
      phone: '',
      address: '',
      areaId: 'Q7_TAN_THUAN',
      serviceLevel: 'STANDARD',
      codAmount: 0,
    });
    setError(null);
    setResult(null);
  }, []);

  const submit = useCallback(async (customPayload?: Partial<CreateOrderPayload>): Promise<CreateOrderResponse | null> => {
    const payload: CreateOrderPayload = {
      ...formData,
      ...(customPayload || {}),
    };

    // Validation
    if (!payload.recipientName.trim()) {
      setError('Vui lòng nhập họ tên người nhận.');
      return null;
    }
    if (!payload.phone.trim()) {
      setError('Vui lòng nhập số điện thoại người nhận.');
      return null;
    }
    if (!payload.address.trim()) {
      setError('Vui lòng nhập địa chỉ giao hàng.');
      return null;
    }

    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await orderService.createOrder(payload);
      setResult(response);
      return response;
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Tạo đơn hàng thất bại.';
      setError(msg);
      return null;
    } finally {
      setIsLoading(false);
    }
  }, [formData]);

  return {
    formData,
    updateField,
    isLoading,
    error,
    result,
    resetForm,
    submit,
  };
}
