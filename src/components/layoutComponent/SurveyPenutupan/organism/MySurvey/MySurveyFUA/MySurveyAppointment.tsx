import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';

import {
  calcAgingDate,
  formatInputDateFUA,
} from '../../../../../../utilities/functions';
import { useSelectedSurvey } from '../../../../../../store/storeSelectedSurvey';

const MySurveyAppointment = React.memo(
  () => {
    const {data: item} = useSelectedSurvey((state) => state);
    const [noPengajuan, setNoPengajuan] = useState<string>(
      item?.noPengajuanSurvey || '',
    );
    const [unitNo, setUnitNo] = useState<string>(item?.unitNo || '');
    const [requestedBy, setRequestedBy] = useState<string>(
      item?.requesterFullName || '',
    );

    const initialRequestedDate = item?.createdAt
      ? new Date(item.createdAt.replace(' ', 'T'))
      : undefined;
    const [requestedDate, setRequestedDate] = useState<Date | undefined>(
      initialRequestedDate,
    );
    const [isRequestedDateOpen, setIsRequestedDateOpen] =
      useState<boolean>(false);

    const aging: number | null = item?.createdAt
      ? calcAgingDate(item.createdAt)
      : null;

    const onConfirmRequestedDate = (date?: Date) => {
      setIsRequestedDateOpen(false);
      setRequestedDate(date);
    };

    const closeRequestedDate = () => {
      setIsRequestedDateOpen(false);
    };

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
            <TextInput
              value={noPengajuan}
              onChangeText={setNoPengajuan}
              className="flex-1 text-black text-xs uppercase py-1 px-2 border border-gray-300 bg-gray-100 rounded"></TextInput>
          </View>

          {/* Unit No */}
          <View className="w-full flex flex-row items-center justify-between space-x-2">
            <View className="w-[30%] flex flex-row justify-between items-center">
              <Text className="text-black capitalize">Unit No</Text>
              <Text className="text-black capitalize">:</Text>
            </View>
            <TextInput
              value={unitNo}
              onChangeText={setUnitNo}
              className="flex-1 text-black text-xs uppercase py-1 px-2 border border-gray-300 bg-gray-100 rounded"></TextInput>
          </View>

          {/* Requested By */}
          <View className="w-full flex flex-row items-center justify-between space-x-2">
            <View className="w-[30%] flex flex-row justify-between items-center">
              <Text className="text-black capitalize">Requested By</Text>
              <Text className="text-black capitalize">:</Text>
            </View>
            <TextInput
              value={requestedBy}
              onChangeText={setRequestedBy}
              className="flex-1 text-black text-xs uppercase py-1 px-2 border border-gray-300 bg-gray-100 rounded"></TextInput>
          </View>

          {/* Requested Date */}
          <View className="w-full flex flex-row items-center justify-between space-x-2">
            <View className="w-[30%] flex flex-row justify-between items-center">
              <Text className="text-black capitalize">Requested Date</Text>
              <Text className="text-black capitalize">:</Text>
            </View>
            <DatePicker
              modal
              open={isRequestedDateOpen}
              date={requestedDate ?? new Date()}
              locale="en-GB"
              onConfirm={onConfirmRequestedDate}
              onCancel={closeRequestedDate}
            />
            <TouchableOpacity
              onPress={() => setIsRequestedDateOpen(true)}
              className="flex-1">
              <TextInput
                value={formatInputDateFUA(requestedDate)}
                editable={false}
                placeholder="Select Appointment Date"
                className="flex-1 text-black text-xs uppercase py-1 px-2 border border-gray-300 bg-gray-100 rounded"
              />
            </TouchableOpacity>
          </View>

          {/* Aging */}
          <View className="w-full flex flex-row items-center justify-between space-x-2">
            <View className="w-[30%] flex flex-row justify-between items-center">
              <Text className="text-black capitalize">Aging</Text>
              <Text className="text-black capitalize">:</Text>
            </View>
            <Text className="flex-1 text-gray-400 text-xs uppercase py-2.5 px-2 border border-gray-300 bg-gray-100 rounded">
              {aging}
            </Text>
          </View>

          {/* Priority */}
          <View className="w-full flex flex-row items-center justify-between space-x-2">
            <View className="w-[30%] flex flex-row justify-between items-center">
              <Text className="text-black capitalize">Priority</Text>
              <Text className="text-black capitalize">:</Text>
            </View>
            <Text className="flex-1 text-gray-400 text-xs uppercase py-2.5 px-2 border border-gray-300 bg-gray-100 rounded">
              {item?.priority || null}
            </Text>
          </View>
        </View>
      </View>
    );
  },
);

export default MySurveyAppointment;
