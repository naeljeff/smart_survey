import {FlatList, Text, View} from 'react-native';
import React, { useCallback } from 'react';
import MIcon from 'react-native-vector-icons/MaterialIcons';

import {JobMonitoringListProps, JobMonitoringProps} from '../../../../../props/jobMonitoringListProps';
import JobMonitoringItem from '../../atoms/JobMonitoring/JobMonitoringItem';

const JobMonitoringUserList = ({
  data,
  search,
  refreshing,
  onRefresh,
  searchByTerm,
  navigation,
  sortBy,
  orderBy,
}: JobMonitoringProps) => {

  const tempData: JobMonitoringListProps[] = [
    {
      id: 1,
      nama: 'Isti marlisah',
      jumlahTask: 3,
    },
    {
      id: 2,
      nama: 'John Doe',
      jumlahTask: 13,
    },
    {
      id: 3,
      nama: 'John Smith',
      jumlahTask: 23,
    },
    {
      id: 4,
      nama: 'Aaron Smith',
      jumlahTask: 33,
    },
    {
      id: 5,
      nama: 'Bob Curtney',
      jumlahTask: 43,
    },
    {
      id: 6,
      nama: 'Isti marlisah',
      jumlahTask: 3,
    },
    {
      id: 7,
      nama: 'John Doe',
      jumlahTask: 13,
    },
    {
      id: 8,
      nama: 'John Smith',
      jumlahTask: 23,
    },
    {
      id: 9,
      nama: 'Aaron Smith',
      jumlahTask: 33,
    },
    {
      id: 10,
      nama: 'Bob Curtney',
      jumlahTask: 43,
    },
    {
      id: 11,
      nama: 'Isti marlisah',
      jumlahTask: 3,
    },
    {
      id: 12,
      nama: 'John Doe',
      jumlahTask: 13,
    },
    {
      id: 13,
      nama: 'John Smith',
      jumlahTask: 23,
    },
    {
      id: 14,
      nama: 'Aaron Smith',
      jumlahTask: 33,
    },
    {
      id: 15,
      nama: 'Bob Curtney',
      jumlahTask: 43,
    },
  ];

  const renderItem = useCallback(
    ({item, index}: {item: JobMonitoringListProps; index: number}) => (
      <JobMonitoringItem item={item} index={index} navigation={navigation}/>
    ),
    [navigation],
  );

  const getKey = useCallback((item: JobMonitoringListProps) => item.id.toString(), []);

  return (
    <View className="flex-1 w-full bg-[#fff]">
      {tempData.length === 0 ? (
        <View className="w-full h-full flex flex-col justify-center items-center">
          <MIcon name="do-not-disturb-alt" size={80} color="black" />
          <Text className="italic text-gray-600 capitalize text-xl">
            No Data Found
          </Text>
        </View>
      ) : (
        <FlatList
          data={tempData}
          keyExtractor={getKey}
          renderItem={renderItem}
          //   data={paginatedData}
          //   renderItem={renderItem}
          //   keyExtractor={getKey}
          //   refreshControl={
          //     <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          //   }
          //   onEndReached={handleLoadMore}
          //   onEndReachedThreshold={0.5}
          //   initialNumToRender={pageSize}
          //   maxToRenderPerBatch={pageSize}
          //   windowSize={11}
          //   removeClippedSubviews={true}
        />
      )}
    </View>
  );
};

export default JobMonitoringUserList;
