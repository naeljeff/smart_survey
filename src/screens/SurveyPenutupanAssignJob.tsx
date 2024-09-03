import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import {RouteProp, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import MIcon from 'react-native-vector-icons/MaterialIcons';

import {RootStackParamList} from '../routes/StackNavigator';
import {UseGetGoogleMapsData} from '../services/api/surveyPenutupan/getGoogleMapsData';
import NavigationHeader from '../components/reusableComponent/Header/NavigationHeader';
import GoogleMaps from '../components/reusableComponent/Map/GoogleMaps';
import IncomingJobViewMapDetail from '../components/layoutComponent/SurveyPenutupan/organism/IncomingJob/IncomingJobViewMapDetail/IncomingJobViewMapDetail';
import {JobMonitoringListProps} from '../props/jobMonitoringListProps';
import SurveyJobAssignJobItem from '../components/layoutComponent/SurveyPenutupan/atoms/IncomingJob/SurveyJobAssignJobItem';

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

  const tempData: JobMonitoringListProps[] = [
    {
      id: 1,
      nama: 'Isti marlisah',
      jumlahTask: 3,
    },
    {
      id: 2,
      nama: 'John Doe',
      jumlahTask: 13,
    },
    {
      id: 3,
      nama: 'John Smith',
      jumlahTask: 23,
    },
    {
      id: 4,
      nama: 'Aaron Smith',
      jumlahTask: 33,
    },
    {
      id: 5,
      nama: 'Bob Curtney',
      jumlahTask: 43,
    },
    {
      id: 6,
      nama: 'Isti marlisah',
      jumlahTask: 3,
    },
    {
      id: 7,
      nama: 'John Doe',
      jumlahTask: 13,
    },
  ];

  const renderItem = useCallback(
    ({item, index}: {item: JobMonitoringListProps; index: number}) => (
      <SurveyJobAssignJobItem item={item} index={index} />
    ),
    [],
  );

  const getKey = useCallback(
    (item: JobMonitoringListProps) => item.id.toString(),
    [],
  );

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
      <View className="w-full h-[300px]">
        <GoogleMaps item={item} />
      </View>

      {/* Details */}
      <View className="flex-1">
        <IncomingJobViewMapDetail item={item} />
      </View>

      {/* List Surveyor */}
      <View className="flex-1 w-full bg-white -mt-[75px]">
        {tempData.length === 0 ? (
          <View className="w-full h-full flex flex-col justify-center items-center">
            <MIcon name="do-not-disturb-alt" size={80} color="black" />
            <Text className="italic text-gray-600 capitalize text-xl">
              No Data Found
            </Text>
          </View>
        ) : (
          <FlatList
            data={tempData}
            keyExtractor={getKey}
            renderItem={renderItem}
            //   refreshControl={
            //     <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          />
        )}
      </View>
    </View>
  );
};

export default SurveyPenutupanAssignJob;
