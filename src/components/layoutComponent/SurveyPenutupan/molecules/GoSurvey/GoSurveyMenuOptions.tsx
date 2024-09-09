import {Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';

type GoSurveyMenuProps = {
  onMenuChange: (menu: string, index: number) => void;
  activeTab: number;
};

const GoSurveyMenuOptions = ({onMenuChange, activeTab}: GoSurveyMenuProps) => {
  const menu: string[] = ['General Info', 'Survey', 'Survey Info', 'Signature'];

  const handleMenuChangeOnPress = (menu: string, index: number) => {
    onMenuChange(menu, index);
  };
  return (
    <View className="w-full h-[50px] flex justify-center bg-[#555555]">
      {/* Menu */}
      <View className="w-full flex flex-row justify-between px-4">
        {menu.map((item, idx) => (
          <View key={idx} className="flex flex-row items-center justify-center">
            <TouchableOpacity
              onPress={() => handleMenuChangeOnPress(item, idx)}
              className={`w-[80px] flex flex-col justify-center items-center rounded-md py-0.5 px-0.5 ${
                activeTab === idx ? 'bg-[#484848]' : ''
              }`}>
              {item === 'General Info' ? (
                <MCI name="notebook" size={24} color={'white'} />
              ) : item === 'Survey' ? (
                <MCI name="note-check" size={24} color={'white'} />
              ) : item === 'Survey Info' ? (
                <MCI name="note-search" size={24} color={'white'} />
              ) : (
                <MCI name="note-edit" size={24} color={'white'} />
              )}
              <Text className={`text-white text-xs`}>{item}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
};

export default GoSurveyMenuOptions;
