import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { UseQueryResult } from '@tanstack/react-query';

import { surveyJobProps } from '../../../../../../props/surveyJobProps'

type surveyJobPropAsData = {
  data: surveyJobProps;
}

type GoSurveyInfoBodyProps = {
  surveyFunction: UseQueryResult<surveyJobPropAsData>;
}

const GoSurveySurveyInfoBody = ({surveyFunction}: GoSurveyInfoBodyProps) => {
  return (
    <View>
      <Text>GoSurveySurveyInfoBody</Text>
    </View>
  )
}

export default GoSurveySurveyInfoBody