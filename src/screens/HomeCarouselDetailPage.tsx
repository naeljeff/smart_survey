import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {RootStackParamList} from '../routes/StackNavigator';
import {UseGetCarouselData} from '../services/api/carousel/getHomeCarousel';
import {CarouselProps} from '../constants/carouselProps';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type HomeCarouselDetailProp = RouteProp<RootStackParamList, 'homeCarousel'>;
type HomeCarouselNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'main'
>;

const HomeCarouselDetailPage = () => {
  const route = useRoute<HomeCarouselDetailProp>();
  const {data, isLoading, isError} = UseGetCarouselData();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const {rowid} = route.params;

  const item: CarouselProps | undefined = data?.data?.find(
    (params: CarouselProps) => params.rowid === rowid,
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

  if (!item) {
    return (
      <View className="h-screen w-screen flex flex-col justify-center items-center bg-gray-100">
        <Text className="text-lg text-gray-700">Item not found</Text>
      </View>
    );
  }

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Go back</Text>
      </TouchableOpacity>
      <Text>HomeCarouselDetailPage</Text>
      <Text>{item.judul}</Text>
      <Text>{item.isi_pesan}</Text>
    </View>
  );
};

export default HomeCarouselDetailPage;
