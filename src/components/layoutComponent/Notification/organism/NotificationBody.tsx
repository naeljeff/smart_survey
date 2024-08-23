import {TouchableOpacity, Text, View} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import NotificationList from '../molecules/NotificationList';

type NotificationBodyProps = {
  selectedFilter: string;
  onOpenModal: () => void;
};

const NotificationBody = ({
  selectedFilter,
  onOpenModal,
}: NotificationBodyProps) => {
  return (
    <View className="w-full h-full bg-gray-100 z-30">
      {/* Filter */}
      <View className="w-full h-16 bg-white flex flex-row items-center px-3 space-x-2">
        <Text className="text-black font-bold text-[16px]">Filter Category: </Text>
        <View className='flex-1 border border-black rounded-xl'>
          <TouchableOpacity
            onPress={onOpenModal}
            className="py-1.5 px-2  flex-row justify-between items-center">
            <Text className="text-gray-700">
              {selectedFilter === '' ? 'Select Filter' : selectedFilter}
            </Text>

            <Ionicons name='caret-down' size={20} color={'black'}/>
          </TouchableOpacity>
        </View>
      </View>

      <Text>Item yang dipilih: {selectedFilter}</Text>

      {/* List */}
      <NotificationList />
    </View>
  );
};

export default NotificationBody;
