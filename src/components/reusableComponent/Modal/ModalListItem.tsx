import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

type ModalListItemProps = {
  item: {key: string; label: string};
  onPress: (label: string) => void;
  isSelected: boolean;
};

const ModalListItem = ({item, onPress, isSelected}: ModalListItemProps) => {
  return (
    <TouchableOpacity onPress={() => onPress(item.label)}>
      <View
        className={`w-full p-3 border-b border-gray-200 ${
          isSelected ? 'bg-[#ffa382] rounded-xl' : ''
        }`}>
        <Text
          className={`font-semibold text-lg capitalize ${
            isSelected ? 'text-white' : 'text-black'
          }`}>
          {item.label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ModalListItem;
