import {Text, View} from 'react-native';
import React from 'react';

import Information from '../../../../../reusableComponent/StaticDisplay/Information';
import {surveyJobProps} from '../../../../../../props/surveyJobProps';

type IncomingJobViewMapDetailProps = {
  item: surveyJobProps;
};

const IncomingJobViewMapDetail = ({item}: IncomingJobViewMapDetailProps) => {
  return (
    <View className="flex-1 bg-white">
      {/* Information */}
      <Information />

      {/* Detail About Survey */}
      <View className="flex flex-col border-b border-black p-5 space-y-3">
        {/* No Pengajuan Survey */}
        <Text className="font-bold text-black uppercase">
          {item.noPengajuanSurvey}/{item.unitNo}
        </Text>

        <Text className="text-xs text-black uppercase">
          {item.merek} - {item.tipe} - {item.model} | {item.platNomor}
        </Text>
        <Text className="text-xs text-black uppercase">{item.noTelp}</Text>
        <Text className="text-xs text-black uppercase">
          {item.alamatSurvey}
        </Text>
      </View>
    </View>
  );
};

export default IncomingJobViewMapDetail;
