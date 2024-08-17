import {Text, View, Image} from 'react-native';
import React from 'react';
import HomepageBodyMenu from '../molecules/body/HomepageBodyMenu';
import HomepageBodyCarousel from '../molecules/body/HomepageBodyCarousel';

const HomepageBody = () => {
  return (
    <View className="w-full h-full flex flex-col space-y-4 bg-white rounded-t-2xl pb-80">
      {/* Banner */}
      <View className="w-full flex-shrink-0 h-1/6">
        <Image
          source={require('../../../../assets/baground1.png')}
          className="w-full h-full rounded-t-2xl"
          style={{
            resizeMode: 'stretch',
          }}
        />
      </View>

      {/* Content */}
      <View className="w-full flex-shrink-0 h-1/6">
        <HomepageBodyMenu />
      </View>

      {/* Carousels */}
      <View className="h-[820px] pt-7 space-y-5">
        {/* Updates For You */}
        <View className="w-full flex-1 mb-7">
          <Text className='text-lg text-black text-start px-12 font-semibold -mb-1'>Updates For You</Text>
          <HomepageBodyCarousel tag={'data'}/>
        </View>

        {/* Competitions */}
        <View className="w-full flex-1 mb-7">
          <Text className='text-lg text-black text-start px-12 font-semibold -mb-1'>Competitions</Text>
          <HomepageBodyCarousel tag={'promo'}/>
        </View>

        {/* Winners */}
        <View className="w-full flex-1 mb-7">
          <Text className='text-lg text-black text-start px-12 font-semibold -mb-1'>Winners</Text>
          <HomepageBodyCarousel tag={'winner'}/>
        </View>
      </View>
    </View>
  );
};

export default HomepageBody;
