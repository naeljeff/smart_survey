import {jwtDecode} from 'jwt-decode';
import {CommonActions} from '@react-navigation/native';

import {useUserStore} from '../store/storeUser';

interface DecodedToken {
  token: string[];
  device_id: string;
  full_name: string;
  email: string;
  no_hp: string;
  aegis_dept: string;
  aegis_dept_full: string;
  cabang: string;
  role: string;
  source_login: string[];
  iat: number;
  exp: number;
}

export const handleTokenAuth = async (jwtToken: string, navigation: any) => {
  try {
    const decodedToken: DecodedToken = jwtDecode(jwtToken);
    const token = decodedToken.token;
    const source_login = decodedToken.source_login;
    const messageResponse = {
      device_id: decodedToken.device_id,
      full_name: decodedToken.full_name,
      email: decodedToken.email,
      no_hp: decodedToken.no_hp,
      aegis_dept: decodedToken.aegis_dept,
      aegis_dept_full: decodedToken.aegis_dept_full,
      cabang: decodedToken.cabang,
      role: decodedToken.role,
      iat: decodedToken.iat,
      exp: decodedToken.exp,
    };

    const setUserData = useUserStore.getState().setUserData;
    setUserData({token, messageResponse, source_login});

    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'main'}],
      }),
    );
  } catch (error) {
    console.error('Error handling token:', error);
  }
};
