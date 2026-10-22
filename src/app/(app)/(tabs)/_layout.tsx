import { Tabs } from 'expo-router';
import { Icon, IconName } from '@/shared/components';
import { colors, fontFamily } from '@/core/theme';

export const unstable_settings = { initialRouteName: 'index' };

// ترتیب راست‌به‌چپ مطابق طرح: سفارشات، مشتریان، خانه، پیام‌ها، داشبورد
const tabs: { name: string; title: string; icon: IconName }[] = [
  { name: 'orders', title: 'سفارشات', icon: 'cube-outline' },
  { name: 'customers', title: 'مشتریان', icon: 'people-outline' },
  { name: 'index', title: 'خانه', icon: 'storefront-outline' },
  { name: 'messages', title: 'پیام ها', icon: 'chatbubble-ellipses-outline' },
  { name: 'dashboard', title: 'داشبورد', icon: 'stats-chart-outline' },
];

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.icon,
        tabBarLabelStyle: { fontSize: 12, fontFamily: fontFamily.demiBold },
        tabBarStyle: { height: 72, paddingTop: 6, backgroundColor: '#fff', borderTopLeftRadius: 25, borderTopRightRadius: 25, borderTopWidth: 0, elevation: 12 },
      }}
    >
      {tabs.map((t) => (
        <Tabs.Screen
          key={t.name}
          name={t.name}
          options={{ title: t.title, tabBarIcon: ({ color }) => <Icon name={t.icon} size={24} color={String(color)} /> }}
        />
      ))}
    </Tabs>
  );
}
