import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {surveyJobProps} from '../../../../../props/surveyJobProps';
import {RootStackParamList} from '../../../../../routes/StackNavigator';
import {
  calcAgingDate,
  formatDateSurveyPenutupanJob,
} from '../../../../../utilities/functions';
import SurveyJobItemMenu from './SurveyJobItemMenu';
import {useSelectedSurvey} from '../../../../../store/storeSelectedSurvey';

type SurveyJobItemProps = {
  item: surveyJobProps;
  index: number;
  navigation: NativeStackNavigationProp<RootStackParamList, 'surveyPenutupan'>;
};

const SurveyJobItem = React.memo(
  ({item, index, navigation}: SurveyJobItemProps) => {
    const dayDiff = calcAgingDate(item.createdAt);
    const formattedDate = formatDateSurveyPenutupanJob(item.createdAt);

    const clearSelectedSurvey = useSelectedSurvey(
      state => state.clearSelectedSurvey,
    );
    const selectedSurvey = useSelectedSurvey(state => state.setSelectedSurvey);

    const handleListPress = () => {
      console.log(`Index: ${index} | Item: ${item.noPengajuanSurvey}`);
      if (item) {
        clearSelectedSurvey();
        selectedSurvey(item);
      } else selectedSurvey(item);
      navigation.navigate('surveyPenutupanFormIncomingJobFUA');
    };

    return (
      <View className="w-screen py-0.5 px-1 border-b border-black">
        <TouchableOpacity
          onPress={handleListPress}
          className="w-screen flex flex-row justify-start items-center">
          {/* Icon Mail */}
          <View className="relative flex-[0.1] flex items-center justify-center ">
            <Ionicons name="mail" size={24} color="black" />
            <Text
              className={`absolute w-3.5 h-3.5 text-[8px] text-center pt-0.5 bg-red-500 text-white rounded-full top-4 left-1`}>
              !
            </Text>
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
            <Text className="text-xs text-black uppercase">
              {item.alamatSurvey}
            </Text>
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
