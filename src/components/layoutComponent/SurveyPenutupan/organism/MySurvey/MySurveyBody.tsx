import {ActivityIndicator, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import SurveyPenutupanSearchInput from '../../molecules/SurveyPenutupanSearchInput';
import Information from '../../../../reusableComponent/StaticDisplay/Information';
import {UseGetProcessedSurveyData} from '../../../../../services/api/surveyPenutupan/getProcessedSurveyData';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../../../routes/StackNavigator';
import MySurveyList from '../../molecules/MySurvey/MySurveyList';
import {navigateToLogin} from '../../../../../utilities/navigationHelper';
import {useUserStore} from '../../../../../store/storeUser';

const MySurveyBody = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchByTerm, setSearchByTerm] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('');
  const [orderBy, setOrderBy] = useState<string>('');

  const {messageResponse} = useUserStore(state => ({
    messageResponse: state.messageResponse,
  }));

  const fullName = messageResponse?.full_name || '';

  const {data, isLoading, isError, refetch, error} =
    UseGetProcessedSurveyData(fullName);

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
      {/* Search Bar My Survey */}
      <SurveyPenutupanSearchInput
        setSearchTerm={setSearchTerm}
        searchTab="MySurvey"
        setSearchByTerm={setSearchByTerm}
        setSortBy={setSortBy}
        setOrderBy={setOrderBy}
      />

      {/* Information */}
      <Information />

      {/* List My Survey */}
      {isLoading ? (
        <View className="w-full flex-1 bg-[#f7ebd7] inset-0 justify-center items-center">
          <ActivityIndicator size="large" color="#f5af46" />
        </View>
      ) : (
        <MySurveyList
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

export default MySurveyBody;
