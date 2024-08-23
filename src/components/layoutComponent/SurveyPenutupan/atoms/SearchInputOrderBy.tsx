import {Dropdown} from 'react-native-element-dropdown';
import React, {useState} from 'react';

type SearchInputOrderByProps = {
  onOrderByChange: (selection: string) => void;
};
const SearchInputOrderBy = ({onOrderByChange}: SearchInputOrderByProps) => {
  const [orderBy, setOrderBy] = useState<string>('');

  const orderList = [
    {name: 'Ascending', value: 'asc'},
    {name: 'Descending', value: 'dsc'},
  ];

  const handleOrderByChange = (selection: {name: string; value: string}) => {
    setOrderBy(selection.value);
    onOrderByChange(selection.value);
  };
  return (
    <Dropdown
      data={orderList}
      activeColor="#f7ebd7"
      maxHeight={200}
      labelField="name"
      valueField="value"
      placeholder="Order By"
      searchPlaceholder="Order By"
      value={orderBy}
      selectedTextStyle={{fontSize: 12, color: 'black'}}
      itemTextStyle={{fontSize: 12, color: 'black'}}
      inputSearchStyle={{fontSize: 12, color: 'black'}}
      placeholderStyle={{fontSize: 12, color: 'black'}}
      style={{paddingHorizontal: 4, paddingTop: -2}}
      onChange={selection => handleOrderByChange(selection)}
    />
  );
};

export default SearchInputOrderBy;
