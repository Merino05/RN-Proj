import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('ایمیل معتبر نیست'),
  password: z.string().min(6, 'حداقل ۶ کاراکتر'),
});

export const userSchema = z.object({
  id: z.union([z.string(), z.number()]),
  name: z.string().optional(),
  email: z.string().email(),
});

// ساختار پاسخ رو با API واقعی هماهنگ کنید
export const loginResponseSchema = z.object({
  token: z.string(),
  user: userSchema,
});
