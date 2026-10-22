import { useQuery } from '@tanstack/react-query';
import { authApi } from '../api/auth.api';

export const authKeys = { me: ['auth', 'me'] as const };

export function useProfile() {
  return useQuery({ queryKey: authKeys.me, queryFn: authApi.me });
}
