import {ScrollView, Text, TextInput, View} from 'react-native';
import React from 'react';

import GoSurveyExteriorEditBtn from '../../../atoms/GoSurvey/GoSurveyExterior/GoSurveyExteriorEditBtn';
import GoSurveyExteriorRefreshBtn from '../../../atoms/GoSurvey/GoSurveyExterior/GoSurveyExteriorRefreshBtn';
import GoSurveyExteriorGalleryBtn from '../../../atoms/GoSurvey/GoSurveyExterior/GoSurveyExteriorGalleryBtn';
import GoSurveyExteriorCameraBtn from '../../../atoms/GoSurvey/GoSurveyExterior/GoSurveyExteriorCameraBtn';
import GoSurveyGeneralInfoDropdown from '../../../atoms/GoSurvey/GoSurveyGeneralInfoDropdown';
import {useGoSurveyExterior} from '../../../../../../store/storeGoSurveyExterior';

type GoSurveyExteriorDetailProps = {
  title: string;
  type: string;
};

const GoSurveyExteriorDetail = ({title, type}: GoSurveyExteriorDetailProps) => {
  const {exteriorData, addOrUpdateExteriorData} = useGoSurveyExterior();
  const partData = exteriorData[type] || {
    statusOfCondition: '',
    status: '',
    condition: '',
    brand: '',
    photos: [],
  };

  const handleDropdownSelection = (property: string, value: string) => {
    addOrUpdateExteriorData(type, {[property]: value});
  };
  return (
    <View className="w-full flex-1 flex-col justify-start border-b border-gray-300 px-3 py-2">
      {/* Title */}
      <View className="w-full flex justify-center items-start">
        <Text className="text-black text-[16px] uppercase">{title}</Text>
      </View>

      {/* Fields */}
      <View className="w-full flex-1 flex flex-row justify-center items-center">
        {/* Status of Condition and Status */}
        <View className="w-1/3 flex flex-col space-y-2">
          {/* Status of Condition */}
          <View className="mb-2">
            <GoSurveyGeneralInfoDropdown
              data={partData.statusOfCondition}
              onChange={handleDropdownSelection}
              fieldName={''}
              properties={'statusOfCondition'}
              placeholder="Select Status of Condition"
            />
          </View>

          {/* Status */}
          <GoSurveyGeneralInfoDropdown
            data={partData.status}
            onChange={handleDropdownSelection}
            fieldName={''}
            properties={'status'}
            placeholder="Select Status"
          />
        </View>

        {/* Condition and Brand */}
        <View className="w-1/2 flex-1 flex flex-col space-y-2 mx-1">
          {/* Condition */}
          <View className="mb-2">
            <GoSurveyGeneralInfoDropdown
              data={partData.condition}
              onChange={handleDropdownSelection}
              fieldName={'Condition'}
              properties={'condition'}
              placeholder="Select Condition"
            />
          </View>

          {/* Brand */}
          <View className="w-full flex flex-row items-center justify-between space-x-2">
            <View className="w-[30%] flex flex-row justify-between items-center">
              <Text className="text-black capitalize text-xs">Brand</Text>
              <Text className="text-black capitalize text-xs">:</Text>
            </View>
            <TextInput
              value={partData.brand}
              onChangeText={text => handleDropdownSelection('brand', text)}
              placeholder="Brand"
              className="flex-1 text-black text-xs uppercase py-1 px-2 border border-gray-300 bg-gray-100 rounded"
            />
          </View>
        </View>

        {/* Action Buttons */}
        <View className="w-1/6 flex flex-col space-y-2">
          {/* Edit and Refresh */}
          <View className="w-full flex-1 flex flex-row justify-center items-center mt-1 ml-1">
            <View className="mx-0.5">
              <GoSurveyExteriorEditBtn onPress={() => {}} />
            </View>
            <GoSurveyExteriorRefreshBtn onPress={() => {}} />
          </View>

          {/* Gallery and Camera */}
          <View className="w-full flex-1 flex flex-row justify-center items-center mt-1 ml-1">
            <View className="mx-0.5">
              <GoSurveyExteriorGalleryBtn onPress={() => {}} />
            </View>
            <GoSurveyExteriorCameraBtn onPress={() => {}} />
          </View>
        </View>
      </View>

      {/* Picture */}
      <ScrollView
        className="h-[80px] my-2"
        showsVerticalScrollIndicator={true}
        nestedScrollEnabled={true}>
        {/* Ntar foto yg diupload masuk ke sini */}
      </ScrollView>
    </View>
  );
};

export default GoSurveyExteriorDetail;
