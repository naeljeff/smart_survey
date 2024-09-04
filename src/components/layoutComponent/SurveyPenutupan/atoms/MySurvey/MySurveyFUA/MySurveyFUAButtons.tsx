import {Text, TouchableOpacity, View, Alert} from 'react-native';
import React from 'react';

import {surveyJobProps} from '../../../../../../props/surveyJobProps';

type MySurveyFUAButtonProps = {
  item: surveyJobProps;
  onSaveFua: () => void;
};

const MySurveyFUAButtons = ({item, onSaveFua}: MySurveyFUAButtonProps) => {
  const handleSaveFuaPressed = () => {
    Alert.alert('Follow Up Activity', 'Your FUA has been saved!', [{text: 'OK'}]);
    onSaveFua();
  };
  return (
    <View className="w-full h-[70px] mt-2 mb-3">
      <View className="flex-1 flex-row justify-center items-center px-3">
        <View className="h-full flex-[1/3]">
          {/* History */}
          <TouchableOpacity
            onPress={() =>
              console.log(`History FUA : ${item.noPengajuanSurvey}`)
            }
            className="h-full w-full flex justify-center items-center px-2 py-1 bg-gray-200 rounded-md shadow-xl border border-black">
            <Text className="text-black">History FUA</Text>
          </TouchableOpacity>
        </View>

        {/* Call and Save */}
        <View className="h-full flex-[1/3] flex flex-col justify-between items-center mx-5">
          {/* Call */}
          <TouchableOpacity
            onPress={() => console.log('Call')}
            className="h-[45%] w-full flex justify-center items-center px-2 py-1 rounded-md shadow-xl bg-gray-200 border border-black">
            <Text className="text-black">Call Contact Person</Text>
          </TouchableOpacity>

          {/* Save */}
          <TouchableOpacity
            onPress={handleSaveFuaPressed}
            className="h-[45%] w-full flex justify-center items-center px-2 py-1 rounded-md shadow-xl bg-gray-200 border border-black">
            <Text className="text-black">Save FUA</Text>
          </TouchableOpacity>
        </View>

        {/* Go Survey and Submit FUA */}
        <View className="h-full flex-[1/3] flex flex-col justify-between items-center">
          {/* Go Survey */}
          <TouchableOpacity
            onPress={() => console.log('Go Survey')}
            className="h-[45%] w-full flex justify-center items-center px-2 py-1 rounded-md shadow-xl bg-orange-400">
            <Text className="text-black">Go Survey</Text>
          </TouchableOpacity>

          {/* Submit FUA */}
          <TouchableOpacity
            onPress={() => console.log('Submit FUA')}
            className="h-[45%] w-full flex justify-center items-center px-2 py-1 rounded-md shadow-xl bg-orange-400">
            <Text className="text-black">Submit FUA</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MySurveyFUAButtons;
