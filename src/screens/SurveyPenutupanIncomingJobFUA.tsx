import {ScrollView, View} from 'react-native';
import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp, useNavigation} from '@react-navigation/native';

import {RootStackParamList} from '../routes/StackNavigator';
import NavigationHeader from '../components/reusableComponent/Header/NavigationHeader';
import IncomingJobAppointment from '../components/layoutComponent/SurveyPenutupan/organism/IncomingJob/IncomingJobFUA/IncomingJobAppointment';
import IncomingJobPersonalContact from '../components/layoutComponent/SurveyPenutupan/organism/IncomingJob/IncomingJobFUA/IncomingJobPersonalContact';
import IncomingJobCoorporateContact from '../components/layoutComponent/SurveyPenutupan/organism/IncomingJob/IncomingJobFUA/IncomingJobCoorporateContact';
import IncomingJobFUA from '../components/layoutComponent/SurveyPenutupan/organism/IncomingJob/IncomingJobFUA/IncomingJobFUA';

type SurveyPenutupanIncomingJobFUARouteProps = RouteProp<
  RootStackParamList,
  'surveyPenutupanFormIncomingJobFUA'
>;

type SurveyPenutupanIncomingJobFUAPageProps = {
  route: SurveyPenutupanIncomingJobFUARouteProps;
};

const SurveyPenutupanIncomingJobFUA = ({
  route,
}: SurveyPenutupanIncomingJobFUAPageProps) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const {item} = route.params;

  return (
    <View className="w-full h-full flex flex-col bg-[#fff]">
      {/* Header */}
      <NavigationHeader title={'FUA'} onPress={() => navigation.goBack()} />

      {/* Body */}
      <ScrollView automaticallyAdjustKeyboardInsets={true}>
        {/* Appointment Schedule */}
        <IncomingJobAppointment item={item} />

        {/* Personal Contact Schedule */}
        <IncomingJobPersonalContact
          item={item}
        />

        {/* Coorporate Contact Person */}
        <IncomingJobCoorporateContact />

        {/* Follow Up Activity */}
        <IncomingJobFUA />
      </ScrollView>
    </View>
  );
};

export default SurveyPenutupanIncomingJobFUA;
