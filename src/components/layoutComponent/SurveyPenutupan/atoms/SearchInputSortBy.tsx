import {Dropdown} from 'react-native-element-dropdown';
import React, {useState} from 'react';

import {surveyPenutupanSortByList} from '../../../../constants/surveyPenutupanSortByList';

type SearchInputSortByProps = {
  onSortByChange: (selection: string) => void;
};

const SearchInputSortBy = ({onSortByChange}: SearchInputSortByProps) => {
  const [sortBy, setSortBy] = useState<string>('');

  const handleSortByChange = (selection: {name: string; value: string}) => {
    if (selection.value === 'none') {
      setSortBy(selection.name);
      onSortByChange('');
    } else {
      setSortBy(selection.value);
      onSortByChange(selection.value);
    }
  };

  return (
    <Dropdown
      data={surveyPenutupanSortByList}
      activeColor="#f7ebd7"
      maxHeight={300}
      labelField="name"
      valueField="value"
      placeholder="Sort By"
      searchPlaceholder="Sort By"
      value={sortBy}
      selectedTextStyle={{fontSize: 12, color: 'black'}}
      itemTextStyle={{fontSize: 12, color: 'black'}}
      inputSearchStyle={{fontSize: 12, color: 'black'}}
      placeholderStyle={{fontSize: 12, color: 'black'}}
      style={{paddingHorizontal: 4}}
      onChange={selection => handleSortByChange(selection)}
    />
  );
};

export default SearchInputSortBy;
