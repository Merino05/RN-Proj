import { Href, Redirect, Stack } from 'expo-router';
import { useAuthStore } from '@/features/auth';

export default function AppLayout() {
  const token = useAuthStore((s) => s.token);
  if (!token) return <Redirect href={"/(auth)/login" as Href} />;
  return <Stack screenOptions={{ headerShown: false }} />;
}
