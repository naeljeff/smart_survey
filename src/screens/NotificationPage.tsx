import {View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {RootStackParamList} from '../routes/StackNavigator';
import NavigationHeader from '../components/reusableComponent/Header/NavigationHeader';
import NotificationBody from '../components/layoutComponent/Notification/organism/NotificationBody';
import FilterModal from '../components/reusableComponent/Modal/FilterModal';
import {notificationFilterList} from '../services/data/notificationFilterList';

const NotificationPage = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [filterModal, setFilterModal] = useState<boolean>(false);
  const [searchFilter, setSearchFilter] = useState<string>('');
  const [selectedFilter, setSelectedFilter] = useState<string>('');

  const setModalVisibility = () => {
    setFilterModal(!filterModal);
  };

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <NavigationHeader
        title={'Notifications'}
        onPress={() => navigation.goBack()}
        onRefresh={() => {}}
      />

      {/* Body */}
      <View className="flex-1 flex flex-col bg-white z-20">
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
          }}
        >
          <NotificationBody
            onOpenModal={setModalVisibility}
            selectedFilter={selectedFilter}
          />
        </ScrollView>
      </View>

      {filterModal && (
        <FilterModal
          data={notificationFilterList}
          onClose={setModalVisibility}
          title={'category'}
          searchFilter={searchFilter}
          setSearchFilter={setSearchFilter}
          onSelectedFilter={setSelectedFilter}
          selectedFilter={selectedFilter}
        />
      )}
    </View>
  );
};

export default NotificationPage;
