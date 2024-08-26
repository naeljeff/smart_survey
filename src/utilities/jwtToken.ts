import AsyncStorage from '@react-native-async-storage/async-storage';
import {jwtDecode} from 'jwt-decode';

export const getTokens = async () => {
  const jwtToken = await AsyncStorage.getItem('jwt_token');
  const refreshToken = await AsyncStorage.getItem('refresh_token');
  return {jwtToken, refreshToken};
};

export const isTokenExpired = (token: string) => {
  const decoded: any = jwtDecode(token);
  return decoded.exp < Date.now() / 1000;
};
