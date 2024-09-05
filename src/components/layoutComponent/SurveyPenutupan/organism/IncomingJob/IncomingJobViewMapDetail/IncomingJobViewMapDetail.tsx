import {View} from 'react-native';
import React from 'react';

import Information from '../../../../../reusableComponent/StaticDisplay/Information';
import {surveyJobProps} from '../../../../../../props/surveyJobProps';
import SurveyJobDetailForMap from '../../../atoms/IncomingJob/SurveyJobDetailForMap';

type IncomingJobViewMapDetailProps = {
  item: surveyJobProps;
};

const IncomingJobViewMapDetail = ({item}: IncomingJobViewMapDetailProps) => {
  return (
    <View className="flex-1 bg-white">
      {/* Information */}
      <Information />

      {/* Detail About Survey */}
      <SurveyJobDetailForMap item={item}/>
    </View>
  );
};

export default IncomingJobViewMapDetail;
