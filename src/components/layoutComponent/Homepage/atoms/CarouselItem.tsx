import React from 'react';
import {TouchableOpacity, Image, Text} from 'react-native';

import {CarouselProps} from '../../../../constants/carouselProps';
import {View} from 'react-native';

type CarouselItemProps = {
  item: CarouselProps;
  index: number;
  tag: string;
  onPress: () => void;
};

const CarouselItem = ({item, tag, onPress}: CarouselItemProps) => {
  const imageUri = tag === 'data' ? item.url : item.url_image;
  return (
    <TouchableOpacity
      className="h-[230px] rounded-xl p-3 mx-3"
      onPress={onPress}>
      {imageUri ? (
        <Image
          source={{uri: imageUri}}
          className="w-full h-full rounded-xl p-3"
          resizeMode="cover"
        />
      ) : (
        <View className="w-full h-full rounded-xl p-3 bg-gray-200 justify-center items-center">
          <Text className="text-gray-500">Image not available</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default CarouselItem;
