import {Text, View} from 'react-native';
import React, {useState} from 'react';

import SurveyPenutupanSearchInput from '../../molecules/SurveyPenutupanSearchInput';
import Information from '../../../../reusableComponent/StaticDisplay/Information';

const MySurveyBody = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchByTerm, setSearchByTerm] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('');
  const [orderBy, setOrderBy] = useState<string>('');

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
      <Text>My Survey</Text>
    </View>
  );
};

export default MySurveyBody;
