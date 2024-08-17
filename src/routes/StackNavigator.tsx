import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import LoginPage from '../screens/LoginPage';
import BottomTabsNavigator from './BottomTabNavigator';
import HomeCarouselDetailPage from '../screens/HomeCarouselDetailPage';

export type RootStackParamList = {
  login: undefined;
  main: undefined;
  homeCarousel: { rowid: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="login"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="login"
        component={LoginPage}
        options={{
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name="main"
        component={BottomTabsNavigator}
        options={{
          gestureEnabled: false,
        }}
      />
      <Stack.Screen name="homeCarousel" component={HomeCarouselDetailPage} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
