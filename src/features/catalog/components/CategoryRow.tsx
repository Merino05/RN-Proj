import { Pressable, StyleSheet, View } from 'react-native';
import { AppText, Icon } from '@/shared/components';
import { colors } from '@/core/theme';
import type { Category } from '../schemas/catalog.schema';

export function CategoryRow({ category, onPress }: { category: Category; onPress: () => void }) {
  return (
    <Pressable onPress={onPress} style={styles.row}>
      <View style={styles.thumb}><Icon name="image-outline" size={20} color={colors.disabled} /></View>
      <View style={{ flex: 1 }}>
        <AppText variant="heading" color={colors.text1}>{category.title}</AppText>
        {category.productCount != null && <AppText variant="caption" color={colors.muted}>{category.productCount} محصول</AppText>}
      </View>
      <Icon name="chevron-back" size={22} color={colors.text35} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', gap: 12, minHeight: 64, paddingHorizontal: 18, borderBottomWidth: 1, borderBottomColor: colors.surface },
  thumb: { width: 48, height: 48, borderRadius: 8, backgroundColor: colors.surface, alignItems: 'center', justifyContent: 'center' },
});
