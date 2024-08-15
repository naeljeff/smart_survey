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
  return (
    <View className=''>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <Text>Header</Text>
            <TextInput placeholder="Username" />
            <View>
              <TouchableOpacity onPress={() => null}>
                <Text>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
};

export default LoginForm;
