/**
 * Minerva Nexus API Client
 * Cung cấp kết nối REST API tới backend Java (port 8081 mặc định) qua endpoint chuẩn /api.
 */

/**
 * In local development this remains empty and Vite proxies /api to Spring Boot.
 * In Vercel set VITE_API_BASE to the public HTTPS URL of the Java backend.
 * Never place MONGODB_URI in a VITE_ variable: those variables are exposed to browsers.
 */
const API_BASE = (import.meta.env.VITE_API_BASE ?? '').trim().replace(/\/+$/, '');

function unavailableBackendMessage(status: number): string | null {
  if (status === 404 && !API_BASE && window.location.hostname.endsWith('vercel.app')) {
    return 'Backend Java chưa được cấu hình cho bản Vercel. Hãy thiết lập VITE_API_BASE bằng URL HTTPS của dịch vụ Spring Boot rồi deploy lại frontend.';
  }
  if (status === 502 || status === 503 || status === 504) {
    return 'Dịch vụ backend Minerva Nexus hiện chưa sẵn sàng. Vui lòng thử lại sau ít phút.';
  }
  return null;
}

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
    let errorMessage = unavailableBackendMessage(response.status)
      ?? `Yêu cầu thất bại với mã lỗi HTTP ${response.status} (${response.statusText})`;
    let details: unknown = null;
    try {
      if (isJson) {
        const errorData = await response.json();
        details = errorData;
        if (typeof errorData.message === 'string') errorMessage = errorData.message;
        else if (typeof errorData.error === 'string') errorMessage = errorData.error;
      } else {
        const text = await response.text();
        // Never render a Vercel HTML/text 404 dump into the UI.
        if (text && !unavailableBackendMessage(response.status)) errorMessage = text;
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
