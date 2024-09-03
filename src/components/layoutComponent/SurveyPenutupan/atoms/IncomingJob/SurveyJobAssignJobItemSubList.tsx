import {Text, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {surveyJobProps} from '../../../../../props/surveyJobProps';
import {
  calcAgingDate,
  formatDateSurveyPenutupanJob,
} from '../../../../../utilities/functions';

type SurveyJobAssignJobItemSubListProps = {
  item: surveyJobProps;
  index: number;
};

const SurveyJobAssignJobItemSubList = ({
  item,
  index,
}: SurveyJobAssignJobItemSubListProps) => {
  const dayDiff = calcAgingDate(item.createdAt);
  const formattedDate = formatDateSurveyPenutupanJob(item.createdAt);

  return (
    <View className="w-screen flex flex-row justify-start items-center">
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
    </View>
  );
};

export default SurveyJobAssignJobItemSubList;
