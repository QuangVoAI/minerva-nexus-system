export type ApiStatus = 'idle' | 'loading' | 'success' | 'error';

export interface ApiState<T> {
  status: ApiStatus;
  data: T | null;
  error: string | null;
}

export interface RequestState {
  isLoading: boolean;
  error: string | null;
  success: boolean;
}
