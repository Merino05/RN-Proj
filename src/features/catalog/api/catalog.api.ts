import { delay, http } from '@/core/api';
import { env } from '@/core/config/env';
import { categoryListSchema, categorySchema, type Category } from '../schemas/catalog.schema';

const root = ['مواد غذایی و خوراکی', 'ابزار و تجهیزات کسب‌وکار', 'شوینده و بهداشتی', 'لوازم خانه و آشپزخانه', 'کشاورزی و دامداری', 'لوازم آرایشی و مراقبتی', 'کالای دیجیتال', 'پوشاک'];
const mock: Category[] = [
  ...root.map((title, i) => ({ id: `c${i}`, title, parentId: null })),
  ...['برنج', 'روغن', 'ماکارونی', 'رب', 'حبوبات'].map((title, i) => ({ id: `s${i}`, title, parentId: 'c0', productCount: 15 })),
  ...['برنج کاظمی', 'برنج دودی', 'برنج طارم'].map((title, i) => ({ id: `p${i}`, title, parentId: 's0', productCount: 15 })),
];

export const catalogApi = {
  list: (parentId: string | null) =>
    env.USE_MOCKS
      ? delay(mock.filter((c) => c.parentId === parentId), 250)
      : http.get('/categories', categoryListSchema, { params: { parentId } }),
  byId: (id: string): Promise<Category | null> =>
    env.USE_MOCKS ? delay(mock.find((c) => c.id === id) ?? null, 100) : http.get(`/categories/${id}`, categorySchema),
};
