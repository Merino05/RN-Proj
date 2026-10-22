import { StyleSheet, View } from 'react-native';
import { Skeleton } from '@/shared/components';
import { colors, radius, shadow, spacing } from '@/core/theme';

export function SellerInfoSkeleton() {
  return (
    <View style={{ gap: spacing.md }}>
      <View style={styles.top}>
        <Skeleton style={{ width: 72, height: 72, borderRadius: 36 }} />
        <View style={styles.stats}>
          {[0, 1, 2].map((i) => (
            <View key={i} style={{ alignItems: 'center', gap: 6 }}>
              <Skeleton style={{ width: 28, height: 18 }} />
              <Skeleton style={{ width: 52, height: 12 }} />
            </View>
          ))}
        </View>
      </View>
      <View style={{ gap: 8 }}>
        <Skeleton style={{ width: 120, height: 16 }} />
        <Skeleton style={{ width: 60, height: 12 }} />
        <Skeleton style={{ width: '100%', height: 12 }} />
        <Skeleton style={{ width: '100%', height: 12 }} />
        <Skeleton style={{ width: '70%', height: 12 }} />
      </View>
    </View>
  );
}

function ProductCardSkeleton() {
  return (
    <View style={[styles.card, shadow.card]}>
      <Skeleton style={{ height: 140, marginTop: 18, borderRadius: radius.xs }} />
      <View style={{ alignItems: 'center', gap: 8, paddingTop: 10 }}>
        <Skeleton style={{ width: 70, height: 16 }} />
        <Skeleton style={{ width: 50, height: 10 }} />
        <Skeleton style={{ width: 70, height: 10 }} />
        <Skeleton style={{ width: '100%', height: 12 }} />
        <Skeleton style={{ width: '100%', height: 12 }} />
        <Skeleton style={{ width: '100%', height: 14, marginTop: 4 }} />
      </View>
    </View>
  );
}

export function ProductGridSkeleton({ count = 4 }: { count?: number }) {
  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: spacing.md }}>
      {Array.from({ length: count }).map((_, i) => (
        <View key={i} style={{ width: '47.5%' }}>
          <ProductCardSkeleton />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  top: { flexDirection: 'row', alignItems: 'center', gap: spacing.md },
  stats: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' },
  card: { backgroundColor: colors.background, borderRadius: radius.sm, padding: 8, paddingTop: 10, minHeight: 349 },
});