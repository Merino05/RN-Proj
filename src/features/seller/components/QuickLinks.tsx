import { Pressable, StyleSheet, View } from 'react-native';
import { AppText, Icon, IconName } from '@/shared/components';
import { colors } from '@/core/theme';

const links: { label: string; icon: IconName }[] = [
  { label: 'طرف قرارداد', icon: 'people-outline' },
  { label: 'فروش ویژه', icon: 'pricetag-outline' },
  { label: 'فروش تکی', icon: 'cart-outline' },
  { label: 'شرایط همکاری', icon: 'document-text-outline' },
];

export function QuickLinks() {
  return (
    <View style={styles.box}>
      {links.map((l) => (
        <Pressable key={l.label} style={styles.item}>
          <View style={styles.circle}><Icon name={l.icon} size={22} color={colors.primary} /></View>
          <AppText variant="caption" color={colors.text2}>{l.label}</AppText>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  box: { flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#fff', borderRadius: 12, padding: 8 },
  item: { alignItems: 'center', gap: 6 },
  circle: { width: 46, height: 46, borderRadius: 23, borderWidth: 1, borderColor: colors.border, alignItems: 'center', justifyContent: 'center' },
});
