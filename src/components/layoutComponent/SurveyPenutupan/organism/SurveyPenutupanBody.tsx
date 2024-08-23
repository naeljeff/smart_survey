import {View} from 'react-native';
import React, { useState } from 'react';

import IncomingJobBody from './IncomingJob/IncomingJobBody';
import JobMonitoringBody from './JobMonitoring/JobMonitoringBody';
import MySurveyBody from './MySurvey/MySurveyBody';
import HistoryBody from './History/HistoryBody';
import SurveyPenutupanStatusBar from './SurveyPenutupanStatusBar';
import SurveyPenutupanNavbar from './SurveyPenutupanNavbar';

const SurveyPenutupanBody = () => {
  const [menuOptions, setMenuOptions] = useState<string>('Incoming Job');

  const renderComponent = () => {
    switch (menuOptions) {
      case 'Incoming Job':
        return <IncomingJobBody />;
      case 'Job Monitoring':
        return <JobMonitoringBody />;
      case 'My Survey':
        return <MySurveyBody />;
      case 'History':
        return <HistoryBody />;
      default:
        return null;
    }
  };

  const handleMenuChangeNavigation = (option: string) => {
    setMenuOptions(option);
  };

  return (
    <View className="w-full h-full flex flex-col bg-pink-200">
      {/* Status Bar */}
      <SurveyPenutupanStatusBar />

      {/* Menu Navbar */}
      <SurveyPenutupanNavbar onMenuChange={handleMenuChangeNavigation}/>

      {/* Render Component */}
      {renderComponent()}
    </View>
  );
};

export default SurveyPenutupanBody;
