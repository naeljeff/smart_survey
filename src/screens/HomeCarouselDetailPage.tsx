import {
  ActivityIndicator,
  ScrollView,
  Text,
  RefreshControl,
  View,
} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {RootStackParamList} from '../routes/StackNavigator';
import {UseGetCarouselData} from '../services/api/carousel/getHomeCarousel';
import {CarouselProps} from '../constants/carouselProps';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import NavigationHeader from '../components/reusableComponent/Header/NavigationHeader';
import HomepageCarouselDetailBody from '../components/layoutComponent/HomepageCarouselDetail/organism/HomepageCarouselDetailBody';

type HomeCarouselDetailProp = RouteProp<RootStackParamList, 'homeCarousel'>;

const HomeCarouselDetailPage = () => {
  const route = useRoute<HomeCarouselDetailProp>();
  const {data, isLoading, isError, refetch} = UseGetCarouselData();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const {rowid, tag} = route.params;

  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };

  const item: CarouselProps | undefined = data?.[tag].find(
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
    <View className="flex-1 bg-white">
      {/* Header */}
      <NavigationHeader
        title={'Home'}
        onPress={() => navigation.goBack()}
        onRefresh={refetch}
      />

      {/* Body */}
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={['#00bfff']}
          />
        }>
        <View className="flex-1 p-3">
          <HomepageCarouselDetailBody item={item} tag={tag}/>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeCarouselDetailPage;
