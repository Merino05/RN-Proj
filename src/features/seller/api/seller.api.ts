import { delay, http } from '@/core/api';
import { env } from '@/core/config/env';
import { productListSchema, sellerSchema } from '../schemas/seller.schema';
import { mockProducts, mockSeller, setMockProducts } from './mock';

export const sellerApi = {
  profile: () => (env.USE_MOCKS ? delay(mockSeller) : http.get('/seller/profile', sellerSchema)),
  products: () => (env.USE_MOCKS ? delay([...mockProducts]) : http.get('/seller/products', productListSchema)),
  removeProduct: async (id: string | number) => {
    if (env.USE_MOCKS) {
      setMockProducts(mockProducts.filter((p) => p.id !== id));
      await delay(undefined, 200);
      return;
    }
    await http.delete(`/seller/products/${id}`);
  },
  setProductActive: async (id: string | number, active: boolean) => {
    if (env.USE_MOCKS) {
      setMockProducts(mockProducts.map((p) => (p.id === id ? { ...p, active } : p)));
      await delay(undefined, 2500);
      return;
    }
    await http.patch(`/seller/products/${id}`, { active });
  },
};
