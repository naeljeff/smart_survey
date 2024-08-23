import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {surveyJobProps} from '../../../../../props/surveyJobProps';
import {RootStackParamList} from '../../../../../routes/StackNavigator';
import {
  calcAgingDate,
  formatDateSurveyPenutupanIncomingJob,
} from '../../../../../utilities/functions';
import SurveyJobItemMenu from './SurveyJobItemMenu';

type SurveyJobItemProps = {
  item: surveyJobProps;
  index: number;
  navigation: NativeStackNavigationProp<RootStackParamList, 'surveyPenutupan'>;
};

const SurveyJobItem = React.memo(
  ({item, index, navigation}: SurveyJobItemProps) => {
    const dayDiff = calcAgingDate(item.createdAt);
    const formattedDate = formatDateSurveyPenutupanIncomingJob(item.createdAt);

    const handleListPress = () => {
      console.log(`Index: ${index} | Item: ${item.noPengajuanSurvey}`);
      navigation.navigate('surveyPenutupanFormIncomingJobFUA', {
        item: item,
      });
    };

    return (
      <View className="w-screen py-0.5 px-1 border-b border-black">
        <TouchableOpacity
          onPress={handleListPress}
          className="w-screen flex flex-row justify-start items-center">
          {/* Icon Mail */}
          <View className="flex-[0.1] flex items-center justify-center ">
            <Ionicons name="mail" size={24} color="black" />
            {/* <Badge className="absolute bg-red-500 left-1 top-3.5" size={16}>
              !
            </Badge> */}
          </View>

          {/* Informasi kendaraan */}
          <View className="flex-[0.6] flex-col gap-y-1">
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
          <View className="flex-[0.2] flex-col gap-y-1">
            <Text className="text-xs text-black">{dayDiff} Days</Text>
            <Text className="text-xs text-black">{formattedDate}</Text>
          </View>

          {/* Status */}
          <View className="flex-[0.1] flex-col justify-center items-center pr-1.5">
            <Text className="text-xs text-black uppercase mb-2">
              {item.status}
            </Text>
            <SurveyJobItemMenu item={item} />
          </View>
        </TouchableOpacity>
      </View>
    );
  },
);

export default SurveyJobItem;
