import {Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

import {UseGetNewSurveyData} from '../../../../services/api/surveyPenutupan/getNewSurveyData';
import { useUserStore } from '../../../../store/storeUser';

type SurveyPenutupanNavbarProps = {
  onMenuChange: (option: string) => void;
};

const SurveyPenutupanNavbar = ({onMenuChange}: SurveyPenutupanNavbarProps) => {
  const menu: string[] = [
    'Incoming Job',
    'Job Monitoring',
    'My Survey',
    'History',
  ];
  const [index, setIndex] = useState<number>(0);
  const {messageResponse} = useUserStore(state => ({
    messageResponse: state.messageResponse,
  }));

  const fullName = messageResponse?.full_name || '';
  const {data} = UseGetNewSurveyData(fullName);

  const handleMenuChangeOnPress = (option: string, idx: number) => {
    setIndex(idx);
    onMenuChange(option);
  };

  const dataCount: number = data?.data?.length || 0;

  return (
    <View className="w-full h-[50px] flex justify-center bg-[#FFD875]/60">
      {/* Menu */}
      <View className="w-full flex flex-row justify-center gap-x-2">
        {menu.map((item, idx) => (
          <View key={idx} className="flex flex-row items-center justify-center">
            <TouchableOpacity
              onPress={() => handleMenuChangeOnPress(item, idx)}
              className={`mr-2 ${
                index === idx ? 'bg-[#A67B5B]/80 py-1.5 px-1 rounded' : ''
              }`}>
              <Text
                className={`relative text-sm text-black ${
                  index === idx ? 'text-white' : 'text-black'
                }`}>
                {item}
              </Text>
              {idx === 0 && (
                <Text
                  className={`absolute w-5 h-5 text-[10px] text-center pt-1 bg-red-500 text-white rounded-full ${
                    index === 0
                      ? 'top-[-8px] right-[-6px]'
                      : 'top-[-12px] right-[-7px]'
                  }`}>
                  {dataCount > 99 ? '99+' : dataCount}
                </Text>
              )}
            </TouchableOpacity>
            {idx === menu.length - 1 ? (
              ''
            ) : (
              <View className="h-full flex justify-center items-center border-r border-black" />
            )}
          </View>
        ))}
      </View>
    </View>
  );
};

export default SurveyPenutupanNavbar;
