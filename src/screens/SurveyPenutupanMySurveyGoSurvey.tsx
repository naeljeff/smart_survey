import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import NavigationHeader from '../components/reusableComponent/Header/NavigationHeader';
import {RouteProp, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../routes/StackNavigator';

type SurveyPenutupanMySurveyGoSurveyRoute = RouteProp<
  RootStackParamList,
  'surveyPenutupanGoSurvey'
>;

type SurveyPenutupanMySurveyGoSurveyProps = {
  route: SurveyPenutupanMySurveyGoSurveyRoute;
};

const SurveyPenutupanMySurveyGoSurvey = ({
  route,
}: SurveyPenutupanMySurveyGoSurveyProps) => {
  const {item} = route.params;
  console.log(`item: ${item}`);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    
  return (
    <View className="w-full h-full flex flex-col bg-white">
      {/* Header */}
      <NavigationHeader
        title={'Go Survey'}
        onPress={() => navigation.goBack()}
      />
      <Text>SurveyPenutupanMySurveyGoSurvey</Text>
    </View>
  );
};

export default SurveyPenutupanMySurveyGoSurvey;
