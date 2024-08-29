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

      // If access token exists
      if (token) {
        const decodedToken = jwtDecode<any>(token);
        const currentTime = Date.now() / 1000;

        // If it's still valid (not expired yet)
        if (decodedToken.exp > currentTime) {
          return config;
        }

        // If access token expires, but refresh token exists
        if (refreshToken) {
          try {
            // If refresh token is valid (in the database) and correctly return access token
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
          // If refresh token and access token are not valid
        } else {
          await AsyncStorage.removeItem('jwt_token');
          await AsyncStorage.removeItem('refresh_token');
          throw new SessionError('Refresh token not found');
        }
        // If access token is not found
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
