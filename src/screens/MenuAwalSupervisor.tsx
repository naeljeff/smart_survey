import {Text, View} from 'react-native';
import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

import {RootStackParamList} from '../routes/StackNavigator';
import NavigationHeader from '../components/reusableComponent/Header/NavigationHeader';

const MenuAwalSupervisor = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View className="flex-1 bg-white">
      <NavigationHeader
        title={'Supervisor'}
        onPress={() => navigation.goBack()}
        onRefresh={() => {}}
      />
    </View>
  );
};

export default MenuAwalSupervisor;
