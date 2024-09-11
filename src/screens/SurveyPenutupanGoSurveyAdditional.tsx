import {View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import NavigationHeader from '../components/reusableComponent/Header/NavigationHeader';
import {RootStackParamList} from '../routes/StackNavigator';

const SurveyPenutupanGoSurveyAdditional = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View className="w-full h-full flex flex-col bg-white">
      {/* Header */}
      <NavigationHeader
        title={'Additional'}
        onPress={() => navigation.goBack()}
      />

      {/* Body */}
    </View>
  );
};

export default SurveyPenutupanGoSurveyAdditional;
