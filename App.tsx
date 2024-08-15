import {LogBox} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

// Ignore warning from react native paper icon
LogBox.ignoreLogs([
  'Warning: TextInput.Icon: Support for defaultProps will be removed from function components in a future major release.',
]);

// Components
import LoginPage from './src/screens/LoginPage';
import HomePage from './src/screens/HomePage';

export type RootStackParamList = {
  login: undefined;
  homePage: {username: string};
};

const queryClient = new QueryClient();
const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider>
        <NavigationContainer>
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
              name="homePage"
              component={HomePage}
              options={{
                gestureEnabled: false,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </QueryClientProvider>
  );
};

export default App;
