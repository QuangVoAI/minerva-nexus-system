/**
 * Minerva Nexus API Client
 * Cung cấp kết nối REST API tới backend Java (port 8081 mặc định) qua endpoint chuẩn /api.
 */

const API_BASE = ''; // Rỗng để tận dụng Vite proxy /api -> http://localhost:8081 trong dev và cùng origin trong build

export class ApiError extends Error {
  public statusCode?: number;
  public details?: unknown;

  constructor(message: string, statusCode?: number, details?: unknown) {
    super(message);
    this.name = 'ApiError';
    this.statusCode = statusCode;
    this.details = details;
  }
}

async function handleResponse<T>(response: Response): Promise<T> {
  const contentType = response.headers.get('content-type') || '';
  const isJson = contentType.includes('application/json');

  if (!response.ok) {
    let errorMessage = `Yêu cầu thất bại với mã lỗi HTTP ${response.status} (${response.statusText})`;
    let details: unknown = null;
    try {
      if (isJson) {
        const errorData = await response.json();
        details = errorData;
        if (errorData.message) errorMessage = errorData.message;
        else if (errorData.error) errorMessage = errorData.error;
      } else {
        const text = await response.text();
        if (text) errorMessage = text;
      }
    } catch {
      // Bỏ qua lỗi parse response
    }
    throw new ApiError(errorMessage, response.status, details);
  }

  if (!isJson) {
    const text = await response.text();
    return text as unknown as T;
  }

  try {
    return (await response.json()) as T;
  } catch (err) {
    throw new ApiError('Không thể giải mã dữ liệu JSON trả về từ máy chủ.', response.status, err);
  }
}

export const apiClient = {
  async get<T>(endpoint: string, params?: Record<string, string | number | boolean | undefined>): Promise<T> {
    let url = `${API_BASE}${endpoint}`;
    if (params) {
      const searchParams = new URLSearchParams();
      Object.entries(params).forEach(([key, val]) => {
        if (val !== undefined && val !== null) {
          searchParams.append(key, String(val));
        }
      });
      const queryString = searchParams.toString();
      if (queryString) {
        url += (url.includes('?') ? '&' : '?') + queryString;
      }
    }

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      });
      return await handleResponse<T>(response);
    } catch (err: unknown) {
      if (err instanceof ApiError) throw err;
      throw new ApiError(
        'Không thể kết nối đến máy chủ backend Minerva Nexus. Vui lòng kiểm tra dịch vụ Java trên cổng 8081.',
        0,
        err
      );
    }
  },

  async post<T>(endpoint: string, body?: unknown, headers?: Record<string, string>): Promise<T> {
    const url = `${API_BASE}${endpoint}`;
    try {
      const isJsonBody = body !== undefined && !(body instanceof FormData) && !(body instanceof URLSearchParams);
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          ...(isJsonBody ? { 'Content-Type': 'application/json' } : {}),
          'Accept': 'application/json',
          'X-Actor-Id': 'DISPATCHER_WEB',
          ...headers,
        },
        body: isJsonBody ? JSON.stringify(body) : (body as BodyInit),
      });
      return await handleResponse<T>(response);
    } catch (err: unknown) {
      if (err instanceof ApiError) throw err;
      throw new ApiError(
        'Không thể gửi dữ liệu đến máy chủ backend Minerva Nexus. Vui lòng kiểm tra kết nối mạng.',
        0,
        err
      );
    }
  },

  async patch<T>(endpoint: string, body?: unknown, headers?: Record<string, string>): Promise<T> {
    const url = `${API_BASE}${endpoint}`;
    try {
      const response = await fetch(url, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'X-Actor-Id': 'DISPATCHER_WEB',
          ...headers,
        },
        body: body ? JSON.stringify(body) : undefined,
      });
      return await handleResponse<T>(response);
    } catch (err: unknown) {
      if (err instanceof ApiError) throw err;
      throw new ApiError(
        'Không thể cập nhật trạng thái trên máy chủ backend Minerva Nexus.',
        0,
        err
      );
    }
  },
  async put<T>(endpoint: string, body?: unknown, headers?: Record<string, string>): Promise<T> {
    const response = await fetch(`${API_BASE}${endpoint}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', 'X-Actor-Id': 'DISPATCHER_WEB', ...headers },
      body: body === undefined ? undefined : JSON.stringify(body),
    });
    return await handleResponse<T>(response);
  },
};
