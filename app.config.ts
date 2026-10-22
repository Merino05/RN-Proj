import type { ExpoConfig } from 'expo/config';

const config: ExpoConfig = {
  name: 'My App',
  slug: 'my-app',
  version: '1.0.0',
  scheme: 'myapp',
  orientation: 'portrait',
  userInterfaceStyle: 'automatic',
  plugins: ['expo-router', 'expo-secure-store'],
  experiments: { typedRoutes: true },
  ios: { bundleIdentifier: 'com.example.myapp', supportsTablet: false },
  android: { package: 'com.example.myapp' },
  // OTA: runtimeVersion باعث می‌شه آپدیت فقط به بیلدهای سازگار برسه.
  // با هر تغییر native نسخه (version) رو بالا ببرید و بیلد جدید بگیرید.
  runtimeVersion: { policy: 'appVersion' },
  updates: {
    // بعد از `eas update:configure` خودکار پر می‌شه (url و projectId)
    fallbackToCacheTimeout: 0,
    checkAutomatically: 'ON_LOAD',
  },
};

export default config;
