import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Animated,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React, {useEffect, useRef, useState} from 'react';

type FilterModalProps = {
  title: string;
  searchFilter: string;
  setSearchFilter: (value: string) => void;
  onClose: () => void;
};

const FilterModal = ({
  onClose,
  title,
  setSearchFilter,
  searchFilter,
}: FilterModalProps) => {
  const [isLoadingData, setIsLoadingData] = useState<boolean>(false);
  const animation = useRef(new Animated.Value(0)).current;

  const tempData = [
    {id: 1, nama: 'john doe'},
    {id: 2, nama: 'john doe2'},
    {id: 3, nama: 'john doe3'},
    {id: 4, nama: 'john doe4'},
    {id: 5, nama: 'john doe5'},
    {id: 6, nama: 'john doe6'},
    {id: 7, nama: 'john doe7'},
    {id: 8, nama: 'john doe8'},
    {id: 9, nama: 'john doe9'},
    {id: 10, nama: 'john doe10'},
    {id: 11, nama: 'john doe11'},
    {id: 12, nama: 'john doe12'},
    {id: 13, nama: 'john doe13'},
  ];

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
    }).start();
  }, [animation]);

  const handleClose = () => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 400,
      useNativeDriver: true,
    }).start(() => {
      onClose();
    });
  };

  return (
    <Animated.View
      className="absolute inset-0 bg-gray-500/50 z-50"
      style={{opacity: animation}}>
      <Animated.View
        className="flex min-h-full items-center justify-center p-7"
        style={{opacity: animation}}>
        <Animated.View
          className="w-full h-full bg-white p-4 rounded-lg shadow-xl"
          style={{opacity: animation}}>
          {/* Header Filter */}
          <View className="w-full flex flex-row justify-between items-center px-1 mb-3">
            {/* Title */}
            <Text className="text-lg text-black/90 font-semibold capitalize">
              Filter {title}
            </Text>

            {/* Close */}
            <TouchableOpacity onPress={handleClose}>
              <Ionicons name="close" size={24} color="black" />
            </TouchableOpacity>
          </View>

          {/* Searchbar */}
          <View className="relative w-full h-[40px] flex flex-row">
            <TextInput
              className="w-full border border-black rounded-lg pl-3 pr-12 pb-2.5"
              placeholder="Enter your search"
              value={searchFilter}
              onChangeText={setSearchFilter}
            />

            {searchFilter === '' ? null : (
              <TouchableOpacity
                className="absolute right-3 top-2.5 -translate-y-1/2"
                onPress={() => setSearchFilter('')}>
                <Ionicons name="close" size={20} color="black" />
              </TouchableOpacity>
            )}
          </View>

          {/* List filter */}
          <View className="flex-1 flex items-center justify-center">
            {isLoadingData ? (
              <ActivityIndicator size="large" color="#00bffe" />
            ) : (
              <View className="w-full h-full bg-pink-300">
                <FlatList
                  data={tempData}
                  renderItem={({item}) => {
                    return (
                      <View className="p-2 border-b border-gray-200">
                        <Text className="text-black">{item.nama}</Text>
                      </View>
                    );
                  }}
                  keyExtractor={item => item.id.toString()}
                />
              </View>
            )}
          </View>
        </Animated.View>
      </Animated.View>
    </Animated.View>
  );
};

export default FilterModal;
