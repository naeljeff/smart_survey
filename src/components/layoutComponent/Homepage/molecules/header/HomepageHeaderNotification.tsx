import Octicons from 'react-native-vector-icons/Octicons';
import {Badge} from 'react-native-paper';
import {TouchableOpacity, View} from 'react-native';
import React from 'react';

const HomepageHeaderNotification = () => {
  return (
    <>
      {/* Notification */}
      <TouchableOpacity onPress={() => console.log('press notif')}>
        <View className="flex items-center justify-center ">
          <Octicons name="bell-fill" size={32} color="white" />
          <Badge className="absolute bg-red-500 -right-1 -top-1" size={16}>
            3
          </Badge>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default HomepageHeaderNotification;
