import {Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {formatInputDateFUA} from '../../../../../../../utilities/functions';

type MySurveyFuaHistoryBodyProps = {
  data?: any;
};

const MySurveyFuaHistoryBody = ({data}: MySurveyFuaHistoryBodyProps) => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const totalPages = data?.data?.length;

  if (totalPages === 0) {
    return (
      <View className="w-full flex flex-col items-start justify-center mb-4 mt-2">
        <View className="w-full flex flex-row justify-between items-center">
          <Text className="text-lg text-black font-bold px-3">
            Follow Up Activity
          </Text>

          <Text className="text-lg text-black font-bold px-3">
            {currentPage + 0} of {totalPages}
          </Text>
        </View>
        <View className="w-full border-b border-black mb-2 mt-1" />

        <View className="w-full flex flex-col items-center justify-center">
          <Text className="text-lg font-semibold text-center">
            No history FUA for this survey
          </Text>
        </View>
      </View>
    );
  }
  return (
    <View className="w-full flex flex-col items-start justify-center mb-4 mt-2">
      <View className="w-full flex flex-row justify-between items-center">
        <Text className="text-lg text-black font-bold px-3">
          Follow Up Activity
        </Text>

        <Text className="text-lg text-black font-bold px-3">
          {currentPage + 1} of {totalPages}
        </Text>
      </View>
      <View className="w-full border-b border-black mb-2 mt-1" />

      <View className="w-full flex-1 flex flex-row items-center space-x-1">
        <View className="pl-1">
          <TouchableOpacity
            disabled={currentPage === 0 ? true : false}
            onPress={() => setCurrentPage(currentPage - 1)}>
            <Ionicons
              name={'chevron-back'}
              size={26}
              color={currentPage !== 0 ? 'black' : 'lightgray'}
            />
          </TouchableOpacity>
        </View>

        {/* Follow Up Activity Form */}
        <View className="flex-1 flex flex-col justify-center items-start space-y-2 px-1">
          {/* Contact Date */}
          <View className="w-full flex flex-row items-center justify-between space-x-2">
            <View className="w-[30%] flex flex-row justify-between items-center">
              <Text className="text-black capitalize">Contact Date</Text>
              <Text className="text-black capitalize">:</Text>
            </View>
            <Text className="flex-1 text-gray-400 text-xs uppercase py-2.5 px-2 border border-gray-300 bg-gray-100 rounded">
              {data?.data[currentPage]?.contactDate
                ? formatInputDateFUA(
                    new Date(data.data[currentPage].contactDate),
                  )
                : ''}
            </Text>
          </View>

          {/* Appointment Date */}
          <View className="w-full flex flex-row items-center justify-between space-x-2">
            <View className="w-[30%] flex flex-row justify-between items-center">
              <Text className="text-black capitalize">Appointment Date</Text>
              <Text className="text-black capitalize">:</Text>
            </View>
            <Text className="flex-1 text-gray-400 text-xs uppercase py-2.5 px-2 border border-gray-300 bg-gray-100 rounded">
              {data?.data[currentPage]?.appointmentDate
                ? formatInputDateFUA(
                    new Date(data.data[currentPage].appointmentDate),
                  )
                : ''}
            </Text>
          </View>

          {/* Address */}
          <View className="w-full flex flex-row items-center justify-between space-x-2">
            <View className="w-[30%] flex flex-row justify-between items-center">
              <Text className="text-black capitalize">Address</Text>
              <Text className="text-black capitalize">:</Text>
            </View>
            <Text className="flex-1 text-gray-400 text-xs uppercase py-2.5 px-2 border border-gray-300 bg-gray-100 rounded">
              {data?.data[currentPage]?.address
                ? data?.data[currentPage]?.address
                : ''}
            </Text>
          </View>

          {/* Status */}
          <View className="w-full flex flex-row items-center justify-between space-x-2">
            <View className="w-[30%] flex flex-row justify-between items-center">
              <Text className="text-black capitalize">Status</Text>
              <Text className="text-black capitalize">:</Text>
            </View>
            <Text className="flex-1 text-gray-400 text-xs uppercase py-2.5 px-2 border border-gray-300 bg-gray-100 rounded">
              {data?.data[currentPage]?.status
                ? data?.data[currentPage]?.status
                : ''}
            </Text>
          </View>

          {/* Remarks */}
          <View className="w-full flex flex-row items-center justify-between space-x-2">
            <View className="w-[30%] flex flex-row justify-between items-center">
              <Text className="text-black capitalize">Remarks</Text>
              <Text className="text-black capitalize">:</Text>
            </View>
            <Text className="flex-1 text-gray-400 text-xs uppercase py-2.5 px-2 border border-gray-300 bg-gray-100 rounded">
              {data?.data[currentPage]?.remarks
                ? data?.data[currentPage]?.remarks
                : ''}
            </Text>
          </View>
        </View>

        <View className="pr-1">
          <TouchableOpacity
            disabled={currentPage + 1 === totalPages ? true : false}
            onPress={() => setCurrentPage(currentPage + 1)}>
            <Ionicons
              name={'chevron-forward'}
              size={26}
              color={currentPage + 1 !== totalPages ? 'black' : 'lightgray'}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MySurveyFuaHistoryBody;
