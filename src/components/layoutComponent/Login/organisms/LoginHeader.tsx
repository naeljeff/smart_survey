import {Text, View, Image} from 'react-native';
import React from 'react';

const LoginHeader = () => {
  return (
    <View className="w-full h-full bg-white" testID='login-header'>
      <Image
        source={require('../../../../assets/loginBanner.png')}
        className='w-full h-full'
        testID="login-banner-image"
      />
    </View>
  );
};

export default LoginHeader;
