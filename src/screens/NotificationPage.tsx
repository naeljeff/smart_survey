import {Text, View, ScrollView} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {RootStackParamList} from '../routes/StackNavigator';
import NavigationHeader from '../components/reusableComponent/Header/NavigationHeader';
import NotificationBody from '../components/layoutComponent/Notification/organism/NotificationBody';

const NotificationPage = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <NavigationHeader
        title={'Notifications'}
        onPress={() => navigation.goBack()}
        onRefresh={() => {}}
      />

      {/* Body */}
      <View className="flex-1 flex flex-col bg-white">
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'flex-end',
            paddingTop: 100,
          }}
          // refreshControl={
          //   <RefreshControl
          //     refreshing={refreshing}
          //     onRefresh={onRefresh}
          //     colors={['#00bfff']}
          //   />
          // }
          >
            <NotificationBody />
        </ScrollView>
      </View>
    </View>
  );
};

export default NotificationPage;
