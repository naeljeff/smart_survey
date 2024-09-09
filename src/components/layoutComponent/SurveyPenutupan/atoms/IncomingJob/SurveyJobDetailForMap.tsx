import {Text, View} from 'react-native';
import React from 'react';

import {surveyJobProps} from '../../../../../props/surveyJobProps';

type SurveyJobDetailForMapProps = {
  item: surveyJobProps;
};

const SurveyJobDetailForMap = ({item}: SurveyJobDetailForMapProps) => {
  return (
    <View className="flex-1 flex flex-col border-b border-black px-5 py-2 space-y-3">
      {/* No Pengajuan Survey */}
      <Text className="font-bold text-black uppercase">
        {item.noPengajuanSurvey}/{item.unitNo}
      </Text>

      <Text className="text-xs text-black uppercase">
        {item.merek} - {item.tipe} - {item.model} | {item.platNomor}
      </Text>
      <Text className="text-xs text-black uppercase">{item.noTelp}</Text>
      <Text className="flex-1 text-xs text-black uppercase">{item.alamatSurvey}</Text>
    </View>
  );
};

export default SurveyJobDetailForMap;
