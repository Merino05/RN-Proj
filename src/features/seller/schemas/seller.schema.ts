import { z } from 'zod';

export const sellerSchema = z.object({
  id: z.union([z.string(), z.number()]),
  name: z.string(),
  bio: z.string(),
  city: z.string(),
  rating: z.number(),
  salesCount: z.number(),
  followers: z.number(),
  avatarUrl: z.string().url().nullable().optional(),
});

export const productSchema = z.object({
  id: z.union([z.string(), z.number()]),
  title: z.string(),
  postedAt: z.string(),
  location: z.string(),
  wholesalePrice: z.number(),
  wholesaleQty: z.string(),
  retailPrice: z.number(),
  cartCount: z.number(),
  locationsCount: z.number(),
  active: z.boolean(),
  imageUrl: z.string().url().nullable().optional(),
});

export const productListSchema = z.array(productSchema);
