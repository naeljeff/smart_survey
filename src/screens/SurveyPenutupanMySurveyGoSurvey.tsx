import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {RouteProp, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import NavigationHeader from '../components/reusableComponent/Header/NavigationHeader';
import {RootStackParamList} from '../routes/StackNavigator';
import GoSurveyBody from '../components/layoutComponent/SurveyPenutupan/organism/GoSurvey/GoSurveyBody';
import { UseGetSpecificSurveyData } from '../services/api/surveyPenutupan/getSpecificSurveyById';

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
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const specificSurveyFunction = UseGetSpecificSurveyData(
    item.noPengajuanSurvey,
    item.unitNo,
  );

  return (
    <View className="w-full h-full flex flex-col bg-white">
      {/* Header */}
      <NavigationHeader
        title={'Go Survey'}
        onPress={() => navigation.goBack()}
        onRefresh={specificSurveyFunction.refetch}
      />

      {/* Go Survey Body */}
      <GoSurveyBody surveyFunction={specificSurveyFunction} />
    </View>
  );
};

export default SurveyPenutupanMySurveyGoSurvey;
