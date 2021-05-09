import React, {useContext, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  LocaleContextProvider,
  AppContextProvider,
  LocaleContext,
} from './src/contexts';
import {StackNavigator} from './src/routes';
import {useNetwork, useStatusbar} from './src/hooks';
import {SnackBar} from './src/components';
import {StyleSheet} from 'react-native';

const App = () => {
  const [showSnack, setShowSnack] = useState(false);

  const {
    locale: {locale},
  } = useContext(LocaleContext);

  const onChangeNetwork = net => setShowSnack(net);

  useNetwork({onChangeNetwork});

  useStatusbar();

  return (
    <LocaleContextProvider>
      <AppContextProvider>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
        <SnackBar
          style={styles.snack}
          title={locale?.networkError}
          showSnack={showSnack}
        />
      </AppContextProvider>
    </LocaleContextProvider>
  );
};

const styles = StyleSheet.create({
  snack: {bottom: 70},
});
export default App;
