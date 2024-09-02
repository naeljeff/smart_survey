import {Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';

import {surveyJobProps} from '../../../../../../props/surveyJobProps';

type MySurveyCoorporateProps = {
  item?: surveyJobProps;
};

const MySurveyCoorporateContact = React.memo(
  ({item}: MySurveyCoorporateProps) => {
    const [noPengajuan, setNoPengajuan] = useState<string>(
      item?.noPengajuanSurvey || '',
    );
    return (
      <View className="w-full flex flex-col items-start justify-center mb-2">
        <Text className="text-lg text-black font-bold px-3 py-1.5">
          Coorporate Contact Person
        </Text>
        <View className="w-full border-b border-black mb-2" />

        {/* Cooporate Contact Person Form */}
        <View className="w-full flex flex-col justify-center items-start space-y-2 px-3">
          {/* Company Code */}
          <View className="w-full flex flex-row items-center justify-between space-x-2">
            <View className="w-[30%] flex flex-row justify-between items-center">
              <Text className="text-black capitalize">Company Code</Text>
              <Text className="text-black capitalize">:</Text>
            </View>
            <TextInput
              value={noPengajuan}
              onChangeText={setNoPengajuan}
              className="flex-1 text-black text-xs uppercase py-1 px-2 border border-gray-300 bg-gray-100 rounded"></TextInput>
          </View>

          {/* Company Name */}
          <View className="w-full flex flex-row items-center justify-between space-x-2">
            <View className="w-[30%] flex flex-row justify-between items-center">
              <Text className="text-black capitalize">Company Name</Text>
              <Text className="text-black capitalize">:</Text>
            </View>
            <TextInput
              value={noPengajuan}
              onChangeText={setNoPengajuan}
              className="flex-1 text-black text-xs uppercase py-1 px-2 border border-gray-300 bg-gray-100 rounded"></TextInput>
          </View>

          {/* SOB Code */}
          <View className="w-full flex flex-row items-center justify-between space-x-2">
            <View className="w-[30%] flex flex-row justify-between items-center">
              <Text className="text-black capitalize">SOB Code</Text>
              <Text className="text-black capitalize">:</Text>
            </View>
            <TextInput
              value={noPengajuan}
              onChangeText={setNoPengajuan}
              className="flex-1 text-black text-xs uppercase py-1 px-2 border border-gray-300 bg-gray-100 rounded"></TextInput>
          </View>

          {/* SOB Name */}
          <View className="w-full flex flex-row items-center justify-between space-x-2">
            <View className="w-[30%] flex flex-row justify-between items-center">
              <Text className="text-black capitalize">SOB Name</Text>
              <Text className="text-black capitalize">:</Text>
            </View>
            <TextInput
              value={noPengajuan}
              onChangeText={setNoPengajuan}
              className="flex-1 text-black text-xs uppercase py-1 px-2 border border-gray-300 bg-gray-100 rounded"></TextInput>
          </View>

          {/* SOB Type */}
          <View className="w-full flex flex-row items-center justify-between space-x-2">
            <View className="w-[30%] flex flex-row justify-between items-center">
              <Text className="text-black capitalize">SOB Type</Text>
              <Text className="text-black capitalize">:</Text>
            </View>
            <TextInput
              value={noPengajuan}
              onChangeText={setNoPengajuan}
              className="flex-1 text-black text-xs uppercase py-1 px-2 border border-gray-300 bg-gray-100 rounded"></TextInput>
          </View>

          {/* Contact Person */}
          <View className="w-full flex flex-row items-center justify-between space-x-2">
            <View className="w-[30%] flex flex-row justify-between items-center">
              <Text className="text-black capitalize">Contact Person</Text>
              <Text className="text-black capitalize">:</Text>
            </View>
            <TextInput
              value={noPengajuan}
              onChangeText={setNoPengajuan}
              className="flex-1 text-black text-xs uppercase py-1 px-2 border border-gray-300 bg-gray-100 rounded"></TextInput>
          </View>

          {/* SOB Phone */}
          <View className="w-full flex flex-row items-center justify-between space-x-2">
            <View className="w-[30%] flex flex-row justify-between items-center">
              <Text className="text-black capitalize">SOB Phone</Text>
              <Text className="text-black capitalize">:</Text>
            </View>
            <TextInput
              value={noPengajuan}
              onChangeText={setNoPengajuan}
              className="flex-1 text-black text-xs uppercase py-1 px-2 border border-gray-300 bg-gray-100 rounded"></TextInput>
          </View>

          {/* SOB Remarks */}
          <View className="w-full flex flex-row items-center justify-between space-x-2">
            <View className="w-[30%] flex flex-row justify-between items-center">
              <Text className="text-black capitalize">SOB Remarks</Text>
              <Text className="text-black capitalize">:</Text>
            </View>
            <TextInput
              value={noPengajuan}
              onChangeText={setNoPengajuan}
              multiline={true}
              className="flex-1 text-black text-xs uppercase py-1 px-2 border border-gray-300 bg-gray-100 rounded"></TextInput>
          </View>
        </View>
      </View>
    );
  },
);

export default MySurveyCoorporateContact;
