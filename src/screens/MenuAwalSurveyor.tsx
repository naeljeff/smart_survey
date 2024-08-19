import {Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {RootStackParamList} from '../routes/StackNavigator';
import NavigationHeader from '../components/reusableComponent/Header/NavigationHeader';

const MenuAwalSurveyor = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <NavigationHeader
        title={'Surveyor'}
        onPress={() => navigation.goBack()}
        onRefresh={() => {}}
      />
    </View>
  );
};

export default MenuAwalSurveyor;
