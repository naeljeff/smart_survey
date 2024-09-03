import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Surface} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

import {surveyJobProps} from '../../../../../props/surveyJobProps';
import {RootStackParamList} from '../../../../../routes/StackNavigator';
import {
  calcAgingDate,
  formatDateSurveyPenutupanJob,
} from '../../../../../utilities/functions';

type JobMonitoringItemSubListProps = {
  item: surveyJobProps;
  index: number;
  navigation: NativeStackNavigationProp<RootStackParamList, 'surveyPenutupan'>;
};

const JobMonitoringItemSubList = ({
  item,
  index,
  navigation,
}: JobMonitoringItemSubListProps) => {
  const dayDiff = calcAgingDate(item.createdAt);
  const formattedDate = formatDateSurveyPenutupanJob(item.createdAt);

  const navigationToAssignJob =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, 'surveyPenutupanAssignJob'>
    >();

  const handleMonitoringSubListPress = () => {
    console.log(`Index: ${index} | Item: ${item.noPengajuanSurvey}`);
    navigation.navigate('surveyPenutupanFormIncomingJobFUA', {
      item: item,
    });
  };

  const handleReassignJob = () => {
    navigationToAssignJob.navigate('surveyPenutupanAssignJob', {item: item});
  };
  return (
    <TouchableOpacity
      onPress={handleMonitoringSubListPress}
      className="w-screen flex flex-row justify-start items-center">
      {/* Icon Mail */}
      <View className="flex-[0.1] flex items-center justify-center ">
        <Ionicons name="mail" size={24} color="black" />
        <Text
          className={`absolute w-3.5 h-3.5 text-[8px] text-center pt-0.5 bg-red-500 text-white rounded-full top-4 left-1`}>
          !
        </Text>
      </View>

      {/* Informasi kendaraan */}
      <View className="flex-[0.5] flex-col gap-y-1">
        <Text className="font-bold text-black uppercase">
          {item.noPengajuanSurvey}/{item.unitNo}
        </Text>
        <Text className="text-xs text-black uppercase">
          {item.merek} - {item.tipe} - {item.model} | {item.platNomor}
        </Text>
        <Text className="text-xs text-black uppercase">{item.noTelp}</Text>
        <Text className="text-xs text-black uppercase">{`${
          item.jenisAsuransi
        } + ${item.perluasan.join('; ')}`}</Text>
        <Text className="text-xs text-black uppercase">{item.alamat}</Text>
      </View>

      {/* Due Date */}
      <View className="flex-[0.2] flex-col gap-y-1 -mr-5 ml-1">
        <Text className="text-xs text-black font-semibold uppercase mb-2">
          {item.status}
        </Text>
        <Text className="text-xs text-black">{dayDiff} Days</Text>
        <Text className="text-xs text-black">{formattedDate}</Text>
      </View>

      {/* Status */}
      <View className="flex-[0.2] flex-col justify-center items-center pr-1.5">
        {/* <JobListMenu item={item} /> */}
        <Surface
          className="justify-center items-center border bg-white border-black rounded px-2 py-0.5"
          elevation={2}>
          <TouchableOpacity onPress={handleReassignJob}>
            <Text className="text-xs text-black tracking-tighter">
              Reassign
            </Text>
          </TouchableOpacity>
        </Surface>
      </View>
    </TouchableOpacity>
  );
};

export default JobMonitoringItemSubList;
