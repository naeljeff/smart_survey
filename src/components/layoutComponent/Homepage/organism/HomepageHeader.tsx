import {Text, View} from 'react-native';
import React from 'react';

import {getTimeOfDay} from '../../../../utilities/functions';
import HeaderNotification from '../molecules/header/HomepageHeaderNotification';
import HeaderLogout from '../molecules/header/HomepageHeaderLogout';
import {useUserStore} from '../../../../store/storeUser';

const HomeHeader = () => {
  const timeOfDay = getTimeOfDay();
  const {messageResponse} = useUserStore(state => ({
    messageResponse: state.messageResponse,
  }));

  const fullName = messageResponse?.full_name || '';
  return (
    <View
      className={`w-full h-full ${
        timeOfDay === 'morning'
          ? 'bg-[#78ABA8]'
          : timeOfDay === 'afternoon'
          ? 'bg-[#A67B5B]'
          : 'bg-[#506D84]'
      } flex flex-row justify-between items-center px-5`}>
      {/* User Info */}
      <View className="h-full w-2/3 flex flex-col justify-center items-start ">
        <Text className="font-semibold text-white text-xl capitalize">
          {`Good ${timeOfDay}`}
        </Text>
        <Text className="flex-wrap underline text-white text-lg capitalize">
          {fullName}
        </Text>
      </View>

      {/* Icon */}
      <View className="h-full w-1/3 flex flex-row justify-between items-center pr-4 ml-3">
        <HeaderNotification />
        <HeaderLogout />
      </View>
    </View>
  );
};

export default HomeHeader;
