import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

type ModalListItemProps = {
  item: {key: string; label: string};
  onPress: (label: string) => void;
};

const ModalListItem = ({item, onPress}: ModalListItemProps) => {
  return (
    <TouchableOpacity onPress={() => onPress(item.label)}>
      <View className="p-2 border-b border-gray-200">
        <Text className="text-black">
          {item.key} : {item.label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ModalListItem;
