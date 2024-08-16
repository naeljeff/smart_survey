import {LogBox} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import React from 'react';

// Ignore warning from react native paper icon
LogBox.ignoreLogs([
  'Warning: TextInput.Icon: Support for defaultProps will be removed from function components in a future major release.',
]);

// Components
import Routes from './src/routes';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <PaperProvider>
          <Routes />
        </PaperProvider>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
};

export default App;
