import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {jwtDecode} from 'jwt-decode';

import {refreshJwtToken} from '../services/api/user/getUserRefreshJWT';

class SessionError extends Error {
  isSessionError: boolean;

  constructor(message: string) {
    super(message);
    this.isSessionError = true;
  }
}

const createApiClient = (baseURL: string) => {
  const apiClient = axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  apiClient.interceptors.request.use(
    async config => {
      const token = await AsyncStorage.getItem('jwt_token');
      const refreshToken = await AsyncStorage.getItem('refresh_token');

      if (token) {
        const decodedToken = jwtDecode<any>(token);
        const currentTime = Date.now() / 1000;

        if (decodedToken.exp > currentTime) {
          return config;
        }

        if (refreshToken) {
          try {
            const newToken = await refreshJwtToken(refreshToken);
            if (newToken) {
              await AsyncStorage.setItem('jwt_token', newToken);
              return config;
            } else {
              throw new SessionError('Failed to refresh token');
            }
          } catch (error) {
            await AsyncStorage.removeItem('jwt_token');
            await AsyncStorage.removeItem('refresh_token');
            throw new SessionError('Session expired or refresh failed');
          }
        } else {
          await AsyncStorage.removeItem('jwt_token');
          await AsyncStorage.removeItem('refresh_token');
          throw new SessionError('Refresh token not found');
        }
      } else {
        await AsyncStorage.removeItem('jwt_token');
        await AsyncStorage.removeItem('refresh_token');
        throw new SessionError('Session expired. Please log in again.');
      }
    },
    error => {
      return Promise.reject(error);
    },
  );

  return apiClient;
};

export default createApiClient;
