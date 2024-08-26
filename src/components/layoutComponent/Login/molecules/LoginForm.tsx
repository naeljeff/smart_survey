import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Surface, TextInput} from 'react-native-paper';
import DeviceInfo from 'react-native-device-info';
import Toast from 'react-native-simple-toast';
import {CommonActions} from '@react-navigation/native';

// Components
import {RootStackParamList} from '../../../../routes/StackNavigator';
import LoginButton from '../../../reusableComponent/Button/LoginButton';
import {useUserStore} from '../../../../store/storeUser';
import {useUserLoginWithEmailAndGenerateJwt} from '../../../../services/api/user/getUserLoginWithEmail';
import { useUserLoginWithUsernameAndGenerateJwt } from '../../../../services/api/user/getUserLoginWithUsername';

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
  const [deviceId, setDeviceId] = useState<string>('');
  DeviceInfo.getUniqueId().then(uniqueId => {
    setDeviceId(uniqueId);
  });

  const {refetch: refetchEmail, isLoading: isLoadingEmail} =
    useUserLoginWithEmailAndGenerateJwt(
      userForm.username,
      userForm.password,
      deviceId,
    );

  const {refetch: refetchUsername, isLoading: isLoadingUsername} =
    useUserLoginWithUsernameAndGenerateJwt(userForm.username, userForm.password, deviceId,);

  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isEmail, setIsEmail] = useState<boolean>(false);
  const setUserData = useUserStore(state => state.setUserData);

  const handleUsernameInput = (username: string) => {
    setUserForm({...userForm, username});
    setErrorMessage('');
    if (username.includes('@')) {
      setIsEmail(true);
    }
  };

  const handlePasswordInput = (password: string) => {
    setUserForm({...userForm, password});
    setErrorMessage('');
  };

  const handleFormSubmit = async () => {
    if (!userForm.username || !userForm.password) {
      setErrorMessage('Please fill all the fields!');
      return;
    }

    try {
      let response;
      let data;

      if (isEmail) {
        response = await refetchEmail();
        data = response.data;
        if (data?.userValidationData?.status === '01') {
          handleSuccessfulLogin(data?.userValidationData);
        } else {
          handleFailedLogin(data?.userValidationData);
        }
      } else {
        response = await refetchUsername();
        data = response.data;
        if (data?.userValidationData?.status === '01') {
          handleSuccessfulLogin(data?.userValidationData);
        } else {
          handleFailedLogin(data?.userValidationData);
        }
      }
    } catch (error) {
      console.log(error);
      setErrorMessage('Error during login process');
    }
  };

  const handleSuccessfulLogin = (data: any) => {
    Toast.show('Login successful!', Toast.LONG);

    // Add to store
    if (data.message_response) {
      setUserData({
        token: data.token || '',
        messageResponse: data.message_response,
      });
    }

    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'main'}],
      }),
    );
  };

  const handleFailedLogin = (data: any) => {
    setErrorMessage(data.message_response || 'Login failed, please try again');
  };

  return (
    <View className="w-full h-full">
      <View className="w-full h-full flex flex-col justify-center items-center space-y-7 py-10">
        {/* Username */}
        <TextInput
          mode="flat"
          label="Username"
          placeholder="Enter your username"
          activeUnderlineColor="#FF7F50"
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
          activeUnderlineColor="#FF7F50"
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
            isLoading={isEmail ? isLoadingEmail : isLoadingUsername}
            handleFormSubmit={handleFormSubmit}
          />
        </Surface>

        {/* Error text */}
        {errorMessage ? (
          <Text className="text-red-600 text-sm capitalize">
            {errorMessage}
          </Text>
        ) : null}
      </View>
    </View>
  );
};

export default LoginForm;
