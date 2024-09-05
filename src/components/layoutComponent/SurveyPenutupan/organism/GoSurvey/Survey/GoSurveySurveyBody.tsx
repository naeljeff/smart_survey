import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {UseQueryResult} from '@tanstack/react-query';

import {surveyJobProps} from '../../../../../../props/surveyJobProps';
type surveyJobPropAsData = {
  data: surveyJobProps;
}

type GoSurveySurveyBodyProps = {
  surveyFunction: UseQueryResult<surveyJobPropAsData>;
};

const GoSurveySurveyBody = ({surveyFunction}: GoSurveySurveyBodyProps) => {
  return (
    <View>
      <Text>GoSurveySurveyBody</Text>
    </View>
  );
};

export default GoSurveySurveyBody;
