import { z } from 'zod';

const schema = z.object({
  API_URL: z.string().url(),
  API_TIMEOUT: z.coerce.number().default(15000),
  // تا وقتی API واقعی آماده نیست true بمونه؛ برای اتصال به سرور false کنید
  USE_MOCKS: z.enum(['true', 'false']).default('true').transform((v) => v === 'true'),
});

export const env = schema.parse({
  API_URL: process.env.EXPO_PUBLIC_API_URL ?? 'https://api.example.com',
  API_TIMEOUT: process.env.EXPO_PUBLIC_API_TIMEOUT,
  USE_MOCKS: process.env.EXPO_PUBLIC_USE_MOCKS,
});
