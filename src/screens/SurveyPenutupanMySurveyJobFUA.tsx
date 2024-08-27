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
    <View className="w-full h-full flex flex-col bg-[#f7ebd7]">
      {/* Header */}
      <NavigationHeader title={'FUA'} onPress={() => navigation.goBack()} />

      {/* Body */}
      <ScrollView automaticallyAdjustKeyboardInsets={true}>
        {/* Appointment Schedule */}
        {/* <IncomingJobAppointment item={item} /> */}
        <MySurveyAppointment item={item}/>

        {/* Personal Contact Schedule */}
        {/* <IncomingJobPersonalContact
          item={item}
        /> */}
        <MySurveyPersonalContact />

        {/* Coorporate Contact Person */}
        {/* <IncomingJobCoorporateContact /> */}
        <MySurveyCoorporateContact />

        {/* Follow Up Activity */}
        {/* <IncomingJobFUA /> */}
        <MySurveyFUA />
      </ScrollView>
    </View>
  );
};

export default SurveyPenutupanMySurveyJobFUA;
