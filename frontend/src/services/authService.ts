import { apiClient } from './apiClient';

export const JWT_TOKEN_KEY = 'minerva_jwt_token';
export const AUTH_USER_KEY = 'minerva_auth_user';
export const AUTH_EVENT = 'minerva_auth_changed';

export interface AuthUser {
  userId: string;
  username: string;
  fullName: string;
  role: 'DISPATCHER' | 'HUB_MANAGER' | 'DRIVER' | string;
  hub: string;
}

export interface LoginResponse {
  accessToken: string;
  tokenType: string;
  expiresIn: number;
  user: AuthUser;
}

export function getStoredToken(): string | null {
  try {
    return localStorage.getItem(JWT_TOKEN_KEY);
  } catch {
    return null;
  }
}

export function getStoredUser(): AuthUser | null {
  try {
    const raw = localStorage.getItem(AUTH_USER_KEY);
    return raw ? (JSON.parse(raw) as AuthUser) : null;
  } catch {
    return null;
  }
}

export function decodeJwtPayload(token: string): Record<string, unknown> | null {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) return null;
    const base64 = parts[1].replace(/-/g, '+').replace(/_/g, '/');
    const padded = base64 + '='.repeat((4 - (base64.length % 4)) % 4);
    return JSON.parse(atob(padded));
  } catch {
    return null;
  }
}

export function isTokenValid(token: string | null): boolean {
  if (!token) return false;
  const payload = decodeJwtPayload(token);
  if (!payload || typeof payload.exp !== 'number') return false;
  return payload.exp > Math.floor(Date.now() / 1000);
}

export function clearAuthSession(): void {
  try {
    localStorage.removeItem(JWT_TOKEN_KEY);
    localStorage.removeItem(AUTH_USER_KEY);
    window.dispatchEvent(new Event(AUTH_EVENT));
  } catch {}
}

export const authService = {
  getToken: getStoredToken,
  getCurrentUser: getStoredUser,
  isAuthenticated(): boolean {
    return isTokenValid(getStoredToken());
  },

  async login(username: string, password: string, hub?: string): Promise<LoginResponse> {
    const res = await apiClient.post<LoginResponse>('/api/auth/login', {
      username: username.trim(),
      password,
      hub: hub || localStorage.getItem('minerva_current_hub') || 'Hub Quận 7',
    });

    localStorage.setItem(JWT_TOKEN_KEY, res.accessToken);
    localStorage.setItem(AUTH_USER_KEY, JSON.stringify(res.user));
    if (res.user?.hub) {
      localStorage.setItem('minerva_current_hub', res.user.hub);
      window.dispatchEvent(new Event('minerva_hub_changed'));
    }
    window.dispatchEvent(new Event(AUTH_EVENT));
    return res;
  },

  async verifySession(): Promise<AuthUser | null> {
    const token = getStoredToken();
    if (!token) return null;
    try {
      const user = await apiClient.get<AuthUser>('/api/auth/me');
      localStorage.setItem(AUTH_USER_KEY, JSON.stringify(user));
      window.dispatchEvent(new Event(AUTH_EVENT));
      return user;
    } catch {
      clearAuthSession();
      return null;
    }
  },

  async logout(): Promise<void> {
    try {
      await apiClient.post('/api/auth/logout');
    } catch {}
    clearAuthSession();
  },
};
