import {Alert, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {UseQueryResult} from '@tanstack/react-query';
import {CameraOptions, launchCamera} from 'react-native-image-picker';

import {surveyJobProps} from '../../../../../../props/surveyJobProps';
type surveyJobPropAsData = {
  data: surveyJobProps;
};

type GoSurveySurveyBodyProps = {
  surveyFunction: UseQueryResult<surveyJobPropAsData>;
  navigateToSurveyInfo: () => void;
};

const GoSurveySurveyBody = ({
  surveyFunction,
  navigateToSurveyInfo,
}: GoSurveySurveyBodyProps) => {
  const handleOpenCamera = () => {
    console.log('Open Camera function called');
    const options: CameraOptions = {
      mediaType: 'photo',
      cameraType: 'back',
    };

    launchCamera(options, response => {
      console.log('Camera response:', response);
      if (response.didCancel) {
        Alert.alert('Camera cancelled');
      } else if (response.errorCode) {
        Alert.alert('Camera error', response.errorMessage || 'Unknown error');
        console.error(
          'Camera error:',
          response.errorCode,
          response.errorMessage,
        );
      } else if (response.assets && response.assets.length > 0) {
        const uri = response.assets[0].uri;
        Alert.alert('Photo captured', `Image URI: ${uri}`);
      }
    });
  };
  return (
    <ScrollView automaticallyAdjustKeyboardInsets={true} className="flex-grow">
      {/* General Info */}
      <View className="w-full border-b border-black">
        <Text className="font-semibold text-black text-[16px] px-5 py-1">
          Panel Info
        </Text>
      </View>

      <View className="w-full flex justify-center items-center py-2 px-20 my-3 space-y-5">
        {/* Camera */}
        <TouchableOpacity
          className="w-full bg-gray-100 rounded-md px-4 py-1.5 border border-black"
          onPress={handleOpenCamera}>
          <Text className="text-black text-sm text-center uppercase">
            Camera
          </Text>
        </TouchableOpacity>

        {/* Selfie Photo */}
        <TouchableOpacity
          className="w-full bg-gray-100 rounded-md px-4 py-1.5 border border-black"
          onPress={() => navigateToSurveyInfo()}>
          <Text className="text-black text-sm text-center uppercase">
            Selfie Photo
          </Text>
        </TouchableOpacity>

        {/* Exterior */}
        <TouchableOpacity
          className="w-full bg-gray-100 rounded-md px-4 py-1.5 border border-black"
          onPress={() => navigateToSurveyInfo()}>
          <Text className="text-black text-sm text-center uppercase">
            Exterior
          </Text>
        </TouchableOpacity>

        {/* Additional */}
        <TouchableOpacity
          className="w-full bg-gray-100 rounded-md px-4 py-1.5 border border-black"
          onPress={() => navigateToSurveyInfo()}>
          <Text className="text-black text-sm text-center uppercase">
            Additional
          </Text>
        </TouchableOpacity>
      </View>

      {/* Button */}
      <View className="w-full flex justify-center items-center py-3 my-5">
        <TouchableOpacity
          className="bg-gray-100 rounded-md px-4 py-1.5 border border-black"
          onPress={() => navigateToSurveyInfo()}>
          <Text className="text-black text-sm text-center">Next</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default GoSurveySurveyBody;
