import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

type GoSurveyExteriorCameraBtnProps = {
  onPress: () => void;
};

const GoSurveyExteriorCameraBtn = ({
  onPress,
}: GoSurveyExteriorCameraBtnProps) => {
  return (
    <TouchableOpacity onPress={onPress} className="shadow-2xl drop-shadow-xl">
      <View className="rounded-lg bg-[#faa72c] px-1.5 py-1">
        <EvilIcons name={'camera'} size={24} color={'white'} />
      </View>
    </TouchableOpacity>
  );
};

export default GoSurveyExteriorCameraBtn;
