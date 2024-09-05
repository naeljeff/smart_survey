import {ActivityIndicator, Text, View} from 'react-native';
import React from 'react';
import {UseQueryResult} from '@tanstack/react-query';

import {surveyJobProps} from '../../../../../../props/surveyJobProps';

type surveyJobPropAsData = {
  data: surveyJobProps;
};

type GoSurveyGeneralInfoBodyProps = {
  surveyFunction: UseQueryResult<surveyJobPropAsData>;
};

const GoSurveyGeneralInfoBody = ({
  surveyFunction,
}: GoSurveyGeneralInfoBodyProps) => {
  const data = surveyFunction?.data?.data;

  if (surveyFunction?.isLoading) {
    return (
      <View className="h-screen w-screen flex flex-col justify-center items-center bg-gray-400/50">
        <ActivityIndicator size="large" color="#00bffe" />
      </View>
    );
  }

  if (surveyFunction?.isError) {
    return (
      <Text className="h-screen w-screen text-center text-lg text-red-500">
        Error loading data
      </Text>
    );
  }

  return (
    <View>
      <Text>General Info Body</Text>
      <Text>{data?.noPengajuanSurvey}</Text>
    </View>
  );
};

export default GoSurveyGeneralInfoBody;
