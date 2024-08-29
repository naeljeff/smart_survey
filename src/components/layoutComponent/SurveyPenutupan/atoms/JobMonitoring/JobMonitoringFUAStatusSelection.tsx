import {Text, TouchableOpacity} from 'react-native';
import React from 'react';

type JobMonitoringFUAItemStatusProps = {
  item: string;
  onSelect: (status: string) => void;
};

const JobMonitoringFUAStatusSelection = ({
  item,
  onSelect,
}: JobMonitoringFUAItemStatusProps) => {
  return (
    <TouchableOpacity onPress={() => onSelect(item)} className="py-2.5">
      <Text className="uppercase text-black pl-1">{item}</Text>
    </TouchableOpacity>
  );
};

export default JobMonitoringFUAStatusSelection;
