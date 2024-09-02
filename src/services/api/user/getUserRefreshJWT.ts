import axios from 'axios';

export const refreshJwtToken = async (refreshToken: string) => {
  const BASE_GENERATE_NEW_JWT: string = process.env.BASE_GENERATE_NEW_JWT || '';
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