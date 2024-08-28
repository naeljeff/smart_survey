import {Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import {formatDateStatusBarSurveyPenutupan} from '../../../../utilities/functions';
import {useUserStore} from '../../../../store/storeUser';

const SurveyPenutupanStatusBar = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const {messageResponse} = useUserStore(state => ({
    messageResponse: state.messageResponse,
  }));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Date formatting
  const formattedDate = formatDateStatusBarSurveyPenutupan(currentDate);

  const timeFormatter: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
    timeZone: 'Asia/Jakarta',
  };

  const formattedTime = currentDate.toLocaleTimeString('en-US', timeFormatter);

  // User Info
  const fullName = messageResponse?.full_name || '';

  return (
    <View className="w-full h-[50px] px-2 flex flex-row justify-between items-center space-x-2 bg-[#A67B5B]">
      <Text className="text-xs text-white w-[70%]">{`Welcome, ${fullName}`}</Text>

      <Text className="text-xs text-white w-[30%]">
        Last update: {formattedDate} {formattedTime}
      </Text>
    </View>
  );
};

export default SurveyPenutupanStatusBar;
