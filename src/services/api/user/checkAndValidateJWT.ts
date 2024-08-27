import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {getTokens, isTokenExpired} from '../../../utilities/jwtToken';

const BASE_GENERATE_NEW_JWT: string =
  'https://www.rks-s.com/prog-x/pengajuan_survey/api/user/generateJWTWithRefreshToken.php';

export const refreshJwtToken = async (refreshToken: string) => {
  try {
    const response = await axios.post(BASE_GENERATE_NEW_JWT, {
      refresh_token: refreshToken,
    });

    const {jwt_token: newJwtToken} = response.data;
    return newJwtToken;
  } catch (error) {
    console.error('Failed to refresh JWT:', error);
    throw error;
  }
};