import { useState } from 'react';
import { View } from 'react-native';
import { ActionSheet, ConfirmSheet } from '@/shared/components';
import { spacing } from '@/core/theme';
import { useRemoveProduct, useToggleProduct } from '../hooks/useSeller';
import { ProductCard } from './ProductCard';
import type { Product } from '../types';

export function ProductGrid({ products }: { products: Product[] }) {
  const remove = useRemoveProduct();
  const toggle = useToggleProduct();
  const [menuFor, setMenuFor] = useState<Product | null>(null);
  const [deleteFor, setDeleteFor] = useState<Product | null>(null);

  return (
    <>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: spacing.md }}>
        {products.map((p) => (
          <View key={p.id} style={{ width: '47.5%' }}>
            <ProductCard
              product={p}
              onMenu={() => setMenuFor(p)}
              onToggle={() => toggle.mutate({ id: p.id, active: !p.active })}
            />
          </View>
        ))}
      </View>

      <ActionSheet
        visible={!!menuFor}
        onClose={() => setMenuFor(null)}
        items={[
          { key: 'edit', label: 'ویرایش', icon: 'create-outline' },
          { key: 'share', label: 'اشتراک‌گذاری', icon: 'share-social-outline' },
          { key: 'delete', label: 'حذف', icon: 'trash-outline', danger: true },
        ]}
        onSelect={(key) => {
          const p = menuFor;
          setMenuFor(null);
          if (key === 'delete') setDeleteFor(p);
        }}
      />
      <ConfirmSheet
        visible={!!deleteFor}
        message="ایا مطمعن به حذف اگهی هستید؟"
        confirmLabel="حذف"
        loading={remove.isPending}
        onClose={() => setDeleteFor(null)}
        onConfirm={() => deleteFor && remove.mutate(deleteFor.id, { onSettled: () => setDeleteFor(null) })}
      />
    </>
  );
}
