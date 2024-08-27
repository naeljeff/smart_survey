import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigation, CommonActions} from '@react-navigation/native';
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DeviceInfo from 'react-native-device-info';

import {useUserStore} from '../../../../../store/storeUser';
import {useDeleteUserToken} from '../../../../../services/api/user/getUserLogout';

const HomepageHeaderLogout = () => {
  const [deviceId, setDeviceId] = useState<string>('');

  const navigation = useNavigation();
  const clearUserData = useUserStore(state => state.clearUserData);
  const {mutate} = useDeleteUserToken();

  useEffect(() => {
    DeviceInfo.getUniqueId().then(uniqueId => {
      setDeviceId(uniqueId);
    });
  }, []);

  const handleLogout = async () => {
    try {
      mutate(deviceId, {
        onSuccess: async () => {
          await AsyncStorage.clear();
          clearUserData();

          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{name: 'login'}],
            }),
          );
          Toast.show('Logout successful!', Toast.LONG);
        },
        onError: error => {
          console.log('Failed to delete user JWT:', error);
          Toast.show('Logout failed! Please try again.', Toast.LONG);
        },
      });
    } catch (error) {
      console.log('Logout failed:', error);
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
