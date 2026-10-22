import axios from 'axios';
import { env } from '@/core/config/env';
import { toApiError } from './errors';

type TokenProvider = () => string | null;
type UnauthorizedHandler = () => void;

let getToken: TokenProvider = () => null;
let onUnauthorized: UnauthorizedHandler = () => {};

// Auth store اینجا رو تزریق می‌کنه تا core به features وابسته نشه (جهت وابستگی یک‌طرفه)
export function configureApiClient(opts: { getToken: TokenProvider; onUnauthorized: UnauthorizedHandler }) {
  getToken = opts.getToken;
  onUnauthorized = opts.onUnauthorized;
}

export const apiClient = axios.create({
  baseURL: env.API_URL,
  timeout: env.API_TIMEOUT,
  headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
});

apiClient.interceptors.request.use((config) => {
  const token = getToken();
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

apiClient.interceptors.response.use(
  (res) => res,
  (error) => {
    const apiError = toApiError(error);
    if (apiError.isUnauthorized) onUnauthorized(); // نقطه‌ی مناسب برای refresh token در آینده
    return Promise.reject(apiError);
  },
);
