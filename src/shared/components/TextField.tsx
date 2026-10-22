import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native';
import { fontFamily, theme } from '@/core/theme';

type Props = TextInputProps & { label?: string; error?: string };

export function TextField({ label, error, style, ...rest }: Props) {
  return (
    <View style={{ gap: theme.spacing.xs }}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        placeholderTextColor={theme.colors.textMuted}
        style={[styles.input, error && { borderColor: theme.colors.danger }, style]}
        {...rest}
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  label: { ...theme.typography.caption, color: theme.colors.textMuted,fontFamily: fontFamily.regular },
  input: {
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.radius.md,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: 12,
    color: theme.colors.text,
    backgroundColor: theme.colors.surface,
    fontFamily: fontFamily.regular
  },
  error: { ...theme.typography.caption, color: theme.colors.danger,fontFamily: fontFamily.regular },
});
