import {Text, View, Image} from 'react-native';
import React from 'react';
import HomepageBodyMenu from '../molecules/body/HomepageBodyMenu';
import HomepageBodyCarousel from '../molecules/body/HomepageBodyCarousel';

const HomepageBody = () => {
  return (
    <View className="w-full h-full flex flex-col space-y-4 bg-white rounded-t-2xl pb-56">
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
      <View className="flex-1 pt-7 space-y-5">
        {/* Updates For You */}
        <View className="w-full flex-1 mb-4">
          <Text className='text-lg text-black text-start px-12 font-semibold'>Updates For You</Text>
          <HomepageBodyCarousel />
        </View>

        {/* Competitions */}
        <View className="w-full flex-1 mb-4">
          <Text className='text-lg text-black text-start px-12 font-semibold'>Competitions</Text>
          <HomepageBodyCarousel />
        </View>

        {/* Winners */}
        <View className="w-full flex-1">
          <Text className='text-lg text-black text-start px-12 font-semibold'>Winners</Text>
          <HomepageBodyCarousel />
        </View>
      </View>
    </View>
  );
};

export default HomepageBody;
