import {Button, Text, View} from 'react-native';
import React, { useState } from 'react';

import NotificationList from '../molecules/NotificationList';

type NotificationBodyProps = {
  onOpenModal: () => void;
};

const NotificationBody = ({onOpenModal}: NotificationBodyProps) => {

  return (
    <View className="z-30">
      {/* Filter */}
      <Button title="Open Filter Modal" onPress={onOpenModal}/>

      {/* List */}
      <NotificationList />
    </View>
  );
};

export default NotificationBody;
