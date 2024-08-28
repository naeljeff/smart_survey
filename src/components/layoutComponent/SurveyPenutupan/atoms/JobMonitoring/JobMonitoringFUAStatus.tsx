import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {Modal, Portal} from 'react-native-paper';
import React from 'react';
import JobMonitoringFUAStatusSelection from './JobMonitoringFUAStatusSelection';

type JobMonitoringFUAStatusProps = {
  openFUAStatus: (isStatusOpen: boolean) => void;
  statusFUA: (status: string) => void;
};

const JobMonitoringFUAStatus = ({
  openFUAStatus,
  statusFUA,
}: JobMonitoringFUAStatusProps) => {
  const status = ['ongoing', 'reschedule', 'schedule', 'cancel'];

  const handleSelectedStatus = (status: string) => {
    statusFUA(status);
    openFUAStatus(false);
  };
  return (
    <Portal>
      <Modal
        dismissable={false}
        visible={true}
        onDismiss={() => openFUAStatus(false)}
        contentContainerStyle={{
          backgroundColor: '#f7ebd7',
          borderRadius: 12,
          margin: 20,
        }}>
        <View className="h-[35px] bg-[#f5af46] rounded-t-xl">
          <Text className="text-black text-center font-semibold p-2">
            Please Select FUA Status
          </Text>
        </View>

        {/* Status Selection */}
        <FlatList
          data={status}
          keyExtractor={item => item}
          className="px-4 mb-24"
          renderItem={({item}) => (
            <View>
              <JobMonitoringFUAStatusSelection
                item={item}
                onSelect={handleSelectedStatus}
              />
              <View className="w-full border-b border-black/10" />
            </View>
          )}
        />
        <View className="w-full flex justify-center items-center mb-3">
          <TouchableOpacity
            onPress={() => openFUAStatus(false)}
            className="w-20 bg-slate-100 border border-black rounded-lg px-2 py-1">
            <Text className="text-center text-black">Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </Portal>
  );
};

export default JobMonitoringFUAStatus;
