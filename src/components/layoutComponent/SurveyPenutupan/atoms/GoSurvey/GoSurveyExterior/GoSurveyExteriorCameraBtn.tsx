import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Surface} from 'react-native-paper';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

type GoSurveyExteriorCameraBtnProps = {
  onPress: () => void;
};

const GoSurveyExteriorCameraBtn = ({
  onPress,
}: GoSurveyExteriorCameraBtnProps) => {
  return (
    <Surface elevation={1} className="rounded-lg">
      <TouchableOpacity onPress={onPress}>
        <View className="rounded-lg bg-[#faa72c] px-1.5 py-0.5">
          <EvilIcons name={'camera'} size={26} color={'white'} />
        </View>
      </TouchableOpacity>
    </Surface>
  );
};

export default GoSurveyExteriorCameraBtn;
