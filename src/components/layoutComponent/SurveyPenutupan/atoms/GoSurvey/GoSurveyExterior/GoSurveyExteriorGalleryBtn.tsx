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
    <Surface elevation={1} className="rounded-lg">
      <TouchableOpacity onPress={onPress}>
        <View className="rounded-lg bg-[#faa72c] px-1.5 py-0.5">
          <MCI name={'folder-open-outline'} size={26} color={'white'} />
        </View>
      </TouchableOpacity>
    </Surface>
  );
};

export default GoSurveyExteriorGalleryBtn;
