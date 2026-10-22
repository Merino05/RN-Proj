import { ActivityIndicator, Pressable, StyleSheet, Text } from 'react-native';
import { fontFamily, theme } from '@/core/theme';

type Props = { title: string; onPress: () => void; loading?: boolean; disabled?: boolean };

export function Button({ title, onPress, loading, disabled }: Props) {
  const inactive = disabled || loading;
  return (
    <Pressable
      onPress={onPress}
      disabled={inactive}
      style={({ pressed }) => [styles.base, (pressed || inactive) && { opacity: 0.7 }]}
    >
      {loading ? <ActivityIndicator color={theme.colors.primaryText} /> : <Text style={styles.text}>{title}</Text>}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 14,
    borderRadius: theme.radius.md,
    alignItems: 'center',
  },
 text: { color: theme.colors.primaryText, ...theme.typography.body, fontFamily: fontFamily.demiBold },
});
