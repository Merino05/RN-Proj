import { z } from 'zod';

export const categorySchema = z.object({
  id: z.string(),
  title: z.string(),
  parentId: z.string().nullable(),
  productCount: z.number().optional(),
});
export const categoryListSchema = z.array(categorySchema);
export type Category = z.infer<typeof categorySchema>;
