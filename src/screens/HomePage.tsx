import {View, ScrollView, ActivityIndicator, Text} from 'react-native';
import React, {useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

// Components
import { RootStackParamList } from '../routes/StackNavigator';

const HomePage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return isLoading ? (
    <View className="h-full w-full flex flex-col justify-center items-center bg-gray-500/50">
      <ActivityIndicator size="large" color="#00bffe" />
      <Text className="text-white text-lg mt-3">Loading...</Text>
    </View>
  ) : (
    <View className="h-full w-full flex flex-col bg-blue-50">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        {/* Body */}

        {/* Navigation */}
      </ScrollView>
    </View>
  );
};

export default HomePage;
