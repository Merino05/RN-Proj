import { StyleSheet, Text, TextProps } from 'react-native';
import { colors, fontFamily, typography } from '@/core/theme';

type Variant = keyof typeof typography;
type Props = TextProps & { variant?: Variant; color?: string; bold?: boolean };

function familyFor(weight?: string | number) {
  const w = weight === 'bold' ? 700 : weight === 'normal' || weight == null ? 400 : Number(weight);
  if (w >= 700) return fontFamily.bold;
  if (w >= 600) return fontFamily.demiBold;
  if (w >= 500) return fontFamily.medium;
  return fontFamily.regular;
}

export function AppText({ variant = 'body', color = colors.text35, bold, style, ...rest }: Props) {
  const flat = StyleSheet.flatten([typography[variant], bold && { fontWeight: '700' as const }, style]) ?? {};
  const { fontWeight, ...restStyle } = flat;
  return <Text style={[{ color }, restStyle, { fontFamily: familyFor(fontWeight) }]} {...rest} />;
}