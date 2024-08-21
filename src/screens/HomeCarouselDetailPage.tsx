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
    <View className="flex-1 flex flex-col justify-between bg-[#fed700]/50">
      {/* Header */}
      <NavigationHeader
        title={'Home'}
        onPress={() => navigation.goBack()}
        onRefresh={refetch}
      />

      {/* Body */}
      <View className="flex-1 flex flex-col items-end justify-end">
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'flex-end',
            paddingTop: 100,
          }}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              colors={['#00bfff']}
            />
          }>
          <HomepageCarouselDetailBody item={item} tag={tag} />
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeCarouselDetailPage;
