import {FlatList, RefreshControl, Text, View} from 'react-native';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import MIcon from 'react-native-vector-icons/MaterialIcons';

import {IncomingJobListProps} from '../../../../../props/incomingJobListProps';
import {surveyJobProps} from '../../../../../props/surveyJobProps';
import {calcAgingDate} from '../../../../../utilities/functions';
import SurveyJobItem from '../../atoms/IncomingJob/SurveyJobItem';

const IncomingJobList = ({
  data,
  search,
  refreshing,
  onRefresh,
  searchByTerm,
  navigation,
  sortBy,
  orderBy,
}: IncomingJobListProps) => {
  const [page, setPage] = useState<number>(1);
  const [loadMore, setLoadMore] = useState<boolean>(false);
  const pageSize = 10;

  type SurveyJobPropsKey = keyof surveyJobProps;

  const filterSurveyData = useMemo(() => {
    const filteredSurveyData =
      searchByTerm === ''
        ? data?.data?.filter(item =>
            Object.values(item).some(value =>
              value!.toString().toLowerCase().includes(search.toLowerCase()),
            ),
          )
        : data?.data?.filter(
            item =>
              typeof item[searchByTerm as SurveyJobPropsKey] === 'string' &&
              (item[searchByTerm as SurveyJobPropsKey] as string)
                .toLowerCase()
                .includes(search.toLowerCase()),
          );
    return filteredSurveyData;
  }, [data.data, search, searchByTerm]);

  const sortedSurveyDataByDate = useMemo(() => {
    let sortedSurveyData = [...filterSurveyData];
    if (sortBy === 'aging') {
      sortedSurveyData.sort((a, b) => {
        const agingA = calcAgingDate(a.createdAt);
        const agingB = calcAgingDate(b.createdAt);
        return orderBy === 'asc' ? agingA - agingB : agingB - agingA;
      });
    } else {
      sortedSurveyData.sort((a, b) => {
        const dateA = new Date(a.createdAt).getTime();
        const dateB = new Date(b.createdAt).getTime();
        if (sortBy === '') {
          return orderBy === 'asc' ? dateA - dateB : dateB - dateA;
        } else {
          return orderBy === 'asc' ? dateA - dateB : dateB - dateA;
        }
      });
    }
    return sortedSurveyData;
  }, [filterSurveyData, sortBy, orderBy]);

  const paginatedData = useMemo(() => {
    return sortedSurveyDataByDate.slice(0, page * pageSize);
  }, [sortedSurveyDataByDate, page]);

  // Reset page when orderBy or sortBy changes
  useEffect(() => {
    setPage(1);
  }, [sortBy, orderBy, search, searchByTerm]);

  const handleLoadMore = useCallback(() => {
    if (loadMore || paginatedData.length >= sortedSurveyDataByDate.length)
      return;
    setLoadMore(true);

    setTimeout(() => {
      setPage(prevPage => prevPage + 1);
      setLoadMore(false);
    }, 1000);
  }, [loadMore, paginatedData.length, sortedSurveyDataByDate.length]);

  const renderItem = useCallback(
    ({item, index}: {item: surveyJobProps; index: number}) => (
      <SurveyJobItem item={item} index={index} navigation={navigation} />
    ),
    [navigation],
  );

  const getKey = useCallback(
    (item: surveyJobProps, index: number) => `${item.rowid}-${index}`,
    [],
  );

  return (
    <View className="flex-1 w-full bg-[#fff] pb-11">
      {filterSurveyData.length === 0 ? (
        <View className="w-full h-full flex flex-col justify-center items-center">
          <MIcon name="do-not-disturb-alt" size={80} color="black" />
          <Text className="italic text-gray-600 capitalize text-xl">
            No Data Found
          </Text>
        </View>
      ) : (
        <FlatList
          data={paginatedData}
          renderItem={renderItem}
          keyExtractor={getKey}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
          initialNumToRender={pageSize}
          maxToRenderPerBatch={pageSize}
          windowSize={11}
          removeClippedSubviews={true}
        />
      )}
    </View>
  );
};

export default IncomingJobList;
