import {Text, View} from 'react-native';
import React, {useState} from 'react';

import Information from '../../../../reusableComponent/StaticDisplay/Information';
import SurveyPenutupanSearchInput from '../../molecules/SurveyPenutupanSearchInput';

const IncomingJobBody = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchByTerm, setSearchByTerm] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('');
  const [orderBy, setOrderBy] = useState<string>('');
  return (
    <View className="flex-1 flex flex-col">
      {/* Search Bar Incoming Job */}
      <SurveyPenutupanSearchInput
        setSearchTerm={setSearchTerm}
        searchTab="IncomingJob"
        setSearchByTerm={setSearchByTerm}
        setSortBy={setSortBy}
        setOrderBy={setOrderBy}
      />

      {/* Information */}
      <Information />

      {/* List Incoming Job */}
      <Text>IncomingJobBody</Text>
    </View>
  );
};

export default IncomingJobBody;
