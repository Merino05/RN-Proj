import { Ionicons } from '@expo/vector-icons';
import { colors } from '@/core/theme';

// آیکون‌های طرح (vuesax/solar) فعلاً با Ionicons جایگزین‌اند؛ بعداً با SVG طرح عوض کنید.
export type IconName = keyof typeof Ionicons.glyphMap;
export function Icon({ name, size = 20, color = colors.text35 }: { name: IconName; size?: number; color?: string }) {
  return <Ionicons name={name} size={size} color={color} />;
}
