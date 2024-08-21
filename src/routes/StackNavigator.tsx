import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import LoginPage from '../screens/LoginPage';
import BottomTabsNavigator from './BottomTabNavigator';
import HomeCarouselDetailPage from '../screens/HomeCarouselDetailPage';
import MenuAwalSurveyPenutupan from '../screens/MenuAwalSurveyPenutupan';
import MenuAwalSupervisor from '../screens/MenuAwalSupervisor';
import MenuAwalSurveyor from '../screens/MenuAwalSurveyor';
import NotificationPage from '../screens/NotificationPage';

export type RootStackParamList = {
  login: undefined;
  main: undefined;
  homeCarousel: { rowid: string, tag: string };
  surveyPenutupan: undefined;
  supervisor: undefined;
  surveyor: undefined;
  notification: undefined;
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
      <Stack.Screen name="surveyPenutupan" component={MenuAwalSurveyPenutupan} />
      <Stack.Screen name="supervisor" component={MenuAwalSupervisor} />
      <Stack.Screen name="surveyor" component={MenuAwalSurveyor} />
      <Stack.Screen name="notification" component={NotificationPage} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
