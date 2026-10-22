import type { z } from 'zod';
import type { loginSchema, loginResponseSchema, userSchema } from './schemas/auth.schema';

export type LoginInput = z.infer<typeof loginSchema>;
export type LoginResponse = z.infer<typeof loginResponseSchema>;
export type User = z.infer<typeof userSchema>;
