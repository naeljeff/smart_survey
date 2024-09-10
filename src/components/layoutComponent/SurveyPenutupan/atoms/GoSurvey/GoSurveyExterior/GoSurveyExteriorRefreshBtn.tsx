import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Surface} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

type GoSurveyExteriorRefreshBtnProps = {
  onPress: () => void;
};

const GoSurveyExteriorRefreshBtn = ({
  onPress,
}: GoSurveyExteriorRefreshBtnProps) => {
  return (
    <Surface elevation={1} className="rounded-lg">
      <TouchableOpacity onPress={onPress}>
        <View className="rounded-lg bg-[#faa72c] px-1.5 py-0.5">
          <Ionicons name={'refresh'} size={26} color={'white'} />
        </View>
      </TouchableOpacity>
    </Surface>
  );
};

export default GoSurveyExteriorRefreshBtn;
