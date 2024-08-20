import {Text, View, Image} from 'react-native';
import React from 'react';

const LoginHeader = () => {
  return (
    <View className="w-full h-full bg-white">
      <Image
        source={require('../../../../assets/loginBanner.png')}
        resizeMode="cover"
      />
    </View>
  );
};

export default LoginHeader;
