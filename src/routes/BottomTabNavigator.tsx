import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Components
import HomePage from '../screens/HomePage';
import ProfilePage from '../screens/ProfilePage';
import CustomTab from '../components/reusableComponent/BottomTabs/CustomTab';

const Tab = createBottomTabNavigator();

const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={props => <CustomTab {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="homePage"
        component={HomePage}
        options={{tabBarLabel: 'Home'}}
      />
      <Tab.Screen
        name="profilePage"
        component={ProfilePage}
        options={{tabBarLabel: 'Profile'}}
      />
    </Tab.Navigator>
  );
};

export default BottomTabsNavigator;
