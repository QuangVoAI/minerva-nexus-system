import { useState, useEffect, useCallback } from 'react';
import { dispatchService } from '../services';
import type { DispatchSuggestion } from '../types';

export function useDispatch(autoFetch = true) {
  const [suggestions, setSuggestions] = useState<DispatchSuggestion[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [actionMessage, setActionMessage] = useState<string | null>(null);

  const fetchSuggestions = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await dispatchService.getSuggestions();
      setSuggestions(data);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Lỗi khi tải danh sách gợi ý phân công.';
      setError(msg);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (autoFetch) {
      fetchSuggestions();
    }
  }, [autoFetch, fetchSuggestions]);

  const approve = useCallback(async (assignmentId: string): Promise<boolean> => {
    setIsLoading(true);
    setError(null);
    setActionMessage(null);
    try {
      const res = await dispatchService.approveSuggestion(assignmentId);
      if (res.success) {
        setActionMessage(`Đã duyệt phân công ${assignmentId} thành công.`);
        await fetchSuggestions();
        return true;
      } else {
        setError(`Duyệt phân công ${assignmentId} thất bại.`);
        return false;
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Lỗi khi duyệt phân công.';
      setError(msg);
      return false;
    } finally {
      setIsLoading(false);
    }
  }, [fetchSuggestions]);

  const reject = useCallback(async (assignmentId: string): Promise<boolean> => {
    setIsLoading(true);
    setError(null);
    setActionMessage(null);
    try {
      const res = await dispatchService.rejectSuggestion(assignmentId);
      if (res.success) {
        setActionMessage(`Đã từ chối gợi ý phân công ${assignmentId}.`);
        await fetchSuggestions();
        return true;
      } else {
        setError(`Từ chối gợi ý ${assignmentId} thất bại.`);
        return false;
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Lỗi khi từ chối gợi ý.';
      setError(msg);
      return false;
    } finally {
      setIsLoading(false);
    }
  }, [fetchSuggestions]);

  return {
    suggestions,
    isLoading,
    error,
    actionMessage,
    refresh: fetchSuggestions,
    approve,
    reject,
  };
}
