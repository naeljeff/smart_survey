import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

type GoSurveyExteriorRefreshBtnProps = {
  onPress: () => void;
};

const GoSurveyExteriorRefreshBtn = ({
  onPress,
}: GoSurveyExteriorRefreshBtnProps) => {
  return (
    <TouchableOpacity onPress={onPress} className='shadow-2xl drop-shadow-xl'>
      <View className="rounded-lg bg-[#faa72c] px-2 py-1">
        <Ionicons name={'refresh'} size={18} color={'white'} />
      </View>
    </TouchableOpacity>
  );
};

export default GoSurveyExteriorRefreshBtn;
