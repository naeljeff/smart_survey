import {Text, View} from 'react-native';
import React from 'react';

import {
  calcAgingDate,
  formatDateSurveyPenutupanJob,
} from '../../../../../../utilities/functions';
import {surveyJobProps} from '../../../../../../props/surveyJobProps';

type IncomingJobAppointmentProps = {
  item?: surveyJobProps;
};

const IncomingJobAppointment = React.memo(
  ({item}: IncomingJobAppointmentProps) => {

    return (
      <View className="w-full flex flex-col items-start justify-center mb-2">
        <Text className="text-lg text-black font-bold px-3 py-1.5">
          Appointment Schedule
        </Text>
        <View className="w-full border-b border-black mb-2" />

        {/* Appointment Schedule Form */}
        <View className="w-full flex flex-col justify-center items-start space-y-2 px-3">
          {/* No Pengajuan */}
          <View className="w-full flex flex-row items-center justify-between space-x-2">
            <View className="w-[30%] flex flex-row justify-between items-center">
              <Text className="text-black capitalize">Register No</Text>
              <Text className="text-black capitalize">:</Text>
            </View>
            <Text className="flex-1 text-gray-400 text-xs uppercase py-1 px-2 border border-gray-300 bg-gray-100 rounded">
              {item?.noPengajuanSurvey ?? 'Null'}
            </Text>
          </View>

          {/* Unit No */}
          <View className="w-full flex flex-row items-center justify-between space-x-2">
            <View className="w-[30%] flex flex-row justify-between items-center">
              <Text className="text-black capitalize">Unit No</Text>
              <Text className="text-black capitalize">:</Text>
            </View>
            <Text className="flex-1 text-gray-400 text-xs uppercase py-1 px-2 border border-gray-300 bg-gray-100 rounded">
              {item?.unitNo ?? 'Null'}
            </Text>
          </View>

          {/* Requested By */}
          <View className="w-full flex flex-row items-center justify-between space-x-2">
            <View className="w-[30%] flex flex-row justify-between items-center">
              <Text className="text-black capitalize">Requested By</Text>
              <Text className="text-black capitalize">:</Text>
            </View>
            <Text className="flex-1 text-gray-400 text-xs uppercase py-1 px-2 border border-gray-300 bg-gray-100 rounded">
              {item?.requesterFullName ?? 'Null'}
            </Text>
          </View>

          {/* Requested Date */}
          <View className="w-full flex flex-row items-center justify-between space-x-2">
            <View className="w-[30%] flex flex-row justify-between items-center">
              <Text className="text-black capitalize">Requested Date</Text>
              <Text className="text-black capitalize">:</Text>
            </View>
            <Text className="flex-1 text-gray-400 text-xs uppercase py-1 px-2 border border-gray-300 bg-gray-100 rounded">
              {item?.createdAt
                ? formatDateSurveyPenutupanJob(item.createdAt)
                : 'Null'}
            </Text>
          </View>

          {/* Aging */}
          <View className="w-full flex flex-row items-center justify-between space-x-2">
            <View className="w-[30%] flex flex-row justify-between items-center">
              <Text className="text-black capitalize">Aging</Text>
              <Text className="text-black capitalize">:</Text>
            </View>
            <Text className="flex-1 text-gray-400 text-xs uppercase py-1 px-2 border border-gray-300 bg-gray-100 rounded">
              {item?.createdAt ? calcAgingDate(item.createdAt) : 'Null'}
            </Text>
          </View>

          {/* Priority */}
          <View className="w-full flex flex-row items-center justify-between space-x-2">
            <View className="w-[30%] flex flex-row justify-between items-center">
              <Text className="text-black capitalize">Priority</Text>
              <Text className="text-black capitalize">:</Text>
            </View>
            <Text className="flex-1 text-gray-400 text-xs uppercase py-1 px-2 border border-gray-300 bg-gray-100 rounded">
              {item?.priority ?? 'Null'}
            </Text>
          </View>
        </View>
      </View>
    );
  },
);

export default IncomingJobAppointment;
