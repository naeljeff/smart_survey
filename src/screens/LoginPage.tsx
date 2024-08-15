import {View} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootStackParamList} from '../../App';
import LoginBody from '../components/layoutComponent/Login/organisms/LoginBody';
import LoginHeader from '../components/layoutComponent/Login/organisms/LoginHeader';

type LoginPageProps = NativeStackScreenProps<RootStackParamList, 'login'>;

const LoginPage = ({navigation}: LoginPageProps) => {
  return (
    <View className="h-screen w-screen flex flex-col justify-center items-center">
      <View className="w-full h-1/3">
        <LoginHeader />
      </View>

      <View className="w-full h-2/3">
        <LoginBody navigation={navigation} />
      </View>
    </View>
  );
};

export default LoginPage;
