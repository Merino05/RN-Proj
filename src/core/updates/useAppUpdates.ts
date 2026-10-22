import { useEffect } from 'react';
import { AppState } from 'react-native';
import * as Updates from 'expo-updates';

/** هنگام بازگشت اپ به foreground آپدیت رو چک و دانلود می‌کنه؛ اعمالش در اجرای بعدی اپ. */
async function checkAndFetch() {
  if (__DEV__ || !Updates.isEnabled) return;
  try {
    const res = await Updates.checkForUpdateAsync();
    if (res.isAvailable) await Updates.fetchUpdateAsync();
  } catch {
    // آپدیت نباید تجربه کاربر رو خراب کنه
  }
}

export function useAppUpdates(opts: { reloadImmediately?: boolean } = {}) {
  const { isUpdatePending } = Updates.useUpdates();

  useEffect(() => {
    void checkAndFetch();
    const sub = AppState.addEventListener('change', (s) => { if (s === 'active') void checkAndFetch(); });
    return () => sub.remove();
  }, []);

  useEffect(() => {
    if (isUpdatePending && opts.reloadImmediately) void Updates.reloadAsync();
  }, [isUpdatePending, opts.reloadImmediately]);

  return { isUpdatePending, applyUpdate: () => Updates.reloadAsync() };
}
