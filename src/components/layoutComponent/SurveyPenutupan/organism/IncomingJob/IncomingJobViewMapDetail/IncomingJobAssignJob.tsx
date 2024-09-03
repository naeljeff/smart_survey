import {Text, View} from 'react-native';
import React from 'react';

import Information from '../../../../../reusableComponent/StaticDisplay/Information';
import {surveyJobProps} from '../../../../../../props/surveyJobProps';
import SurveyJobDetailForMap from '../../../atoms/IncomingJob/SurveyJobDetailForMap';

type IncomingJobAssignJobProps = {
  item: surveyJobProps;
};

const IncomingJobAssignJob = ({item}: IncomingJobAssignJobProps) => {
  return (
    <View className="flex-1 bg-white">
      {/* Information */}
      <Information />

      {/* Survey Detail */}
      <SurveyJobDetailForMap item={item} />

      
    </View>
  );
};

export default IncomingJobAssignJob;
