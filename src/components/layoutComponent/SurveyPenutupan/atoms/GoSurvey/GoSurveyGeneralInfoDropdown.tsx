import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import FAwesome from 'react-native-vector-icons/FontAwesome6';

import {notificationFilterList} from '../../../../../services/data/notificationFilterList';
import GoSurveyOptionModal from '../../../../reusableComponent/Modal/GoSurveyOptionModal';
import {goSurveyDataByProperties} from '../../../../../services/data/goSurveyGeneralInfoDataList';

type GoSurveyGeneralInfoDropdownProps = {
  data: any;
  fieldName: string;
  properties: string;
  placeholder?: string;
  onChange?: (properties: string, value: string) => void;
};

const GoSurveyGeneralInfoDropdown = ({
  data,
  fieldName,
  onChange,
  placeholder,
  properties,
}: GoSurveyGeneralInfoDropdownProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const setModalVisibility = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const [searchFilter, setSearchFilter] = useState<string>('');
  const [selectedFilter, setSelectedFilter] = useState<string>('');
  const [dynamicData, setDynamicData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getDropDownData = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await goSurveyDataByProperties(properties);
        setDynamicData(data || []);
      } catch (error) {
        setError('Failed to fetch data');
        console.error(`Error fetching data for ${properties}: `, error);
      } finally {
        setLoading(false);
      }
    };

    if (isDropdownOpen) getDropDownData();
  }, [properties, isDropdownOpen]);

  const handleSelectedFilter = (value: string) => {
    onChange?.(properties, value);
    setSelectedFilter(value);
    setIsDropdownOpen(false);
  };

  return (
    <View className="w-full flex flex-row items-center justify-between space-x-2 mt-2">
      <View className="w-[30%] flex flex-row justify-between items-center">
        <Text className="text-black capitalize">{fieldName}</Text>
        <Text className="text-black capitalize">:</Text>
      </View>

      <TouchableOpacity
        onPress={() => setIsDropdownOpen(true)}
        className="relative flex-1 flex-row items-center border border-gray-300 bg-gray-100 rounded pr-3">
        <TextInput
          value={data}
          placeholder={placeholder}
          editable={false}
          className="flex-1 text-black text-xs uppercase py-1 px-2"
        />
        <FAwesome
          name={isDropdownOpen ? 'chevron-up' : 'chevron-down'}
          size={16}
          color="black"
        />
      </TouchableOpacity>

      {isDropdownOpen && (
        <GoSurveyOptionModal
          visible={isDropdownOpen}
          data={dynamicData}
          onClose={setModalVisibility}
          title={fieldName}
          searchFilter={searchFilter}
          setSearchFilter={setSearchFilter}
          onSelectedFilter={handleSelectedFilter}
          selectedFilter={data}
        />
      )}
    </View>
  );
};

export default GoSurveyGeneralInfoDropdown;
