import { useEffect } from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { AppProviders } from '@/providers/AppProviders';
import { useAuthStore } from '@/features/auth';
import { useAppUpdates } from '@/core/updates/useAppUpdates';
import { ensureRtl } from '@/core/i18n/rtl';
import { FONT_FILES } from '@/core/theme';

void SplashScreen.preventAutoHideAsync();
ensureRtl();

export default function RootLayout() {
  const hydrated = useAuthStore((s) => s.hydrated);
  const hydrate = useAuthStore((s) => s.hydrate);
  const [fontsLoaded] = useFonts(FONT_FILES);
  useAppUpdates();

  useEffect(() => { void hydrate(); }, [hydrate]);
  const ready = hydrated && fontsLoaded;
  useEffect(() => { if (ready) void SplashScreen.hideAsync(); }, [ready]);

  if (!ready) return null;

  return (
    <AppProviders>
      <StatusBar style="dark" />
      <Stack screenOptions={{ headerShown: false }} />
    </AppProviders>
  );
}
