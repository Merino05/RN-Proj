import type { Product, Seller } from '../types';

export const mockSeller: Seller = {
  id: 1,
  name: 'برنج فروشان طارم',
  bio: 'ما در این صفحه به خرید عمده برنج به صورت مستقیم از برنج فروشان طارم اقدام میکنیم و در این راستا اهدافی داریم که انشالله به لطف خداوند به آن ها برسیم.',
  city: 'خرمدره',
  rating: 4.5,
  salesCount: 20,
  followers: 15,
  avatarUrl: null,
};

export let mockProducts: Product[] = [1, 2, 3, 4].map((i) => ({
  id: i,
  title: 'برنج کاظمی',
  postedAt: '2 ساعت پیش',
  location: 'زنجان - ابهر',
  wholesalePrice: 150000,
  wholesaleQty: '500 کیلو',
  retailPrice: 170000,
  cartCount: 16,
  locationsCount: 4,
  active: i % 2 === 1,
  imageUrl: null,
}));

export const setMockProducts = (next: Product[]) => { mockProducts = next; };
