import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import FAwesome from 'react-native-vector-icons/FontAwesome6';

type GoSurveyGeneralInfoDropdownProps = {
  data: any;
  fieldName: string;
  properties: string;
  onChange?: (fieldName: string, value: string) => void;
};

const GoSurveyGeneralInfoDropdown = ({
  data,
  fieldName,
  onChange,
  properties,
}: GoSurveyGeneralInfoDropdownProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  console.log(isDropdownOpen);
  return (
    <View className="w-full flex flex-row items-center justify-between space-x-2 mt-2">
      <View className="w-[30%] flex flex-row justify-between items-center">
        <Text className="text-black capitalize">{fieldName}</Text>
        <Text className="text-black capitalize">:</Text>
      </View>

      <TouchableOpacity
        onPress={() => setIsDropdownOpen(true)}
        className="relative flex-1 flex-row items-center border border-gray-300 bg-gray-100 rounded pr-3">
        <TextInput
          value={data}
          editable={false}
          className="flex-1 text-black text-xs uppercase py-1 px-2"
        />
        <FAwesome
          name={isDropdownOpen ? 'chevron-up' : 'chevron-down'}
          size={16}
          color="black"
        />
      </TouchableOpacity>
      {/* {isDropdownOpen && (
        <JobMonitoringFUAStatus
          openFUAStatus={setIsStatusOpen}
          statusFUA={status => setTempFua(prev => ({...prev, status: status}))}
        />
      )} */}
    </View>
  );
};

export default GoSurveyGeneralInfoDropdown;
