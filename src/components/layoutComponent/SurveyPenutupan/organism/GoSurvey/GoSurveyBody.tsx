import {View} from 'react-native';
import React, {useState} from 'react';

import GoSurveyMenuOptions from '../../molecules/GoSurvey/GoSurveyMenuOptions';
import GoSurveyGeneralInfoBody from './GeneralInfo/GoSurveyGeneralInfoBody';
import GoSurveySurveyBody from './Survey/GoSurveySurveyBody';
import GoSurveySurveyInfoBody from './SurveyInfo/GoSurveySurveyInfoBody';
import GoSurveySignatureBody from './Signature/GoSurveySignatureBody';

const GoSurveyBody = () => {
  const [menuGoSurvey, setMenuGoSurvey] = useState<string>('General Info');

  const renderComponent = () => {
    switch (menuGoSurvey) {
      case 'General Info':
        return <GoSurveyGeneralInfoBody />;
      case 'Survey':
        return <GoSurveySurveyBody />;
      case 'Survey Info':
        return <GoSurveySurveyInfoBody />;
      case 'Signature':
        return <GoSurveySignatureBody />;
      default:
        return null;
    }
  };

  const handleGoSurveyMenuChangeNavigation = (menu: string) => {
    setMenuGoSurvey(menu);
  };
  return (
    <View className="w-full h-full flex flex-col bg-white">
      {/* Go Survey Menu Options */}
      <GoSurveyMenuOptions onMenuChange={handleGoSurveyMenuChangeNavigation} />

      {/* Render Component */}
      {renderComponent()}
    </View>
  );
};

export default GoSurveyBody;
