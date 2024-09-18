import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

type GoSurveyExteriorEditBtnProps = {
  onPress: () => void;
};

const GoSurveyExteriorEditBtn = ({onPress}: GoSurveyExteriorEditBtnProps) => {
  return (
    <TouchableOpacity onPress={onPress} className='shadow-2xl drop-shadow-xl'>
      <View className="rounded-lg bg-[#faa72c] px-2 py-1">
        <FontAwesome name={'edit'} size={18} color={'white'} />
      </View>
    </TouchableOpacity>
  );
};

export default GoSurveyExteriorEditBtn;
