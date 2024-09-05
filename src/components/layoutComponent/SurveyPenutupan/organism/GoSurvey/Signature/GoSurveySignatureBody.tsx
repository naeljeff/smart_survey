import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {UseQueryResult} from '@tanstack/react-query';

import {surveyJobProps} from '../../../../../../props/surveyJobProps';

type surveyJobPropAsData = {
  data: surveyJobProps;
}

type GoSurveySignatureBodyProps = {
  surveyFunction: UseQueryResult<surveyJobPropAsData>;
};

const GoSurveySignatureBody = ({surveyFunction}: GoSurveySignatureBodyProps) => {
  return (
    <View>
      <Text>GoSurveySignatureBody</Text>
    </View>
  );
};

export default GoSurveySignatureBody;
