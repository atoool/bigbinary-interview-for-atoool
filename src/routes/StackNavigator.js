import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Splash} from '../screens';
import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Main" component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
