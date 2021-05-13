import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {LocaleContextProvider, AppContextProvider} from './src/contexts';
import {StackNavigator} from './src/routes';
import {useStatusbar} from './src/hooks';

const App = () => {
  useStatusbar();

  return (
    <LocaleContextProvider>
      <AppContextProvider>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </AppContextProvider>
    </LocaleContextProvider>
  );
};

export default App;
