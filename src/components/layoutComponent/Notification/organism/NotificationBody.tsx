import {Button, Text, View} from 'react-native';
import React, { useState } from 'react';

import NotificationList from '../molecules/NotificationList';

type NotificationBodyProps = {
  selectedFilter: string;
  onOpenModal: () => void;
};

const NotificationBody = ({selectedFilter, onOpenModal}: NotificationBodyProps) => {

  return (
    <View className="z-30">
      {/* Filter */}
      <Button title="Open Filter Modal" onPress={onOpenModal}/>

      <Text>Item yang dipilih: {selectedFilter}</Text>

      {/* List */}
      <NotificationList />
    </View>
  );
};

export default NotificationBody;
