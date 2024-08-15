import {View} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';

// Components
import {RootStackParamList} from '../../../../../App';
import LoginDeviceInfo from '../molecules/LoginDeviceInfo';
import LoginForm from '../molecules/LoginForm';

type LoginFormProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'login'>;
};

const LoginBody = ({navigation}: LoginFormProps) => {
  return (
    <View className="w-full h-full flex flex-col justify-between items-center">
      <View className='w-full h-5/6 flex flex-col justify-start items-center'>
        <LoginForm navigation={navigation} />
      </View>

      <View className='w-full h-1/6 flex flex-col justify-start items-center'>
        <LoginDeviceInfo />
      </View>
    </View>
  );
};

export default LoginBody;
