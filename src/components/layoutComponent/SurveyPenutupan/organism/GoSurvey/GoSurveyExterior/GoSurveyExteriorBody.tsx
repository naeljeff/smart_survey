import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import GoSurveyExteriorDetail from '../../../molecules/GoSurvey/GoSurveyExterior/GoSurveyExteriorDetail';

const GoSurveyExteriorBody = () => {
  return (
    <ScrollView automaticallyAdjustKeyboardInsets={true} className="flex-grow">
      {/* General Info */}
      <View className="w-full border-b border-black">
        <Text className="font-semibold text-black text-[16px] px-5 py-1">
          Exterior / Interior
        </Text>
      </View>

      {/* Bemper - belakang */}
      <GoSurveyExteriorDetail title='bemper - belakang'/>
    </ScrollView>
  );
};

export default GoSurveyExteriorBody;
