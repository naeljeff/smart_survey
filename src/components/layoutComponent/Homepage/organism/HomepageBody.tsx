import {Text, View, Image} from 'react-native';
import React from 'react';
import HomepageBodyMenu from '../molecules/body/HomepageBodyMenu';
import HomepageBodyCarousel from '../molecules/body/HomepageBodyCarousel';

const HomepageBody = ({
  refetchCarouselData,
}: {
  refetchCarouselData: (refetch: () => void) => void;
}) => {
  return (
    <View className="w-full h-full flex flex-col space-y-2 bg-white rounded-t-2xl pb-96">
      {/* Banner */}
      <View className="w-full flex-shrink-0 h-1/5">
        <Image
          source={require('../../../../assets/loginBanner.png')}
          className="w-full h-full rounded-t-2xl"
          style={{
            resizeMode: 'stretch',
          }}
        />
      </View>

      {/* Content */}
      <View className="w-full flex-shrink-0 h-1/5 -mb-7">
        <HomepageBodyMenu />
      </View>

      {/* Carousels */}
      <View className="h-[900px] pt-3">
        {/* Updates For You */}
        <View className="w-full flex-1 -mb-10">
          <Text className="text-lg text-black text-start px-12 font-semibold -mb-1">
            Updates For You
          </Text>
          <HomepageBodyCarousel tag={'data'} onRefetch={refetchCarouselData} />
        </View>

        {/* Competitions */}
        <View className="w-full flex-1 -mb-10">
          <Text className="text-lg text-black text-start px-12 font-semibold -mb-1">
            Competitions
          </Text>
          <HomepageBodyCarousel tag={'promo'} onRefetch={refetchCarouselData} />
        </View>

        {/* Winners */}
        <View className="w-full flex-1 -mb-10">
          <Text className="text-lg text-black text-start px-12 font-semibold -mb-1">
            Winners
          </Text>
          <HomepageBodyCarousel tag={'winner'} onRefetch={refetchCarouselData} />
        </View>
      </View>
    </View>
  );
};

export default HomepageBody;
