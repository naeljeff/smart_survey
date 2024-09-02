import {Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';

import {surveyJobProps} from '../../../../../../props/surveyJobProps';

type MySurveyPersonalContactProps = {
  item?: surveyJobProps;
};

const MySurveyPersonalContact = React.memo(
  ({item}: MySurveyPersonalContactProps) => {
    const [name, setName] = useState<string>(item?.nama || '');
    const [address, setAddress] = useState<string>(item?.alamatSurvey || '');
    const [phoneNumber, setPhoneNumber] = useState<string>(item?.noTelp || '');
    const [email, setEmail] = useState<string>(item?.email || '');
    const [remarks, setRemarks] = useState<string>(item?.catatan || '');

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
            <TextInput
              value={name}
              onChangeText={setName}
              className="flex-1 text-black text-xs uppercase py-1 px-2 border border-gray-300 bg-gray-100 rounded"></TextInput>
          </View>

          {/* Address */}
          <View className="w-full flex flex-row items-center justify-between space-x-2">
            <View className="w-[30%] flex flex-row justify-between items-center">
              <Text className="text-black capitalize">Address</Text>
              <Text className="text-black capitalize">:</Text>
            </View>
            <TextInput
              value={address}
              onChangeText={setAddress}
              multiline
              className="flex-1 text-black text-xs uppercase py-1 px-2 border border-gray-300 bg-gray-100 rounded"></TextInput>
          </View>

          {/* Phone Number */}
          <View className="w-full flex flex-row items-center justify-between space-x-2">
            <View className="w-[30%] flex flex-row justify-between items-center">
              <Text className="text-black capitalize">Phone Number</Text>
              <Text className="text-black capitalize">:</Text>
            </View>
            <TextInput
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              className="flex-1 text-black text-xs uppercase py-1 px-2 border border-gray-300 bg-gray-100 rounded"></TextInput>
          </View>

          {/* Email */}
          <View className="w-full flex flex-row items-center justify-between space-x-2">
            <View className="w-[30%] flex flex-row justify-between items-center">
              <Text className="text-black capitalize">Email</Text>
              <Text className="text-black capitalize">:</Text>
            </View>
            <TextInput
              value={email}
              onChangeText={setEmail}
              className="flex-1 text-black text-xs uppercase py-1 px-2 border border-gray-300 bg-gray-100 rounded"></TextInput>
          </View>

          {/* Remarks */}
          <View className="w-full flex flex-row items-center justify-between space-x-2">
            <View className="w-[30%] flex flex-row justify-between items-center">
              <Text className="text-black capitalize">MKG Remarks</Text>
              <Text className="text-black capitalize">:</Text>
            </View>
            <TextInput
              value={remarks}
              onChangeText={setRemarks}
              multiline={true}
              className="flex-1 text-black text-xs uppercase py-1 px-2 border border-gray-300 bg-gray-100 rounded"></TextInput>
          </View>
        </View>
      </View>
    );
  },
);

export default MySurveyPersonalContact;
