import { StyleSheet, View } from 'react-native';
import { AppText, Icon } from '@/shared/components';
import { colors, spacing } from '@/core/theme';
import type { Seller } from '../types';

function Stat({ label, value, star }: { label: string; value: string | number; star?: boolean }) {
  return (
    <View style={styles.stat}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 2 }}>
        {star && <Icon name="star" size={12} color="#F5B400" />}
        <AppText variant="title" color={colors.primary} style={{ fontWeight: '600' }}>{value}</AppText>
      </View>
      <AppText color={colors.text35} style={{ fontWeight: '500' }}>{label}</AppText>
    </View>
  );
}

export function SellerInfo({ seller }: { seller: Seller }) {
  return (
    <View style={{ gap: spacing.md }}>
      <View style={styles.top}>
        <View style={styles.avatarWrap}>
          <View style={styles.avatar}><Icon name="storefront" size={32} color={colors.disabled} /></View>
          <View style={styles.plus}><Icon name="add" size={12} color={colors.icon} /></View>
        </View>
        <View style={styles.stats}>
          <Stat label="دنبال کننده" value={seller.followers} />
          <View style={styles.divider} />
          <Stat label="فروش" value={seller.salesCount} />
          <View style={styles.divider} />
          <Stat label="امتیاز" value={seller.rating} star />
        </View>
      </View>
      <View style={{ gap: 6 }}>
        <AppText variant="title" color={colors.text1} style={{ fontWeight: '600' }}>{seller.name}</AppText>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
          <Icon name="location" size={13} color={colors.text2} />
          <AppText variant="caption" color={colors.text2}>{seller.city}</AppText>
        </View>
        <AppText color={colors.text35} style={{ lineHeight: 20 }}>{seller.bio}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  top: { flexDirection: 'row', alignItems: 'center', gap: spacing.md },
  avatarWrap: { width: 72, height: 72 },
  avatar: { flex: 1, borderRadius: 50, backgroundColor: colors.surface, alignItems: 'center', justifyContent: 'center' },
  plus: {
    position: 'absolute', bottom: 0, start: 0, width: 17, height: 17, borderRadius: 9,
    backgroundColor: '#EEE', borderWidth: 2, borderColor: '#fff', alignItems: 'center', justifyContent: 'center',
  },
  stats: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' },
  stat: { alignItems: 'center', gap: 4 },
  divider: { width: 1, height: 30, backgroundColor: colors.border },
});
