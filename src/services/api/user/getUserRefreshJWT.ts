import axios from 'axios';

const BASE_GENERATE_NEW_JWT: string =
  'https://www.rks-s.com/prog-x/pengajuan_survey/api/user/generateJWTWithRefreshToken.php';

export const refreshJwtToken = async (refreshToken: string) => {
  try {
    const response = await axios.post(BASE_GENERATE_NEW_JWT, {
      refresh_token: refreshToken,
    });

    const {jwt_token: newJwtToken, status} = response.data;

    if (status === '01'){
      return newJwtToken;
    }
    else if (status === '03') {
      // Refresh token is invalid
      throw new Error('Invalid refresh token');
    } else {
      // Token generation failed or token is missing (not in the req body)
      throw new Error('Token generation failed');
    }
    
  } catch (error) {
    console.log('Failed to refresh JWT:', error);
    throw error;
  }
};