import type { z } from 'zod';
import type { productSchema, sellerSchema } from './schemas/seller.schema';

export type Seller = z.infer<typeof sellerSchema>;
export type Product = z.infer<typeof productSchema>;
