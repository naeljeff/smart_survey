import {TouchableOpacity, View} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import React from 'react';
import {Surface} from 'react-native-paper';

type GoSurveyButtonProps = {
  name: string;
  size: number;
  color: string;
  onPress: () => void;
};

const GoSurveySurveyInfoButton = ({
  name,
  size,
  color,
  onPress,
}: GoSurveyButtonProps) => {
  return (
    <Surface elevation={1} className="rounded-lg">
      <TouchableOpacity onPress={onPress}>
        <View className="rounded-lg bg-[#faa72c] px-1.5 py-0.5">
          <EvilIcons name={name} size={size} color={color} />
        </View>
      </TouchableOpacity>
    </Surface>
  );
};

export default GoSurveySurveyInfoButton;
