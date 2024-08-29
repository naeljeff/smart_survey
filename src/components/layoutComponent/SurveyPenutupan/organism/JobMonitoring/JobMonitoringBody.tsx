import {ActivityIndicator, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import SurveyPenutupanSearchInput from '../../molecules/SurveyPenutupanSearchInput';
import Information from '../../../../reusableComponent/StaticDisplay/Information';
import {RootStackParamList} from '../../../../../routes/StackNavigator';
import {UseGetNewSurveyData} from '../../../../../services/api/surveyPenutupan/getNewSurveyData';
import JobMonitoringUserList from '../../molecules/JobMonitoring/JobMonitoringUserList';
import {navigateToLogin} from '../../../../../utilities/navigationHelper';

const JobMonitoringBody = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchByTerm, setSearchByTerm] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('');
  const [orderBy, setOrderBy] = useState<string>('');

  const {data, isLoading, isError, refetch, error} = UseGetNewSurveyData();
  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, 'surveyPenutupan'>
    >();

  useEffect(() => {
    if (error) {
      if ('isSessionError' in error && error.isSessionError) {
        navigateToLogin(navigation);
      }
    }
  }, [error, navigation, refetch]);

  if (isLoading) {
    return (
      <View className="h-screen w-screen flex flex-col justify-center items-center bg-gray-400/50">
        <ActivityIndicator size="large" color="#00bffe" />
      </View>
    );
  }

  if (isError) {
    return (
      <Text className="h-screen w-screen text-center text-lg text-red-500">
        Error loading data
      </Text>
    );
  }

  return (
    <View className="flex-1 flex flex-col">
      {/* Search Bar Job Monitoring */}
      <SurveyPenutupanSearchInput
        setSearchTerm={setSearchTerm}
        searchTab="JobMonitoring"
        setSearchByTerm={setSearchByTerm}
        setSortBy={setSortBy}
        setOrderBy={setOrderBy}
      />

      {/* Information */}
      <Information />

      {/* List Incoming Job */}
      {isLoading ? (
        <View className="w-full flex-1 bg-[#f7ebd7] inset-0 justify-center items-center">
          <ActivityIndicator size="large" color="#f5af46" />
        </View>
      ) : (
        <JobMonitoringUserList
          data={data}
          search={searchTerm}
          searchByTerm={searchByTerm}
          sortBy={sortBy}
          orderBy={orderBy}
          refreshing={isLoading}
          onRefresh={refetch}
          navigation={navigation}
        />
      )}
    </View>
  );
};

export default JobMonitoringBody;
