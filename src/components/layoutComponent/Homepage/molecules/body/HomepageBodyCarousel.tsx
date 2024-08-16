import React, {useState} from 'react';
import {View, ActivityIndicator, Text} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {SCREEN_WIDTH} from '../../../../../constants/screenSize';
import CarouselItem from '../../atoms/CarouselItem';
import {UseGetCarouselData} from '../../../../../services/api/carousel/getHomeCarousel';
import {CarouselProps} from '../../../../../constants/carouselProps';

const HomepageBodyCarousel = () => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const {data, isLoading, isError} = UseGetCarouselData();

  const sliderWidth = SCREEN_WIDTH;
  const itemWidth = SCREEN_WIDTH - 20;

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
        onPress={() => console.log(`Pressed: ${index}`)}
      />
    );
  };

  if (isLoading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (isError) {
    return <Text>Error loading data</Text>;
  }

  return (
    <View style={{flex: 1}}>
      <Carousel
        data={data?.data || []}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
        renderItem={renderCarousel}
        onSnapToItem={index => setActiveSlide(index)}
        vertical={false}
      />
      <Pagination
        dotsLength={data?.data?.length || 0} 
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
