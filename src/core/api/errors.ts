import axios from 'axios';

export class ApiError extends Error {
  constructor(
    message: string,
    public status?: number,
    public code?: string,
    public details?: unknown,
  ) {
    super(message);
    this.name = 'ApiError';
  }
  get isUnauthorized() { return this.status === 401; }
  get isNetwork() { return this.status === undefined; }
}

export function toApiError(err: unknown): ApiError {
  if (err instanceof ApiError) return err;
  if (axios.isAxiosError(err)) {
    const status = err.response?.status;
    const data = err.response?.data as { message?: string; code?: string } | undefined;
    if (!err.response) return new ApiError('اتصال به سرور برقرار نشد', undefined, 'NETWORK');
    return new ApiError(data?.message ?? 'خطای ناشناخته از سرور', status, data?.code, data);
  }
  return new ApiError(err instanceof Error ? err.message : 'خطای ناشناخته');
}
