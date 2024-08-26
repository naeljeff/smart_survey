import {useQuery} from '@tanstack/react-query';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const BASE_LOGIN_GENERATE_JWT: string =
  'https://www.rks-s.com/prog-x/pengajuan_survey/api/user/generateJWTToken.php';
const BASE_LOGIN_USERNAME: string =
  'https://www.rks-s.com/prog-x/pengajuan_survey/api/user/loginUsernameRM_LOGIN.php';

const getUserValidationWithUsername = async (
  username: string,
  password: string,
) => {
  try {
    const res = await axios.post(
      BASE_LOGIN_USERNAME,
      {
        username: username,
        password: password,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    return res.data;
  } catch (error: any) {
    console.log(`Error from axios: ${error.message}`);
    throw error;
  }
};

const generateUserJwt = async (deviceId: string, messageResponse: any) => {
    try {
      const res = await axios.post(
        BASE_LOGIN_GENERATE_JWT,
        {
          device_id: deviceId,
          full_name: messageResponse.full_name,
          email: messageResponse.email || '',
          no_hp: messageResponse.no_hp || '',
          aegis_dept: messageResponse.aegis_dept || '',
          aegis_dept_full: messageResponse.dept_full || '',
          cabang: messageResponse.dept_aegis[0].cabang || '',
          role: messageResponse.role || null,
        },
        {
          headers: {'Content-Type': 'application/json'},
        },
      );
      return res.data;
    } catch (error: any) {
      console.log(`Error from axios generate user JWT: ${error.message}`);
      console.error('Full error object:', error.toJSON ? error.toJSON() : error);
      throw error;
    }
  };

  export const useUserLoginWithUsernameAndGenerateJwt = (
    username: string,
    password: string,
    deviceId: string,
  ) => {
    const queryKey = ['userValidationUsername', username, password];
  
    const {isLoading, data, isError, refetch} = useQuery({
      queryKey,
      queryFn: async () => {
        // Validasi user login
        const userValidationData = await getUserValidationWithUsername(
          username,
          password,
        );
  
        // If not valid throw error
        if (userValidationData.status !== '01') {
          throw new Error('User validation failed');
        }
  
        // Kalau valid generate JWTnya
        const jwtToken = await generateUserJwt(
          deviceId,
          userValidationData.message_response,
        );
  
        // Kalau gagal bikin JWT throw error
        if (jwtToken.status !== '01') {
          throw new Error('Error generating JWT Token');
        }
  
        // Simpen JWT di async storage
        await AsyncStorage.setItem('jwt_token', jwtToken.jwt_token);
        await AsyncStorage.setItem('refresh_token', jwtToken.refresh_token);
  
        // Balikin datanya (data dari user login API)
        return {
          userValidationData,
        };
      },
      refetchOnReconnect: 'always',
      enabled: false,
    });
    return {isLoading, data, isError, refetch};
  };