import {Text, View, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import {Surface} from 'react-native-paper';

type NavigationHeaderProp = {
  title: string;
  onPress: () => void;
  onRefresh?: () => void;
};

const NavigationHeader = ({
  onPress,
  title,
  onRefresh,
}: NavigationHeaderProp) => {
  return (
    <View className="w-full h-[45px] px-4 flex flex-row justify-between items-center bg-white border-b border-gray-500/30 z-10">
      {/* Back Button */}
      <View>
        <TouchableOpacity className=" flex flex-row gap-x-1" onPress={onPress}>
          <Ionicons name="chevron-back" size={20} color="black" />
          <Text className="text-black">Back</Text>
        </TouchableOpacity>
      </View>

      {/* Text */}
      <Text className="text-lg text-black font-semibold mr-12">{title}</Text>

      {/* Refresh Button */}
      {onRefresh ? (
        <Surface elevation={3} className="rounded-full">
          <TouchableOpacity
            className="w-7 h-7 flex justify-center items-center bg-white rounded-full"
            onPress={onRefresh}>
            <Ionicons
              name="refresh"
              size={22}
              color="black"
              className="font-semibold"
            />
          </TouchableOpacity>
        </Surface>
      ) : (
        <View className="w-7 h-7" />
      )}
    </View>
  );
};

export default NavigationHeader;
