import {ActivityIndicator, ScrollView, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {RouteProp, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {RootStackParamList} from '../routes/StackNavigator';
import NavigationHeader from '../components/reusableComponent/Header/NavigationHeader';
import GoogleMaps from '../components/reusableComponent/Map/GoogleMaps';
import IncomingJobViewMapDetail from '../components/layoutComponent/SurveyPenutupan/organism/IncomingJob/IncomingJobViewMapDetail/IncomingJobViewMapDetail';
import {UseGetGoogleMapsData} from '../services/api/surveyPenutupan/getGoogleMapsData';

type SurveyPenutupanGoogleMapsRouteProps = RouteProp<
  RootStackParamList,
  'googleMaps'
>;

type SurveyPenutupanGoogleMapsProps = {
  route: SurveyPenutupanGoogleMapsRouteProps;
};

const SurveyPenutupanGoogleMaps = ({route}: SurveyPenutupanGoogleMapsProps) => {
  const {item} = route.params;
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  // React Query
  // View
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
        Error loading data
      </Text>
    );
  }

  console.log('dataGmaps: ', dataGmaps.results[0].formatted_address);
  console.log('dataGmaps: ', dataGmaps.results[0].geometry.location.lat);
  console.log('dataGmaps: ', dataGmaps.results[0].geometry.location.lng);

  return (
    <View className="w-full h-full flex flex-col bg-[#FFF]">
      {/* Header */}
      <NavigationHeader
        title={'View Map'}
        onPress={() => navigation.goBack()}
      />

      {/* Google Maps */}
      <View className="w-full h-[450px]">
        <GoogleMaps item={item} />
      </View>

      {/* Details */}
      <ScrollView
        automaticallyAdjustKeyboardInsets={true}
        className="flex-grow">
        <IncomingJobViewMapDetail item={item} />
      </ScrollView>
    </View>
  );
};

export default SurveyPenutupanGoogleMaps;
