import { getItemAsync } from 'expo-secure-store';
import { useEffect } from 'react';

import { useAuth } from '@/hooks/useAuth';

import { EnumSecureStore } from '@/shared/types/auth.interface';

import { errorCatch } from '@/service/api/error.api';
import { getNewTokens } from '@/service/api/helper.auth';
import { getAccessToken } from '@/service/auth/auth.helper';
import { AuthService } from '@/service/auth/auth.service';

export const useCheckAuth = (routeName?: string) => {
  const { user, setUser } = useAuth();

  useEffect(() => {
    const checkAccessToken = async () => {
      const accessToken = await getAccessToken();
      if (accessToken) {
        try {
          await getNewTokens();
        } catch (e) {
          if (errorCatch(e) === 'jwt expired') {
            await AuthService.logout();
            setUser(null);
          }
        }
      }
    };

    let ignore = checkAccessToken();
  }, []);

  useEffect(() => {
    const checkRefreshToken = async () => {
      const refreshToken = await getItemAsync(EnumSecureStore.REFRESH_TOKEN);
      if (!refreshToken && user) {
        await AuthService.logout();
        setUser(null);
      }
    };

    let ignore = checkRefreshToken();
  }, [routeName]);
};
