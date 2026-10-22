import { View } from 'react-native';
import { AppHeader, AppText } from '@/shared/components';
import { colors } from '@/core/theme';

export default function Screen() {
  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <AppHeader title="پیام ها" />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <AppText color={colors.muted}>به‌زودی (طرح Figma این صفحه هنوز نیامده)</AppText>
      </View>
    </View>
  );
}
