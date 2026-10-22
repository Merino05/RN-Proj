import type { AxiosRequestConfig } from 'axios';
import type { ZodType } from 'zod';
import { apiClient } from './client';
import { ApiError } from './errors';

/** درخواست تایپ‌شده؛ اگر schema بدید پاسخ با zod اعتبارسنجی می‌شه. */
export async function request<T>(config: AxiosRequestConfig, schema?: ZodType<T>): Promise<T> {
  const { data } = await apiClient.request(config);
  if (!schema) return data as T;
  const parsed = schema.safeParse(data);
  if (!parsed.success) {
    throw new ApiError('پاسخ سرور معتبر نیست', undefined, 'INVALID_RESPONSE', parsed.error.issues);
  }
  return parsed.data;
}

export const http = {
  get: <T>(url: string, schema?: ZodType<T>, config?: AxiosRequestConfig) =>
    request<T>({ ...config, url, method: 'GET' }, schema),
  post: <T>(url: string, body?: unknown, schema?: ZodType<T>, config?: AxiosRequestConfig) =>
    request<T>({ ...config, url, method: 'POST', data: body }, schema),
  put: <T>(url: string, body?: unknown, schema?: ZodType<T>, config?: AxiosRequestConfig) =>
    request<T>({ ...config, url, method: 'PUT', data: body }, schema),
  patch: <T>(url: string, body?: unknown, schema?: ZodType<T>, config?: AxiosRequestConfig) =>
    request<T>({ ...config, url, method: 'PATCH', data: body }, schema),
  delete: <T>(url: string, schema?: ZodType<T>, config?: AxiosRequestConfig) =>
    request<T>({ ...config, url, method: 'DELETE' }, schema),
};
