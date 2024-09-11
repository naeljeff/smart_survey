import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Surface} from 'react-native-paper';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';

type GoSurveyExteriorGalleryBtnProps = {
  onPress: () => void;
};

const GoSurveyExteriorGalleryBtn = ({
  onPress,
}: GoSurveyExteriorGalleryBtnProps) => {
  return (
    <TouchableOpacity onPress={onPress} className='shadow-2xl drop-shadow-xl'>
      <View className="rounded-lg bg-[#faa72c] px-2 py-1">
        <MCI name={'folder-open-outline'} size={18} color={'white'} />
      </View>
    </TouchableOpacity>
  );
};

export default GoSurveyExteriorGalleryBtn;
