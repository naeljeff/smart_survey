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
    <Surface className="w-screen h-full bg-white rounded-t-[30px]" elevation={3}>
      <View className="relative w-full bg-white rounded-t-[30px] flex flex-col items-center justify-start">
        {/* Gambar */}
        {isImageValid ? (
          <View className="h-[210px] w-full rounded-[30px] p-3">
            <Image
              source={{uri: isImageValid}}
              className="absolute -top-20 right-8 w-[90%] h-full rounded-[30px] p-3 drop-shadow-2xl shadow-2xl"
              resizeMode="cover"
            />
          </View>
        ) : (
          <Text className="text-center text-black font-semibold text-lg">
            No Image Available
          </Text>
        )}

        {/* Judul */}
        <Text className="text-lg text-black font-semibold text-justify mb-3 px-3 -mt-20">{item.judul}</Text>
        
        {/* Created At */}
        <Text className='text-sm text-red-600 font-bold mb-5'>Created: {item.date_created}</Text>
        
        {/* Isi Pesan */}
        <Text className='text-md text-justify text-black px-7'>{item.isi_pesan}</Text>

        {/* Berlaku */}
        <View className='w-full flex justify-start px-7 py-3'>
          <Text className='text-black'>Berlaku dari:</Text>
          <Text className='text-black'>{item.eff_date} <Text className='font-semibold text-black text-md'>sampai</Text> {item.exp_date}</Text>
  
        </View>
      </View>
    </Surface>
  );
};

export default HomepageCarouselDetailBody;
