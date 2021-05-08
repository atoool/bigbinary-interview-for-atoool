import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AddAPost, Splash} from '../screens';
import TabNavigator from './TabNavigator';
import {Header} from '../components';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{header: props => <Header {...props} />}}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Main" component={TabNavigator} />
      <Stack.Screen name="AddAPost" component={AddAPost} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
