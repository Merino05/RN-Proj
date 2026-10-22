import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { sellerApi } from '../api/seller.api';

export const sellerKeys = {
  profile: ['seller', 'profile'] as const,
  products: ['seller', 'products'] as const,
};

export const useSellerProfile = () => useQuery({ queryKey: sellerKeys.profile, queryFn: sellerApi.profile });
export const useSellerProducts = () => useQuery({ queryKey: sellerKeys.products, queryFn: sellerApi.products });

export function useRemoveProduct() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: sellerApi.removeProduct,
    onSuccess: () => qc.invalidateQueries({ queryKey: sellerKeys.products }),
  });
}

export function useToggleProduct() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (v: { id: string | number; active: boolean }) => sellerApi.setProductActive(v.id, v.active),
    onSuccess: () => qc.invalidateQueries({ queryKey: sellerKeys.products }),
  });
}
