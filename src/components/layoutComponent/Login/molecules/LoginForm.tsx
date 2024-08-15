import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Surface, TextInput} from 'react-native-paper';
import Toast from 'react-native-simple-toast';
import {CommonActions} from '@react-navigation/native';

// Components
import {RootStackParamList} from '../../../../../App';
import LoginButton from '../../../reusableComponent/Button/LoginButton';

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
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleUsernameInput = (username: string) => {
    setUserForm({...userForm, username});
    setErrorMessage('');
  };

  const handlePasswordInput = (password: string) => {
    setUserForm({...userForm, password});
    setErrorMessage('');
  };

  const handleFormSubmit = () => {
    if (!userForm.username || !userForm.password) {
      setErrorMessage('Please fill all the fields!');
      return;
    }

    setIsLoading(true);
    console.log(
      `Username: ${userForm.username} | Password: ${userForm.password}`,
    );

    // Simulasi dulu sekarang, nanti pindahin ke useEffect
    setTimeout(() => {
      setIsLoading(false);
      Toast.show('Login Berhasil!', Toast.LONG);
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'homePage', params: { username: userForm.username } }],
        })
      );
    }, 1000);
  };
  return (
    <View className="w-full h-full">
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
          className="w-full shadow-xl mb-2"
          onChangeText={handlePasswordInput}
          value={userForm.password}
          right={
            <TextInput.Icon
              icon={showPassword ? 'eye-off' : 'eye'}
              size={22}
              style={{paddingTop: 17}}
              onPress={() => setShowPassword(!showPassword)}
            />
          }
        />

        <Surface elevation={3} className="w-full rounded-full">
          <LoginButton
            isLoading={isLoading}
            handleFormSubmit={handleFormSubmit}
          />
        </Surface>

        {/* Error text */}
        {errorMessage ? (
          <Text style={{color: 'red', fontSize: 15, paddingTop: 5}}>
            {errorMessage}
          </Text>
        ) : null}
      </View>
    </View>
  );
};

export default LoginForm;
