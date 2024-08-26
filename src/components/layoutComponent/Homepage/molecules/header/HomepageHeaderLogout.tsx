import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigation, CommonActions} from '@react-navigation/native';
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useUserStore } from '../../../../../store/storeUser';

const HomepageHeaderLogout = () => {
  const navigation = useNavigation();
  const clearUserData = useUserStore(state => state.clearUserData);

  const handleLogout = async() => {
    try {
      await AsyncStorage.clear();
      clearUserData();

      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'login'}],
        }),
      );
      Toast.show('Logout successful!', Toast.LONG);
    } catch (error) {
      console.error('Logout failed:', error);
      Toast.show('Logout failed!', Toast.LONG);
    }
  };
  return (
    <>
      {/* Logout */}
      <TouchableOpacity onPress={handleLogout}>
        <MaterialIcons name="logout" size={32} color="white" />
      </TouchableOpacity>
    </>
  );
};

export default HomepageHeaderLogout;
