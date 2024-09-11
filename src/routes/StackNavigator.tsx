import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

// Screens
import LoginPage from '../screens/LoginPage';
import BottomTabsNavigator from './BottomTabNavigator';
import HomeCarouselDetailPage from '../screens/HomeCarouselDetailPage';
import MenuAwalSurveyPenutupan from '../screens/MenuAwalSurveyPenutupan';
import MenuAwalSupervisor from '../screens/MenuAwalSupervisor';
import MenuAwalSurveyor from '../screens/MenuAwalSurveyor';
import NotificationPage from '../screens/NotificationPage';
import {surveyJobProps} from '../props/surveyJobProps';
import SurveyPenutupanIncomingJobFUA from '../screens/SurveyPenutupanIncomingJobFUA';
import SurveyPenutupanMySurveyJobFUA from '../screens/SurveyPenutupanMySurveyJobFUA';
import SurveyPenutupanGoogleMaps from '../screens/SurveyPenutupanGoogleMaps';
import SurveyPenutupanAssignJob from '../screens/SurveyPenutupanAssignJob';
import SurveyPenutupanHistoryFUA from '../screens/SurveyPenutupanHistoryFUA';
import SurveyPenutupanMySurveyGoSurvey from '../screens/SurveyPenutupanMySurveyGoSurvey';
import SurveyPenutupanGoSurveyExterior from '../screens/SurveyPenutupanGoSurveyExterior';
import SurveyPenutupanGoSurveyAdditional from '../screens/SurveyPenutupanGoSurveyAdditional';

export type RootStackParamList = {
  // Login Page
  login: undefined;

  // Home Page
  main: undefined;
  homeCarousel: {rowid: string; tag: string};
  notification: undefined;

  // Survey Penutupan
  surveyPenutupan: undefined;
  surveyPenutupanFormIncomingJobFUA: undefined;
  surveyPenutupanFormMySurveyJobFUA: undefined;
  surveyPenutupanAssignJob: {item: surveyJobProps};
  surveyPenutupanHistoryFUA: undefined;
  surveyPenutupanGoSurvey: undefined;
  surveyPenutupanGoSurveyExterior: undefined;
  surveyPenutupanGoSurveyAdditional: undefined;

  // Supervisor
  supervisor: undefined;

  // Surveyor
  surveyor: undefined;

  // Maps
  googleMaps: {
    item: surveyJobProps;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="login"
      screenOptions={{
        headerShown: false,
      }}>
      {/* Login Page */}
      <Stack.Screen
        name="login"
        component={LoginPage}
        options={{
          gestureEnabled: false,
        }}
      />

      {/* Home Page */}
      <Stack.Screen
        name="main"
        component={BottomTabsNavigator}
        options={{
          gestureEnabled: false,
        }}
      />
      <Stack.Screen name="homeCarousel" component={HomeCarouselDetailPage} />
      <Stack.Screen name="notification" component={NotificationPage} />

      {/* Survey Penutupan */}
      <Stack.Screen
        name="surveyPenutupan"
        component={MenuAwalSurveyPenutupan}
      />
      <Stack.Screen
        name="surveyPenutupanFormIncomingJobFUA"
        component={SurveyPenutupanIncomingJobFUA}
      />
      <Stack.Screen
        name="surveyPenutupanFormMySurveyJobFUA"
        component={SurveyPenutupanMySurveyJobFUA}
      />
      <Stack.Screen
        name="surveyPenutupanAssignJob"
        component={SurveyPenutupanAssignJob}
      />
      <Stack.Screen
        name="surveyPenutupanHistoryFUA"
        component={SurveyPenutupanHistoryFUA}
      />
      <Stack.Screen
        name="surveyPenutupanGoSurvey"
        component={SurveyPenutupanMySurveyGoSurvey}
      />
      <Stack.Screen
        name="surveyPenutupanGoSurveyExterior"
        component={SurveyPenutupanGoSurveyExterior}
      />
      <Stack.Screen
        name="surveyPenutupanGoSurveyAdditional"
        component={SurveyPenutupanGoSurveyAdditional}
      />

      {/* Supervisor */}
      <Stack.Screen name="supervisor" component={MenuAwalSupervisor} />

      {/* Surveyor */}
      <Stack.Screen name="surveyor" component={MenuAwalSurveyor} />

      {/* Maps */}
      <Stack.Screen name="googleMaps" component={SurveyPenutupanGoogleMaps} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
