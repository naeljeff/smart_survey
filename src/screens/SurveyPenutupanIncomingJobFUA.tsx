import {ScrollView, View} from 'react-native';
import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp, useNavigation} from '@react-navigation/native';

import {RootStackParamList} from '../routes/StackNavigator';
import NavigationHeader from '../components/reusableComponent/Header/NavigationHeader';
import IncomingJobAppointment from '../components/layoutComponent/SurveyPenutupan/organism/IncomingJob/IncomingJobFUA/IncomingJobAppointment';
import IncomingJobPersonalContact from '../components/layoutComponent/SurveyPenutupan/organism/IncomingJob/IncomingJobFUA/IncomingJobPersonalContact';
import IncomingJobCoorporateContact from '../components/layoutComponent/SurveyPenutupan/organism/IncomingJob/IncomingJobFUA/IncomingJobCoorporateContact';
import {UseGetNewSurveyData} from '../services/api/surveyPenutupan/getNewSurveyData';
import {useUserStore} from '../store/storeUser';
import MySurveyFuaHistoryBody from '../components/layoutComponent/SurveyPenutupan/organism/MySurvey/MySurveyFUA/MySurveyFUAHistory/MySurveyFuaHistoryBody';
import { UseGetHistoryFuaList } from '../services/api/surveyPenutupan/getHistoryFua';
import { useSelectedSurvey } from '../store/storeSelectedSurvey';

const SurveyPenutupanIncomingJobFUA = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const {data: item} = useSelectedSurvey((state) => state);

  const {messageResponse} = useUserStore(state => ({
    messageResponse: state.messageResponse,
  }));

  const {data} = UseGetHistoryFuaList(
    item!.noPengajuanSurvey,
    item!.unitNo,
  );

  const fullName = messageResponse?.full_name || '';
  const {refetch: refetchSurveyData} = UseGetNewSurveyData(fullName);

  return (
    <View className="w-full h-full flex flex-col bg-[#fff]">
      {/* Header */}
      <NavigationHeader
        title={'FUA'}
        onPress={() => navigation.goBack()}
        onRefresh={refetchSurveyData}
      />

      {/* Body */}
      <ScrollView automaticallyAdjustKeyboardInsets={true}>
        {/* Appointment Schedule */}
        <IncomingJobAppointment />

        {/* Personal Contact Schedule */}
        <IncomingJobPersonalContact />

        {/* Coorporate Contact Person */}
        <IncomingJobCoorporateContact />

        {/* Follow Up Activity */}
        <MySurveyFuaHistoryBody data={data} />
      </ScrollView>
    </View>
  );
};

export default SurveyPenutupanIncomingJobFUA;
