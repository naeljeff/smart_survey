import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import GoSurveyExteriorEditBtn from '../../../atoms/GoSurvey/GoSurveyExterior/GoSurveyExteriorEditBtn';
import GoSurveyExteriorRefreshBtn from '../../../atoms/GoSurvey/GoSurveyExterior/GoSurveyExteriorRefreshBtn';
import GoSurveyExteriorGalleryBtn from '../../../atoms/GoSurvey/GoSurveyExterior/GoSurveyExteriorGalleryBtn';
import GoSurveyExteriorCameraBtn from '../../../atoms/GoSurvey/GoSurveyExterior/GoSurveyExteriorCameraBtn';
import GoSurveyGeneralInfoDropdown from '../../../atoms/GoSurvey/GoSurveyGeneralInfoDropdown';

type GoSurveyExteriorDetailProps = {
  title: string;
};

const GoSurveyExteriorDetail = ({title}: GoSurveyExteriorDetailProps) => {
  return (
    <View className="w-full flex flex-col justify-start bg-yellow-50 px-3 py-2">
      {/* Title */}
      <View className="w-full flex justify-center items-start">
        <Text className="text-black text-[16px] uppercase">{title}</Text>
      </View>

      {/* Fields */}
      <View className="w-full flex flex-row justify-center items-center">
        {/* Status of Condition and Status */}
        <View className="w-1/3 flex flex-col space-y-2">
          {/* Status of Condition */}
          <View className="mb-2">
            <GoSurveyGeneralInfoDropdown
              data={''}
              onChange={() => {}}
              fieldName={''}
              properties={'transmission'}
              placeholder="Select Status of Condition"
            />
          </View>

          {/* Status */}
          <View className="mb-2">
            <GoSurveyGeneralInfoDropdown
              data={''}
              onChange={() => {}}
              fieldName={''}
              properties={'transmission'}
              placeholder="Select Status"
            />
          </View>
        </View>

        {/* Condition and Brand */}
        <View className="w-1/2 flex flex-col space-y-2 mx-1">
          {/* Condition */}
          <View className="w-full flex flex-row items-center justify-between space-x-2">
            {/* <View className="w-[30%] flex flex-row justify-between items-center">
              <Text className="text-black capitalize">Condition</Text>
              <Text className="text-black capitalize">:</Text>
            </View> */}
            <View className="mb-2">
              <GoSurveyGeneralInfoDropdown
                data={''}
                onChange={() => {}}
                fieldName={'Condition'}
                properties={'condition'}
                placeholder="Select Condition"
              />
            </View>
          </View>

          {/* Brand */}
          <View className="w-full flex flex-row items-center justify-between space-x-2">
            <View className="w-[30%] flex flex-row justify-between items-center">
              <Text className="text-black capitalize">Brand</Text>
              <Text className="text-black capitalize">:</Text>
            </View>
            <Text className="flex-1 text-gray-400 text-xs uppercase py-2.5 px-2 border border-gray-300 bg-gray-100 rounded">
              Brand
            </Text>
          </View>
        </View>

        {/* Action Buttons */}
        <View className="w-1/6 flex flex-col space-y-2">
          {/* Edit and Refresh */}
          <View className="w-full flex flex-row space-x-1">
            <GoSurveyExteriorEditBtn onPress={() => {}} />
            <GoSurveyExteriorRefreshBtn onPress={() => {}} />
          </View>

          {/* Gallery and Camera */}
          <View className="w-full flex flex-row space-x-1">
            <GoSurveyExteriorGalleryBtn onPress={() => {}} />
            <GoSurveyExteriorCameraBtn onPress={() => {}} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default GoSurveyExteriorDetail;
