import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import { RootStackParamList } from '../routes/StackNavigator';
import LoginBody from '../components/layoutComponent/Login/organisms/LoginBody';
import LoginHeader from '../components/layoutComponent/Login/organisms/LoginHeader';

type LoginPageProps = NativeStackScreenProps<RootStackParamList, 'login'>;

const LoginPage = ({navigation}: LoginPageProps) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="h-screen w-screen flex flex-col">
          {/* Header */}
          <View className="w-full h-[45%]">
            <LoginHeader />
          </View>

          {/* Body */}
          <View className="w-full h-[55%] flex flex-col justify-center items-center">
            <LoginBody navigation={navigation} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default LoginPage;
