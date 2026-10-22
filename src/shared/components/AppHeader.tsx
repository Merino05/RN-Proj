import { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, spacing } from '@/core/theme';
import { AppText } from './AppText';

type Props = { title?: string; start?: ReactNode; end?: ReactNode; children?: ReactNode };

/** start = سمت راست (RTL)، end = سمت چپ */
export function AppHeader({ title, start, end, children }: Props) {
  return (
    <SafeAreaView edges={['top']} style={styles.safe}>
      <View style={styles.row}>
        <View style={styles.side}>{start}</View>
        {children ?? <AppText variant="body" bold color={colors.text1} style={styles.title} numberOfLines={1}>{title}</AppText>}
        <View style={styles.side}>{end}</View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { backgroundColor: colors.background, borderBottomWidth: 1, borderBottomColor: colors.surface },
  row: { height: 64, flexDirection: 'row', alignItems: 'center', paddingHorizontal: spacing.md, gap: spacing.sm },
  title: { flex: 1 },
  side: { flexDirection: 'row', alignItems: 'center', gap: spacing.md },
});
