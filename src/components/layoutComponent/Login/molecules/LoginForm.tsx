import {View, Text, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Surface, TextInput} from 'react-native-paper';
import DeviceInfo from 'react-native-device-info';
import Toast from 'react-native-simple-toast';
import {CommonActions} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Components
import {RootStackParamList} from '../../../../routes/StackNavigator';
import LoginButton from '../../../reusableComponent/Button/LoginButton';
import {useUserStore} from '../../../../store/storeUser';
import {useUserLoginWithEmailAndGenerateJwt} from '../../../../services/api/user/getUserLoginWithEmail';
import {useUserLoginWithUsernameAndGenerateJwt} from '../../../../services/api/user/getUserLoginWithUsername';
import {getTokens, isTokenExpired} from '../../../../utilities/jwtToken';
import {refreshJwtToken} from '../../../../services/api/user/getUserRefreshJWT';
import {handleTokenAuth} from '../../../../utilities/auth';

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
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isEmail, setIsEmail] = useState<boolean>(false);
  const [isCheckingToken, setIsCheckingToken] = useState<boolean>(true);

  useEffect(() => {
    DeviceInfo.getUniqueId().then(uniqueId => {
      setDeviceId(uniqueId);
    });

    const checkTokenInStorage = async () => {
      try {
        const {jwtToken, refreshToken} = await getTokens();

        if (jwtToken) {
          console.log('Access Token:', jwtToken);
        }

        if (refreshToken) {
          console.log('Refresh Token:', refreshToken);
        }

        if (jwtToken && !isTokenExpired(jwtToken)) {
          handleTokenAuth(jwtToken, navigation);
        } else if (refreshToken) {
          try {
            const newJwtToken = await refreshJwtToken(refreshToken);
            if (newJwtToken) {
              console.log('refreshing token from component')
              await AsyncStorage.setItem('jwt_token', newJwtToken);
              handleTokenAuth(newJwtToken, navigation);
            } else {
              setIsCheckingToken(false);
            }
          } catch (error) {
            console.log('Error refreshing token:', error);
            setIsCheckingToken(false);
          }
        } else {
          setIsCheckingToken(false);
        }
      } catch (error) {
        console.log('Error checking tokens:', error);
        setIsCheckingToken(false);
      }
    };
    checkTokenInStorage();
  }, [navigation]);

  const {refetch: refetchEmail, isLoading: isLoadingEmail} =
    useUserLoginWithEmailAndGenerateJwt(
      userForm.username,
      userForm.password,
      deviceId,
    );

  const {refetch: refetchUsername, isLoading: isLoadingUsername} =
    useUserLoginWithUsernameAndGenerateJwt(
      userForm.username,
      userForm.password,
      deviceId,
    );

  const setUserData = useUserStore(state => state.setUserData);

  // Handle form input
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
      } else {
        response = await refetchUsername();
        data = response.data;
      }

      if (data?.userValidationData?.status === '01') {
        handleSuccessfulLogin(data?.userValidationData);
      } else {
        handleFailedLogin(data?.userValidationData);
      }
    } catch (error) {
      console.log(error);
      setErrorMessage('Error during login process');
    }
  };

  const handleSuccessfulLogin = (data: any) => {
    Toast.show('Login successful!', Toast.LONG);

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

  if (isCheckingToken) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#FF7F50" />
      </View>
    );
  }

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
