import {useQuery} from '@tanstack/react-query';
import axios from 'axios';

const BASE_LOGIN_EMAIL: string =
  'https://www.rks-s.com/prog-x/pengajuan_survey/api/user/loginEmailRM_LOGIN.php';
const BASE_LOGIN_USERNAME: string =
  'https://www.rks-s.com/prog-x/pengajuan_survey/api/user/loginUsernameRM_LOGIN.php';

const getUserValidationWithEmail = async (email: string, password: string) => {
  try {
    const res = await axios.post(
      BASE_LOGIN_EMAIL,
      {
        email: email,
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

export const UseGetUserValidationWithEmail = (
  email: string,
  password: string,
) => {
  const {isLoading, data, isError, refetch} = useQuery({
    queryKey: ['userValidationEmail'],
    queryFn: () => getUserValidationWithEmail(email, password),
    refetchOnReconnect: 'always',
    enabled: false,
  });

  return {isLoading, data, isError, refetch};
};

export const UseGetUserValidationWithUsername = (
  username: string,
  password: string,
) => {
  const {isLoading, data, isError, refetch} = useQuery({
    queryKey: ['userValidationUsername'],
    queryFn: () => getUserValidationWithUsername(username, password),
    refetchOnReconnect: 'always',
    enabled: false,
  });

  return {isLoading, data, isError, refetch};
};
