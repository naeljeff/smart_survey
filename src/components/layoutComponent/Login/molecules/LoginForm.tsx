import {
  KeyboardAvoidingView,
  Text,
  TouchableWithoutFeedback,
  View,
  TouchableOpacity,
  Keyboard,
  Platform,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Surface, TextInput, Button, HelperText} from 'react-native-paper';
import Toast from 'react-native-simple-toast';
import {CommonActions} from '@react-navigation/native';

// Components
import {RootStackParamList} from '../../../../../App';

interface userInputForm {
  username: string;
  password: string;
}

type LoginFormProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'login'>;
};

const LoginForm = ({navigation}: LoginFormProps) => {
  const [userForm, setUserForm] = useState<userInputForm>({
    username: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleUsernameInput = (username: string) => {
    setUserForm({...userForm, username});
  };

  const handlePasswordInput = (password: string) => {
    setUserForm({...userForm, password});
  };
  return (
    <View className="w-full h-full">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View className="w-full h-full flex flex-col justify-center items-center space-y-7 py-10">
            {/* Username */}
            <TextInput
              mode="flat"
              label="Username"
              placeholder="Enter your username"
              activeUnderlineColor="#005ba1"
              contentStyle={{
                color: 'black',
              }}
              placeholderTextColor={'gray'}
              style={{
                backgroundColor: 'white',
                fontSize: 18,
              }}
              className="w-full shadow-xl"
              onChangeText={handleUsernameInput}
              value={userForm.username}
            />

            {/* Password */}
            <TextInput
              mode="flat"
              label="Password"
              placeholder="Enter your password"
              secureTextEntry={!showPassword}
              activeUnderlineColor="#005ba1"
              contentStyle={{
                color: 'black',
              }}
              placeholderTextColor={'gray'}
              style={{
                backgroundColor: 'white',
                fontSize: 18,
              }}
              className="w-full shadow-xl"
              onChangeText={handlePasswordInput}
              value={userForm.password}
              right={
                <TextInput.Icon
                  icon={showPassword ? 'eye-off' : 'eye'}
                  onPress={() => setShowPassword(!showPassword)}
                />
              }
            />

            <View>
              <TouchableOpacity onPress={() => null}>
                <Text className="text-black font-semibold text-lg tracking-tight uppercase">
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
};

export default LoginForm;
