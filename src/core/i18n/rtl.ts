import { DevSettings, I18nManager } from 'react-native';
import * as Updates from 'expo-updates';

/** اپ راست‌چین است. اولین اجرا RTL را فعال و یک‌بار اپ را reload می‌کند. */
export function ensureRtl() {
  if (I18nManager.isRTL) return;
  I18nManager.allowRTL(true);
  I18nManager.forceRTL(true);
  if (__DEV__) DevSettings.reload();
  else void Updates.reloadAsync();
}
