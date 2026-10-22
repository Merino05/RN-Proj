import { Redirect } from 'expo-router';
import { useAuthStore } from '@/features/auth';
import { Href } from 'expo-router';
export default function Index() {
  const token = useAuthStore((s) => s.token);
  return <Redirect href={(token ? '/(app)' : '/(auth)/login') as Href} />;
}
