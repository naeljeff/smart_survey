import {
  ActivityIndicator,
  RefreshControl,
  ScrollView,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {RouteProp, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {RootStackParamList} from '../routes/StackNavigator';
import NavigationHeader from '../components/reusableComponent/Header/NavigationHeader';
import {UseGetHistoryFuaList} from '../services/api/surveyPenutupan/getHistoryFua';
import MySurveyFuaHistoryBody from '../components/layoutComponent/SurveyPenutupan/organism/MySurvey/MySurveyFUA/MySurveyFUAHistory/MySurveyFuaHistoryBody';
import MySurveyFuaHistoryAppointment from '../components/layoutComponent/SurveyPenutupan/organism/MySurvey/MySurveyFUA/MySurveyFUAHistory/MySurveyFuaHistoryAppointment';
import MySurveyFuaHistoryCooporateContact from '../components/layoutComponent/SurveyPenutupan/organism/MySurvey/MySurveyFUA/MySurveyFUAHistory/MySurveyFuaHistoryCooporateContact';
import MySurveyFuaHistoryPersonalContact from '../components/layoutComponent/SurveyPenutupan/organism/MySurvey/MySurveyFUA/MySurveyFUAHistory/MySurveyFuaHistoryPersonalContact';

type SurveyPenutupanHistoryFuaRoute = RouteProp<
  RootStackParamList,
  'surveyPenutupanHistoryFUA'
>;

type SurveyPenutupanHistoryProps = {
  route: SurveyPenutupanHistoryFuaRoute;
};

const SurveyPenutupanHistoryFUA = ({route}: SurveyPenutupanHistoryProps) => {
  const {item} = route.params;
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const {data, isLoading, isError, refetch, error} = UseGetHistoryFuaList(
    item.noPengajuanSurvey,
    item.unitNo,
  );

  if (isLoading) {
    return (
      <View className="h-screen w-screen flex flex-col justify-center items-center bg-gray-400/50">
        <ActivityIndicator size="large" color="#00bffe" />
      </View>
    );
  }

  if (isError) {
    return (
      <Text className="h-screen w-screen text-center text-lg text-red-500">
        Error loading data
      </Text>
    );
  }

  return (
    <View className="w-full h-full flex flex-col bg-white">
      {/* Header */}
      <NavigationHeader
        title={'History FUA'}
        onPress={() => navigation.goBack()}
        onRefresh={refetch}
      />

      {/* Body */}
      <ScrollView
        automaticallyAdjustKeyboardInsets={true}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={refetch} />
        }>
        {/* Appointment Schedule */}
        <MySurveyFuaHistoryAppointment item={item} />

        {/* Personal Contact Schedule */}
        <MySurveyFuaHistoryPersonalContact item={item}/>

        {/* Coorporate Contact Person */}
        <MySurveyFuaHistoryCooporateContact />

        {/* Follow Up Activity */}
        <MySurveyFuaHistoryBody data={data} />
      </ScrollView>
    </View>
  );
};

export default SurveyPenutupanHistoryFUA;
