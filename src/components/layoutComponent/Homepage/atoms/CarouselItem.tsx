import React from 'react';
import {Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

import {CarouselProps} from '../../../../constants/carouselProps';

type CarouselItemProps = {
  item: CarouselProps;
  index: number;
  onPress: () => void;
};

const CarouselItem = ({item, index, onPress}: CarouselItemProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={{uri: item.url}} style={styles.image} resizeMode="cover" />
      <Text style={styles.title} numberOfLines={2}>
        {item.judul}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    marginHorizontal: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
});

export default CarouselItem;
