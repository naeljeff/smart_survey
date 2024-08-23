import {Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

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

  const handleMenuChangeOnPress = (option: string, idx: number) => {
    setIndex(idx);
    onMenuChange(option);
  };

  const dataCount: string = '99+';

  return (
    <View className="w-full h-[50px] flex justify-center bg-orange-200">
      {/* Menu */}
      <View className="w-full flex flex-row justify-center gap-x-2">
        {menu.map((item, idx) => (
          <View key={idx} className="flex flex-row items-center justify-center">
            <TouchableOpacity
              onPress={() => handleMenuChangeOnPress(item, idx)}
              className={`mr-2 ${
                index === idx ? 'bg-[#585454] py-1.5 px-1 rounded' : ''
              }`}>
              <Text
                className={`relative text-sm text-black ${
                  index === idx ? 'text-white' : 'text-black'
                }`}>
                {item}
              </Text>
              {idx === 0 && (
                // <Badge
                //   size={16}
                //   className={`absolute bg-red-500 ${
                //     index === 0
                //       ? 'top-[-3px] right-[-5px]'
                //       : 'top-[-7px] right-[-8px]'
                //   }`}>
                //   {dataCount > 99 ? '99+' : dataCount}
                // </Badge>
                <Text
                  className={`absolute w-5 h-5 text-[10px] text-center pt-1 bg-red-500 text-white rounded-full ${
                    index === 0
                      ? 'top-[-8px] right-[-6px]'
                      : 'top-[-12px] right-[-7px]'
                  }`}>
                  {dataCount}
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
