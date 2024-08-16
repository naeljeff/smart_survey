import {Text, View} from 'react-native';
import React from 'react';
import HeaderNotification from '../molecules/header/HomepageHeaderNotification';
import HeaderLogout from '../molecules/header/HomepageHeaderLogout';

const HomeHeader = () => {
  return (
    <View className="w-full h-full bg-[#87ceeb] flex flex-row justify-between items-center px-5">
      {/* User Info */}
      <View className='h-full w-2/3 flex flex-col justify-center items-start '>
        <Text className='font-semibold text-white text-xl'>
            Good Afternoon
        </Text>
        <Text className='underline text-white text-lg'>
            Regie Samuel
        </Text>
      </View>

      {/* Icon */}
      <View className='h-full w-1/3 flex flex-row justify-between items-center pr-4'>
        <HeaderNotification />
        <HeaderLogout />
      </View>
    </View>
  );
};

export default HomeHeader;
