import {Image, Text, View} from 'react-native';
import {Surface} from 'react-native-paper';
import React from 'react';
import {CarouselProps} from '../../../../constants/carouselProps';

type hompageCarouselDetailBodyProp = {
  item: CarouselProps;
  tag: string;
};

const HomepageCarouselDetailBody = ({
  item,
  tag,
}: hompageCarouselDetailBodyProp) => {
  const imageUri = tag === 'data' ? item.url : item.url_image;
  const isImageValid = imageUri ?? undefined;

  return (
    <Surface className="w-full h-full bg-white rounded-xl" elevation={3}>
      <View className="w-full h-full bg-white rounded-xl flex flex-col items-center justify-start">
        {/* Gambar */}
        {isImageValid ? (
          <View className="h-[230px] w-full rounded-lg p-3">
            <Image
              source={{uri: isImageValid}}
              className="w-full h-full rounded-xl p-3"
              resizeMode="cover"
            />
          </View>
        ) : (
          <Text className="text-center text-black font-semibold text-lg">
            No Image Available
          </Text>
        )}

        {/* Judul */}
        <Text className="text-lg text-black font-semibold">{item.judul}</Text>

        {/* Isi Pesan */}
        <Text className='text-md text-justify text-black px-3'>{item.isi_pesan}</Text>
      </View>
    </Surface>
  );
};

export default HomepageCarouselDetailBody;
