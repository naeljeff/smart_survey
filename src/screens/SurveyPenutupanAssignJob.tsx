import {ActivityIndicator, ScrollView, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {RouteProp, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {RootStackParamList} from '../routes/StackNavigator';
import {UseGetGoogleMapsData} from '../services/api/surveyPenutupan/getGoogleMapsData';
import NavigationHeader from '../components/reusableComponent/Header/NavigationHeader';
import GoogleMaps from '../components/reusableComponent/Map/GoogleMaps';
import IncomingJobAssignJob from '../components/layoutComponent/SurveyPenutupan/organism/IncomingJob/IncomingJobViewMapDetail/IncomingJobAssignJob';

type SurveyPenutupanAssignJobRouteProps = RouteProp<
  RootStackParamList,
  'surveyPenutupanAssignJob'
>;

type SurveyPenutupanAssignJobProps = {
  route: SurveyPenutupanAssignJobRouteProps;
};

const SurveyPenutupanAssignJob = ({route}: SurveyPenutupanAssignJobProps) => {
  const {item} = route.params;
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  // Run React Query for maps data -> Nanti ganti pake yg tempat" surveyor
  const {
    data: dataGmaps,
    refetch: refetchGmaps,
    isError: isErrorGmaps,
    isLoading: isLoadingGmaps,
    error: errorGmaps,
  } = UseGetGoogleMapsData(item.alamatSurvey);

  useEffect(() => {
    refetchGmaps();
  }, [item.alamatSurvey, refetchGmaps]);

  if (isLoadingGmaps) {
    return (
      <View className="h-screen w-screen flex flex-col justify-center items-center bg-gray-400/20">
        <ActivityIndicator size="large" color="#00bffe" />
      </View>
    );
  }

  if (isErrorGmaps) {
    return (
      <Text className="h-screen w-screen text-center text-lg text-red-500">
        {errorGmaps?.message}
      </Text>
    );
  }

  return (
    <View className="w-full h-full flex flex-col bg-[#FFF]">
      {/* Header */}
      <NavigationHeader
        title={'Assign Job'}
        onPress={() => navigation.goBack()}
      />

      {/* Google Maps */}
      <View className="w-full h-[350px]">
        <GoogleMaps item={item} />
      </View>

      {/* Details */}
      <View className='flex-1'>
        <IncomingJobAssignJob item={item}/>
      </View>

      {/* List Surveyor */}
      <ScrollView
        automaticallyAdjustKeyboardInsets={true}
        className="flex-grow">
        
      </ScrollView>
    </View>
  );
};

export default SurveyPenutupanAssignJob;
