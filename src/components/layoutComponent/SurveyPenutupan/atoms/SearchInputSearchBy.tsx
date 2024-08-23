import {Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Dropdown} from 'react-native-element-dropdown';

import {
  incomingJobSearchByList,
  historySearchByList,
  jobMonitoringSearchByList,
  mySurveySearchByList,
} from '../../../../constants/surveyPenutupanSearchByList';

type SearchInputSearchByProps = {
  onSearchByChange: (selection: string) => void;
  searchTab: string;
};

const SearchInputSearchBy = ({
  onSearchByChange,
  searchTab,
}: SearchInputSearchByProps) => {
  const [selected, setSelected] = useState('');
  const [searchByList, setSearchByList] = useState<any[]>([]);

  useEffect(() => {
    switch (searchTab) {
      case 'IncomingJob':
        setSearchByList(incomingJobSearchByList);
        break;
      case 'JobMonitoring':
        setSearchByList(jobMonitoringSearchByList);
        break;
      case 'MySurvey':
        setSearchByList(mySurveySearchByList);
        break;
      case 'History':
        setSearchByList(historySearchByList);
        break;
      default:
        setSearchByList([]);
        break;
    }
  }, [searchTab]);

  const handleSearchBy = (option: {name: string; value: string}) => {
    if (option.value === 'none') {
      setSelected(option.name);
      onSearchByChange('');
    } else {
      setSelected(option.value);
      onSearchByChange(option.value);
    }
  };
  return (
    <View className="w-[33%] mt-4 ml-3">
      <Dropdown
        data={searchByList}
        search
        activeColor="#f7ebd7"
        maxHeight={300}
        labelField="name"
        valueField="value"
        placeholder="Search By"
        searchPlaceholder="Search By"
        value={selected}
        selectedTextStyle={{fontSize: 12, color: 'black'}}
        itemTextStyle={{fontSize: 12, color: 'black'}}
        inputSearchStyle={{fontSize: 12, color: 'black'}}
        placeholderStyle={{fontSize: 12, color: 'black'}}
        style={{paddingHorizontal: 4}}
        onChange={option => handleSearchBy(option)}
      />
    </View>
  );
};

export default SearchInputSearchBy;
