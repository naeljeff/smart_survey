import {View} from 'react-native';
import React, {useState} from 'react';
import {UseQueryResult} from '@tanstack/react-query';

import GoSurveyMenuOptions from '../../molecules/GoSurvey/GoSurveyMenuOptions';
import GoSurveyGeneralInfoBody from './GeneralInfo/GoSurveyGeneralInfoBody';
import GoSurveySurveyBody from './Survey/GoSurveySurveyBody';
import GoSurveySurveyInfoBody from './SurveyInfo/GoSurveySurveyInfoBody';
import GoSurveySignatureBody from './Signature/GoSurveySignatureBody';
import {surveyJobProps} from '../../../../../props/surveyJobProps';

type surveyJobPropAsData = {
  data: surveyJobProps;
};

type GoSurveyBodyProps = {
  surveyFunction: UseQueryResult<surveyJobPropAsData>;
};

const GoSurveyBody = ({surveyFunction}: GoSurveyBodyProps) => {
  const [menuGoSurvey, setMenuGoSurvey] = useState<string>('General Info');

  const renderComponent = () => {
    switch (menuGoSurvey) {
      case 'General Info':
        return <GoSurveyGeneralInfoBody surveyFunction={surveyFunction} />;
      case 'Survey':
        return <GoSurveySurveyBody surveyFunction={surveyFunction} />;
      case 'Survey Info':
        return <GoSurveySurveyInfoBody surveyFunction={surveyFunction} />;
      case 'Signature':
        return <GoSurveySignatureBody surveyFunction={surveyFunction} />;
      default:
        return null;
    }
  };

  const handleGoSurveyMenuChangeNavigation = (menu: string) => {
    setMenuGoSurvey(menu);
  };
  return (
    <View className="flex-1 flex flex-col bg-white">
      {/* Go Survey Menu Options */}
      <GoSurveyMenuOptions onMenuChange={handleGoSurveyMenuChangeNavigation} />

      {/* Render Component */}
      {renderComponent()}
    </View>
  );
};

export default GoSurveyBody;
