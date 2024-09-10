import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Surface} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

type GoSurveyExteriorEditBtnProps = {
  onPress: () => void;
};

const GoSurveyExteriorEditBtn = ({onPress}: GoSurveyExteriorEditBtnProps) => {
  return (
    <Surface elevation={1} className="rounded-lg">
      <TouchableOpacity onPress={onPress}>
        <View className="rounded-lg bg-[#faa72c] px-1.5 py-0.5">
          <FontAwesome name={'edit'} size={26} color={'white'} />
        </View>
      </TouchableOpacity>
    </Surface>
  );
};

export default GoSurveyExteriorEditBtn;
