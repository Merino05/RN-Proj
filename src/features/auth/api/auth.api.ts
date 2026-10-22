import { delay, http } from '@/core/api';
import { env } from '@/core/config/env';
import { loginResponseSchema, userSchema } from '../schemas/auth.schema';
import type { LoginInput } from '../types';

const mockUser = { id: 1, name: 'برنج فروشان طارم', email: 'seller@example.com' };

export const authApi = {
  login: (input: LoginInput) =>
    env.USE_MOCKS
      ? delay({ token: 'mock-token', user: { ...mockUser, email: input.email } })
      : http.post('/auth/login', input, loginResponseSchema),
  me: () => (env.USE_MOCKS ? delay(mockUser) : http.get('/auth/me', userSchema)),
};
