import React, {useState} from 'react';
import {View, ActivityIndicator, Text} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {useNavigation} from '@react-navigation/native';

// Component
import {SCREEN_WIDTH} from '../../../../../constants/screenSize';
import CarouselItem from '../../atoms/CarouselItem';
import {UseGetCarouselData} from '../../../../../services/api/carousel/getHomeCarousel';
import {CarouselProps} from '../../../../../constants/carouselProps';
import {RootStackParamList} from '../../../../../routes/StackNavigator';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type HomeCarouselScreenNavigation = NativeStackNavigationProp<
  RootStackParamList,
  'homeCarousel'
>;

const HomepageBodyCarousel = ({tag}: {tag: string}) => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const {data, isLoading, isError} = UseGetCarouselData();
  const navigation = useNavigation<HomeCarouselScreenNavigation>();

  const renderCarousel = ({
    item,
    index,
  }: {
    item: CarouselProps;
    index: number;
  }) => {
    return (
      <CarouselItem
        item={item}
        index={index}
        tag={tag}
        onPress={() => {
          navigation.navigate('homeCarousel', {rowid: item.rowid, tag: tag});
        }}
      />
    );
  };

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

  const carouselData = data?.[tag] || [];
  const paginationDotsLength = carouselData.length || 0;

  return (
    <View className="h-[250px] flex flex-col">
      <Carousel
        data={carouselData}
        sliderWidth={SCREEN_WIDTH}
        itemWidth={SCREEN_WIDTH - 10}
        renderItem={renderCarousel}
        onSnapToItem={index => setActiveSlide(index)}
        vertical={false}
      />
      <Pagination
        dotsLength={paginationDotsLength}
        activeDotIndex={activeSlide}
        containerStyle={{
          backgroundColor: 'rgba(255, 255, 255, 1)',
          paddingVertical: -2,
          marginBottom: 15,
        }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: 'rgba(0, 0, 0, 0.92)',
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </View>
  );
};

export default HomepageBodyCarousel;
