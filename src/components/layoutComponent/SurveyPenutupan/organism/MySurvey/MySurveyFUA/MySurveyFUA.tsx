import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import React, {useState} from 'react';
import FAwesome from 'react-native-vector-icons/FontAwesome6';

import {surveyJobProps} from '../../../../../../props/surveyJobProps';
import JobMonitoringFUAStatus from '../../../atoms/JobMonitoring/JobMonitoringFUAStatus';
import {formatInputDateFUA} from '../../../../../../utilities/functions';

type MySurveyFUAProps = {
  item?: surveyJobProps;
};

const MySurveyFUA = React.memo(({item}: MySurveyFUAProps) => {
  const [noPengajuan, setNoPengajuan] = useState<string>(
    item?.noPengajuanSurvey || '',
  );
  const [contactDate, setContactDate] = useState<Date | undefined>(undefined);
  const [isOpenContactDate, setIsOpenContactDate] = useState<boolean>(false);
  const [appointmentDate, setAppointmentDate] = useState<Date | undefined>(
    undefined,
  );
  const [isOpenAppointmentDate, setIsOpenAppointmentDate] =
    useState<boolean>(false);
  const [isStatusOpen, setIsStatusOpen] = useState<boolean>(false);
  const [FUAStatus, setFUAStatus] = useState<string>('ongoing');

  const onConfirmContactDate = (date?: Date) => {
    setIsOpenContactDate(false);
    setContactDate(date);
  };

  const closeContactDate = () => {
    setIsOpenContactDate(false);
  };

  const onConfirmAppointmentDate = (date?: Date) => {
    setIsOpenAppointmentDate(false);
    setAppointmentDate(date);
  };

  const closeAppointmentDate = () => {
    setIsOpenAppointmentDate(false);
  };

  return (
    <View className="w-full flex flex-col items-start justify-center mb-4">
      <Text className="text-lg text-black font-bold px-3">
        Follow Up Activity
      </Text>
      <View className="w-full border-b border-black mb-2 mt-1" />

      {/* Follow Up Activity Form */}
      <View className="w-full flex flex-col justify-center items-start space-y-2 px-3">
        {/* Contact Date */}
        <View className="w-full flex flex-row items-center justify-between space-x-2">
          <View className="w-[30%] flex flex-row justify-between items-center">
            <Text className="text-black capitalize">Contact Date</Text>
            <Text className="text-black capitalize">:</Text>
          </View>
          <DatePicker
            modal
            open={isOpenContactDate}
            date={contactDate ?? new Date()}
            locale="en-GB"
            onConfirm={onConfirmContactDate}
            onCancel={closeContactDate}
          />
          <TouchableOpacity
            onPress={() => setIsOpenContactDate(true)}
            className="flex-1">
            <TextInput
              value={formatInputDateFUA(contactDate)}
              editable={false}
              placeholder="Select Contact Date"
              className="flex-1 text-black text-xs uppercase py-1 px-2 border border-gray-300 bg-gray-100 rounded"
            />
          </TouchableOpacity>
        </View>

        {/* Appointment Date */}
        <View className="w-full flex flex-row items-center justify-between space-x-2">
          <View className="w-[30%] flex flex-row justify-between items-center">
            <Text className="text-black capitalize">Appointment Date</Text>
            <Text className="text-black capitalize">:</Text>
          </View>
          <DatePicker
            modal
            open={isOpenAppointmentDate}
            date={appointmentDate ?? new Date()}
            locale="en-GB"
            onConfirm={onConfirmAppointmentDate}
            onCancel={closeAppointmentDate}
          />
          <TouchableOpacity
            onPress={() => setIsOpenAppointmentDate(true)}
            className="flex-1">
            <TextInput
              value={formatInputDateFUA(appointmentDate)}
              editable={false}
              placeholder="Select Appointment Date"
              className="flex-1 text-black text-xs uppercase py-1 px-2 border border-gray-300 bg-gray-100 rounded"
            />
          </TouchableOpacity>
        </View>

        {/* Address */}
        <View className="w-full flex flex-row items-center justify-between space-x-2">
          <View className="w-[30%] flex flex-row justify-between items-center">
            <Text className="text-black capitalize">Address</Text>
            <Text className="text-black capitalize">:</Text>
          </View>
          <TextInput
            value={noPengajuan}
            onChangeText={setNoPengajuan}
            multiline={true}
            className="flex-1 text-black text-xs uppercase py-1 px-2 border border-gray-300 bg-gray-100 rounded"></TextInput>
        </View>

        {/* Status */}
        <View className="w-full flex flex-row items-center justify-between space-x-2">
          <View className="w-[30%] flex flex-row justify-between items-center">
            <Text className="text-black capitalize">Status</Text>
            <Text className="text-black capitalize">:</Text>
          </View>

          <TouchableOpacity
            onPress={() => setIsStatusOpen(true)}
            className="relative flex-1 flex-row items-center border border-gray-300 bg-gray-100 rounded pr-3">
            <TextInput
              value={FUAStatus}
              editable={false}
              className="flex-1 text-black text-xs uppercase py-1 px-2"
            />
            <FAwesome
              name={isStatusOpen ? 'chevron-up' : 'chevron-down'}
              size={16}
              color="black"
            />
          </TouchableOpacity>
          {isStatusOpen && (
            <JobMonitoringFUAStatus
              openFUAStatus={setIsStatusOpen}
              statusFUA={setFUAStatus}
            />
          )}
        </View>

        {/* Remarks */}
        <View className="w-full flex flex-row items-center justify-between space-x-2">
          <View className="w-[30%] flex flex-row justify-between items-center">
            <Text className="text-black capitalize">Remarks</Text>
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
});

export default MySurveyFUA;
