import {Text, TextInput, View} from 'react-native';
import React from 'react';

type GoSurveyGeneralInfoFieldProps = {
  data: any;
  fieldName: string;
  properties: string;
  onChange?: (properties: string, value: string) => void;
};

const GoSurveyGeneralInfoFields = ({
  data,
  fieldName,
  onChange,
  properties,
}: GoSurveyGeneralInfoFieldProps) => {
  return (
    <View className="w-full flex flex-row items-center justify-between space-x-2 mt-2">
      <View className="w-[30%] flex flex-row justify-between items-center">
        <Text className="text-black capitalize">{fieldName}</Text>
        <Text className="text-black capitalize">:</Text>
      </View>
      <TextInput
        value={data}
        onChangeText={text => onChange && onChange(properties, text)}
        multiline={true}
        className="flex-1 text-black text-xs uppercase py-1 px-2 border border-gray-300 bg-gray-100 rounded"></TextInput>
    </View>
  );
};

export default GoSurveyGeneralInfoFields;
