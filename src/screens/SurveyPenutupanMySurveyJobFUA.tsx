import {ScrollView, View} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp, useNavigation} from '@react-navigation/native';
import React from 'react';

import {RootStackParamList} from '../routes/StackNavigator';
import NavigationHeader from '../components/reusableComponent/Header/NavigationHeader';
import MySurveyAppointment from '../components/layoutComponent/SurveyPenutupan/organism/MySurvey/MySurveyFUA/MySurveyAppointment';
import MySurveyPersonalContact from '../components/layoutComponent/SurveyPenutupan/organism/MySurvey/MySurveyFUA/MySurveyPersonalContact';
import MySurveyCoorporateContact from '../components/layoutComponent/SurveyPenutupan/organism/MySurvey/MySurveyFUA/MySurveyCoorporateContact';
import MySurveyFUA from '../components/layoutComponent/SurveyPenutupan/organism/MySurvey/MySurveyFUA/MySurveyFUA';
import MySurveyFUAButtons from '../components/layoutComponent/SurveyPenutupan/atoms/MySurvey/MySurveyFUA/MySurveyFUAButtons';

type SurveyPenutupanMySurveyJobFUARouteProps = RouteProp<
  RootStackParamList,
  'surveyPenutupanFormMySurveyJobFUA'
>;

type SurveyPenutupanMySurveyJobFUAPageProps = {
  route: SurveyPenutupanMySurveyJobFUARouteProps;
};

const SurveyPenutupanMySurveyJobFUA = ({
  route,
}: SurveyPenutupanMySurveyJobFUAPageProps) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const {item} = route.params;

  return (
    <View className="w-full h-full flex flex-col bg-[#FFF]">
      {/* Header */}
      <NavigationHeader title={'FUA'} onPress={() => navigation.goBack()} />

      {/* Body */}
      <ScrollView automaticallyAdjustKeyboardInsets={true}>
        {/* Appointment Schedule */}
        <MySurveyAppointment item={item}/>

        {/* Personal Contact Schedule */}
        <MySurveyPersonalContact item={item}/>

        {/* Coorporate Contact Person */}
        <MySurveyCoorporateContact />

        {/* Follow Up Activity */}
        <MySurveyFUA />

        {/* Buttons */}
        <MySurveyFUAButtons />
      </ScrollView>
    </View>
  );
};

export default SurveyPenutupanMySurveyJobFUA;
