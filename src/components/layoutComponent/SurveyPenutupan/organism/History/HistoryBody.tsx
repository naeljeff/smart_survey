import {Text, View} from 'react-native';
import React, {useState} from 'react';

import SurveyPenutupanSearchInput from '../../molecules/SurveyPenutupanSearchInput';
import Information from '../../../../reusableComponent/StaticDisplay/Information';

const HistoryBody = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchByTerm, setSearchByTerm] = useState<string>('');

  return (
     <View className="flex-1 flex flex-col">
      {/* Search Bar History */}
      <SurveyPenutupanSearchInput
        setSearchTerm={setSearchTerm}
        searchTab="History"
        setSearchByTerm={setSearchByTerm}
        setSortBy={() => {}}
        setOrderBy={() => {}}
      />

      {/* Information */}
      <Information />

      {/* List History */}
      <Text>Historyy</Text>
    </View>
  )
}

export default HistoryBody