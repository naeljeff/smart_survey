import {TextInput, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React, {useState} from 'react';

import SearchInputSearchBy from '../atoms/SearchInputSearchBy';
import SearchInputSortBy from '../atoms/SearchInputSortBy';
import SearchInputOrderBy from '../atoms/SearchInputOrderBy';

type SurveyPenutupanSearchInputProps = {
  setSearchTerm: (text: string) => void;
  setSearchByTerm: (text: string) => void;
  searchTab: string;
  setSortBy: (text: string) => void;
  setOrderBy: (text: string) => void;
};

const SurveyPenutupanSearchInput = ({
  setSearchTerm,
  searchTab,
  setSearchByTerm,
  setSortBy,
  setOrderBy,
}: SurveyPenutupanSearchInputProps) => {
  const [localSearch, setLocalSearch] = useState<string>('');
  const [searchBy, setSearchBy] = useState<boolean>(false);
  const [sortOrder, setSortOrder] = useState<string>('');
  const [selected, setSelected] = useState<string>('');
  const [localSortBy, setLocalSortBy] = useState<string>('');
  const [localOrderBy, setLocalOrderBy] = useState<string>('');

  // Handler
  const handleClearPress = () => {
    setLocalSearch('');
    setSearchBy(false);
    setSearchTerm('');
  };

  const handleInputChange = (text: string) => {
    setLocalSearch(text);
    setSearchBy(true);
    setSearchTerm(text);
  };

  // Filter (on Change)
  const onSearchByChange = (selection: string) => {
    setSelected(selection);
    setSearchByTerm(selection);
  };

  const onSortByChange = (selection: string) => {
    setLocalSortBy(selection);
    setSortBy(selection);
  };

  const onOrderByChange = (selection: string) => {
    setLocalOrderBy(selection);
    setOrderBy(selection);
  };

  return (
    <View className="w-full h-[80px] bg-[#f7ebd7] flex flex-col justify-center items-start">
      {/* Search Area */}
      <View className="w-full p-1 mt-1 ml-0.5 pr-2 flex flex-row justify-between items-center">
        {/* Search Bar */}
        <View className="w-full flex flex-row items-center justify-start my-1">
          <View className="w-full h-[30px] px-3 flex flex-row justify-start items-center border border-black rounded-lg bg-white">
            {/* Search Button */}
            <TouchableOpacity>
              <Ionicons name="search" size={18} />
            </TouchableOpacity>

            {/* Input */}
            <TextInput
              className="w-[50%] text-black mr-8 py-1 placeholder:text-sm"
              placeholder="Search"
              style={{fontSize: 12, color: 'black'}}
              value={localSearch}
              onChangeText={handleInputChange}
            />

            {/* Clear Input */}
            {localSearch.length > 0 && (
              <TouchableOpacity
                onPress={handleClearPress}
                className="absolute right-36">
                <Ionicons name="close" size={20} />
              </TouchableOpacity>
            )}

            <View className="h-[70%] flex justify-center items-center border-r border-black mx-2" />

            {/* Filter */}
            <View className="h-[50px] w-full -ml-4 mb-1">
              <SearchInputSearchBy
                onSearchByChange={onSearchByChange}
                searchTab={searchTab}
              />
            </View>
          </View>
        </View>
      </View>

      {/* Filter Area  -> Di history ini gaada*/}
      {searchTab === 'History' ? (
        <View className="w-full h-[40px] mb-1" />
      ) : (
        <View className="w-full flex flex-row justify-between items-center mb-1">
          {/* Sort By */}
          <View className="w-[55%] h-[40px] flex flex-row gap-x-1 ml-0.5">
            <View className="w-[40%] h-[30px] border border-black bg-white rounded-lg pl-2 py-1">
              {/* Sort Option */}
              <SearchInputSortBy onSortByChange={onSortByChange} />
            </View>

            <View className="w-[60%] h-[30px] text-sm border border-black bg-white rounded-lg pl-2 py-1">
              {/* Order By */}
              <SearchInputOrderBy onOrderByChange={onOrderByChange} />
            </View>
          </View>

          {/* Add and Upload (buat sekarang diilangin dulu) */}
          <View className="flex flex-row justify-center items-center gap-x-2 mb-2 mr-2"></View>
        </View>
      )}
    </View>
  );
};

export default SurveyPenutupanSearchInput;
