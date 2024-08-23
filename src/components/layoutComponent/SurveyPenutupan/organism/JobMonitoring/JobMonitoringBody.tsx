import {Text, View} from 'react-native';
import React, {useState} from 'react';

import SurveyPenutupanSearchInput from '../../molecules/SurveyPenutupanSearchInput';
import Information from '../../../../reusableComponent/StaticDisplay/Information';

const JobMonitoringBody = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchByTerm, setSearchByTerm] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('');
  const [orderBy, setOrderBy] = useState<string>('');

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
  )
}

export default JobMonitoringBody