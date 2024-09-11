import {Text, View} from 'react-native';
import React from 'react';

import { useSelectedSurvey } from '../../../../../../../store/storeSelectedSurvey';

const MySurveyFuaHistoryPersonalContact = () => {
  const {data: item} = useSelectedSurvey((state) => state);
  return (
    <View className="w-full flex flex-col items-start justify-center mb-2">
      <Text className="text-lg text-black font-bold px-3 py-1.5">
        Personal Contact Person
      </Text>
      <View className="w-full border-b border-black mb-2" />

      {/* Personal Contact Person Form */}
      <View className="w-full flex flex-col justify-center items-start space-y-2 px-3">
        {/* Name */}
        <View className="w-full flex flex-row items-center justify-between space-x-2">
          <View className="w-[30%] flex flex-row justify-between items-center">
            <Text className="text-black capitalize">Name</Text>
            <Text className="text-black capitalize">:</Text>
          </View>
          <Text className=" flex-1 text-gray-400 text-xs uppercase py-1 px-2 border border-gray-300 bg-gray-100 rounded">
            {item?.nama ?? 'Null'}
          </Text>
        </View>

        {/* Address */}
        <View className="w-full flex flex-row items-center justify-between space-x-2">
          <View className="w-[30%] flex flex-row justify-between items-center">
            <Text className="text-black capitalize">Address</Text>
            <Text className="text-black capitalize">:</Text>
          </View>
          <Text className="flex-1 text-gray-400 text-xs uppercase py-2.5 px-2 border border-gray-300 bg-gray-100 rounded">
            {item?.alamat ?? 'Null'}
          </Text>
        </View>

        {/* Phone Number */}
        <View className="w-full flex flex-row items-center justify-between space-x-2">
          <View className="w-[30%] flex flex-row justify-between items-center">
            <Text className="text-black capitalize">Phone Number</Text>
            <Text className="text-black capitalize">:</Text>
          </View>
          <Text className="flex-1 text-gray-400 text-xs uppercase py-2.5 px-2 border border-gray-300 bg-gray-100 rounded">
            {item?.noTelp ?? 'Null'}
          </Text>
        </View>

        {/* Email */}
        <View className="w-full flex flex-row items-center justify-between space-x-2">
          <View className="w-[30%] flex flex-row justify-between items-center">
            <Text className="text-black capitalize">Email</Text>
            <Text className="text-black capitalize">:</Text>
          </View>
          <Text className="flex-1 text-gray-400 text-xs uppercase py-2.5 px-2 border border-gray-300 bg-gray-100 rounded">
            {item?.email ?? 'Null'}
          </Text>
        </View>

        {/* Remarks */}
        <View className="w-full flex flex-row items-center justify-between space-x-2">
          <View className="w-[30%] flex flex-row justify-between items-center">
            <Text className="text-black capitalize">MKG Remarks</Text>
            <Text className="text-black capitalize">:</Text>
          </View>
          <Text className="flex-1 text-gray-400 text-xs uppercase py-2.5 px-2 border border-gray-300 bg-gray-100 rounded">
            {item?.catatan ?? 'Null'}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default MySurveyFuaHistoryPersonalContact;
