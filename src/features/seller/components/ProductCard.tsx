import { Pressable, StyleSheet, View } from 'react-native';
import { AppText, Icon } from '@/shared/components';
import { colors, radius, shadow } from '@/core/theme';
import type { Product } from '../types';

const fmt = (n: number) => n.toLocaleString('en-US');

export function ProductCard({ product, onMenu, onToggle }: {
  product: Product; onMenu: () => void; onToggle: () => void;
}) {
  const statusColor = product.active ? colors.primary : colors.disabled;
  return (
    <View style={[styles.card, shadow.card]}>
      <Pressable onPress={onMenu} hitSlop={8} style={styles.menu}>
        <Icon name="ellipsis-vertical" size={18} color={colors.text35} />
      </Pressable>
      <View style={styles.image}><Icon name="image-outline" size={36} color={colors.disabled} /></View>
      <View style={styles.body}>
        <AppText variant="title" color={colors.text1} style={{ fontWeight: '600' }}>{product.title}</AppText>
        <AppText variant="caption" color={colors.muted}>{product.postedAt}</AppText>
        <View style={styles.row}>
          <Icon name="location" size={10} color={colors.text35} />
          <AppText variant="caption">{product.location}</AppText>
        </View>
        <View style={{ gap: 4, alignSelf: 'stretch' }}>
          <AppText color={colors.text1}>
            عمده : <AppText bold>{fmt(product.wholesalePrice)} </AppText>
            <AppText variant="small">تومان ({product.wholesaleQty})</AppText>
          </AppText>
          <AppText color={colors.text1}>
            خرده : <AppText bold>{fmt(product.retailPrice)} </AppText>
            <AppText variant="small">تومان</AppText>
          </AppText>
        </View>
        <View style={styles.footer}>
          <View style={styles.row}><Icon name="cart-outline" size={14} /><AppText variant="caption">{product.cartCount}</AppText></View>
          <View style={styles.row}><Icon name="location-outline" size={14} /><AppText variant="caption">{product.locationsCount}</AppText></View>
          <Pressable onPress={onToggle} style={styles.row}>
            <Icon name="checkmark" size={14} color={statusColor} />
            <AppText variant="caption" bold color={statusColor}>{product.active ? 'فعال' : 'غیرفعال'}</AppText>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { flex: 1, backgroundColor: '#fff', borderRadius: radius.sm, padding: 8, paddingTop: 10 },
  menu: { position: 'absolute', top: 6, end: 6, zIndex: 2, padding: 2 },
  image: { height: 140, borderRadius: radius.xs, backgroundColor: colors.surface, alignItems: 'center', justifyContent: 'center', marginTop: 18 },
  body: { alignItems: 'center', gap: 6, paddingTop: 10 },
  row: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  footer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', alignSelf: 'stretch', marginTop: 4 },
});
