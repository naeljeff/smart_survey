import {ActivityIndicator, Text, View} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import SurveyPenutupanSearchInput from '../../molecules/SurveyPenutupanSearchInput';
import Information from '../../../../reusableComponent/StaticDisplay/Information';
import {RootStackParamList} from '../../../../../routes/StackNavigator';
import {UseGetNewSurveyData} from '../../../../../services/api/surveyPenutupan/getNewSurveyData';

const JobMonitoringBody = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchByTerm, setSearchByTerm] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('');
  const [orderBy, setOrderBy] = useState<string>('');

  const {data, isLoading, isError, refetch} = UseGetNewSurveyData();
  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, 'surveyPenutupan'>
    >();

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
      <Text>Job Monitoring</Text>
    </View>
  );
};

export default JobMonitoringBody;
