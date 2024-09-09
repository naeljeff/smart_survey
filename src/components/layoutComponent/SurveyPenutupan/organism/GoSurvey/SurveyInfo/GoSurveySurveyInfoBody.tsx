import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {UseQueryResult} from '@tanstack/react-query';

import {surveyJobProps} from '../../../../../../props/surveyJobProps';
import GoSurveyGeneralInfoDropdown from '../../../atoms/GoSurvey/GoSurveyGeneralInfoDropdown';
import GoSurveySurveyInfoButton from '../../../atoms/GoSurvey/GoSurveySurveyInfoButton';

type surveyJobPropAsData = {
  data: surveyJobProps;
};

type GoSurveyInfoBodyProps = {
  surveyFunction: UseQueryResult<surveyJobPropAsData>;
  navigateToSignature: () => void;
};

const GoSurveySurveyInfoBody = ({
  surveyFunction,
  navigateToSignature,
}: GoSurveyInfoBodyProps) => {
  const [conclusionOfVehicle, setConclusionOfVehicle] = useState<string | null>(
    null,
  );
  return (
    <ScrollView automaticallyAdjustKeyboardInsets={true} className="flex-grow">
      {/* General Info */}
      <View className="w-full border-b border-black">
        <Text className="font-semibold text-black text-[16px] px-5 py-1">
          Conclusion of Vehicle
        </Text>
      </View>

      {/* Notes */}
      <View className="w-full h-[100px] px-5">
        <View className="flex-1 border border-black rounded-lg px-2 mt-1">
          <TextInput
            multiline
            placeholder="Notes"
            onChangeText={text => setConclusionOfVehicle(text)}
          />
        </View>
      </View>

      {/* Surat Kendaraan */}
      <View className="w-full border-b border-black mt-3">
        <Text className="text-black text-[16px] px-5 py-1">
          Surat Kendaraan
        </Text>
      </View>

      {/* Content Surat Kendaraan */}
      <View className="w-full px-5 py-2 flex flex-col items-center">
        {/* Type of Closure */}
        <View className="mb-2">
          <GoSurveyGeneralInfoDropdown
            data={'dropdown'}
            onChange={() => {}}
            fieldName={'Type of Closure'}
            properties={'transmission'}
            placeholder="Select Transmission"
          />
        </View>

        {/* Extended Coverage */}
        <View className="mb-2">
          <GoSurveyGeneralInfoDropdown
            data={'dropdown'}
            onChange={() => {}}
            fieldName={'Extended Coverage'}
            properties={'transmission'}
            placeholder="Select Transmission"
          />
        </View>

        {/* Condition of Engine No and Chassis No */}
        <View className="mb-2">
          <GoSurveyGeneralInfoDropdown
            data={'dropdown'}
            onChange={() => {}}
            fieldName={'Condition of Engine No and Chassis No'}
            properties={'transmission'}
            placeholder="Select Transmission"
          />
        </View>

        {/* Condition of Vehicle Oil */}
        <View className="mb-2">
          <GoSurveyGeneralInfoDropdown
            data={'dropdown'}
            onChange={() => {}}
            fieldName={'Condition of Vehicle Oil'}
            properties={'transmission'}
            placeholder="Select Transmission"
          />
        </View>
        {/* Condition of Vehicle Engine */}
        <View className="mb-2">
          <GoSurveyGeneralInfoDropdown
            data={'dropdown'}
            onChange={() => {}}
            fieldName={'Condition of Vehicle Engine'}
            properties={'transmission'}
            placeholder="Select Transmission"
          />
        </View>
        {/* Condition of Closure Flooding */}
        <View className="mb-2">
          <GoSurveyGeneralInfoDropdown
            data={'dropdown'}
            onChange={() => {}}
            fieldName={'Condition of Closure Flooding'}
            properties={'transmission'}
            placeholder="Select Transmission"
          />
        </View>
        {/* Overall Condition of the Vehicle */}
        <View className="mb-2">
          <GoSurveyGeneralInfoDropdown
            data={'dropdown'}
            onChange={() => {}}
            fieldName={'Overall Condition of the Vehicle'}
            properties={'transmission'}
            placeholder="Select Transmission"
          />
        </View>

        {/* Vehicle Often Used By */}
        <View className="mb-2">
          <GoSurveyGeneralInfoDropdown
            data={'dropdown'}
            onChange={() => {}}
            fieldName={'Vehicle Often Used By'}
            properties={'transmission'}
            placeholder="Select Transmission"
          />
        </View>

        {/* Vehicle Often Used Areas */}
        <View className="mb-2">
          <GoSurveyGeneralInfoDropdown
            data={'dropdown'}
            onChange={() => {}}
            fieldName={'Vehicle Often Used Areas'}
            properties={'transmission'}
            placeholder="Select Transmission"
          />
        </View>

        {/* Garage of Vehicle */}
        <View className="mb-2">
          <GoSurveyGeneralInfoDropdown
            data={'dropdown'}
            onChange={() => {}}
            fieldName={'Garage of Vehicle'}
            properties={'transmission'}
            placeholder="Select Transmission"
          />
        </View>
      </View>

      {/* Photo Chassis No/Engine No */}
      <View className="w-full border-b border-black mt-3">
        <Text className="text-black text-[16px] px-5 py-1">
          Photo Chassis No/Engine No
        </Text>
      </View>

      {/* Content Chassis No/Engine No */}
      <View className="w-full flex flex-col justify-center items-center mt-3 space-y-3">
        {/* Chassis No */}
        <View className="w-full flex flex-row justify-between items-center px-5">
          <View className="w-1/3 flex flex-row justify-start items-center">
            {/* Title */}
            <Text className="text-black mr-3.5">Chassis No</Text>

            {/* Button */}
            <GoSurveySurveyInfoButton
              name="camera"
              size={26}
              color="white"
              onPress={() => console.log('chassis no pressed')}
            />
          </View>

          {/* Chassis Picture */}
          <View className="w-full flex flex-col space-y-2 px-5">
            
          </View>
        </View>

        <View className='w-[90%] border-b border-gray-300'/>

        {/* Engine No */}
        <View className="w-full flex flex-row justify-between items-center px-5">
          <View className="w-1/3 flex flex-row justify-start items-center">
            {/* Title */}
            <Text className="text-black mr-5">Engine No</Text>

            {/* Button */}
            <GoSurveySurveyInfoButton
              name="camera"
              size={26}
              color="white"
              onPress={() => console.log('engine no pressed')}
            />
          </View>
          {/* Engine Pictures */}
          <View className="flex-1 flex flex-col space-y-2 px-5">
            
          </View>
        </View>
      </View>

      {/* Button */}
      <View className="w-full flex justify-center items-center py-3 my-5">
        <TouchableOpacity
          className="bg-gray-100 rounded-md px-4 py-1.5 border border-black"
          onPress={() => navigateToSignature()}>
          <Text className="text-black text-sm text-center">Save</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default GoSurveySurveyInfoBody;
