import {View, ScrollView, ActivityIndicator, Text} from 'react-native';
import React, {useState} from 'react';
import {Surface} from 'react-native-paper';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

// Components
import {RootStackParamList} from '../routes/StackNavigator';
import HomeHeader from '../components/layoutComponent/Homepage/organism/HomepageHeader';
import HomeBody from '../components/layoutComponent/Homepage/organism/HomepageBody';

const HomePage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return isLoading ? (
    <View className="h-full w-full flex flex-col justify-center items-center bg-gray-500/50">
      <ActivityIndicator size="large" color="#00bffe" />
      <Text className="text-white text-lg mt-3">Loading...</Text>
    </View>
  ) : (
    <ScrollView
      showsVerticalScrollIndicator={false}
      className="h-full w-full flex flex-col bg-[#87ceeb]">
      {/* Header */}
      <View className="flex-1">
        {/* Header */}
        <View className="h-24">
          <HomeHeader />
        </View>

        {/* Body */}
        <Surface elevation={4} className="rounded-t-2xl">
          <View className="flex-1 flex flex-col justify-center items-center">
            <HomeBody />
          </View>
        </Surface>
      </View>
    </ScrollView>
  );
};

export default HomePage;
