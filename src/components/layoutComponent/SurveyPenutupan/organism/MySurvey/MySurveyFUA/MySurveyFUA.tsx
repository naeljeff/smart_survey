import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import React, {Dispatch, SetStateAction, useState} from 'react';
import FAwesome from 'react-native-vector-icons/FontAwesome6';

import JobMonitoringFUAStatus from '../../../atoms/JobMonitoring/JobMonitoringFUAStatus';
import {formatInputDateFUA} from '../../../../../../utilities/functions';
import {FuaType} from '../../../../../../props/fuaDataProps';

type MySurveyFUAProps = {
  tempFua: FuaType;
  setTempFua: Dispatch<SetStateAction<FuaType>>;
};

const MySurveyFUA = React.memo(({tempFua, setTempFua}: MySurveyFUAProps) => {
  const [isOpenContactDate, setIsOpenContactDate] = useState<boolean>(false);
  const [isOpenAppointmentDate, setIsOpenAppointmentDate] =
    useState<boolean>(false);
  const [isStatusOpen, setIsStatusOpen] = useState<boolean>(false);

  const onConfirmContactDate = (date?: Date) => {
    setIsOpenContactDate(false);
    if (date) setTempFua(prev => ({...prev, contactDate: date}));
  };

  const closeContactDate = () => {
    setIsOpenContactDate(false);
  };

  const onConfirmAppointmentDate = (date?: Date) => {
    setIsOpenAppointmentDate(false);
    if (date) setTempFua(prev => ({...prev, appointmentDate: date}));
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
            date={tempFua.contactDate ?? new Date()}
            locale="en-GB"
            onConfirm={onConfirmContactDate}
            onCancel={closeContactDate}
          />
          <TouchableOpacity
            onPress={() => setIsOpenContactDate(true)}
            className="flex-1">
            <TextInput
              value={formatInputDateFUA(tempFua.contactDate)}
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
            date={tempFua.appointmentDate ?? new Date()}
            locale="en-GB"
            onConfirm={onConfirmAppointmentDate}
            onCancel={closeAppointmentDate}
          />
          <TouchableOpacity
            onPress={() => setIsOpenAppointmentDate(true)}
            className="flex-1">
            <TextInput
              value={formatInputDateFUA(tempFua.appointmentDate)}
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
            value={tempFua.address}
            onChangeText={text =>
              setTempFua(prev => ({...prev, address: text}))
            }
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
              value={tempFua.status}
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
              statusFUA={status =>
                setTempFua(prev => ({...prev, status: status}))
              }
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
            value={tempFua.remarks}
            onChangeText={text =>
              setTempFua(prev => ({...prev, remarks: text}))
            }
            multiline={true}
            className="flex-1 text-black text-xs uppercase py-1 px-2 border border-gray-300 bg-gray-100 rounded"></TextInput>
        </View>
      </View>
    </View>
  );
});

export default MySurveyFUA;
