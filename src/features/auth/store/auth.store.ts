import { create } from 'zustand';
import { secureStorage, STORAGE_KEYS } from '@/core/storage/secure';
import { configureApiClient, queryClient } from '@/core/api';

type AuthState = {
  token: string | null;
  hydrated: boolean;
  hydrate: () => Promise<void>;
  setToken: (token: string) => Promise<void>;
  logout: () => Promise<void>;
};

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  hydrated: false,
  hydrate: async () => {
    const token = await secureStorage.get(STORAGE_KEYS.accessToken);
    set({ token, hydrated: true });
  },
  setToken: async (token) => {
    await secureStorage.set(STORAGE_KEYS.accessToken, token);
    set({ token });
  },
  logout: async () => {
    await secureStorage.remove(STORAGE_KEYS.accessToken);
    queryClient.clear();
    set({ token: null });
  },
}));

// اتصال API client به store (یک‌بار هنگام import)
configureApiClient({
  getToken: () => useAuthStore.getState().token,
  onUnauthorized: () => { void useAuthStore.getState().logout(); },
});
