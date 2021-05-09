import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-remix-icon';
import {AddAPost, DayEdit, Splash} from '../screens';
import TabNavigator from './TabNavigator';
import {Logo} from '../assets';
import {Colors} from '../styles';

const Stack = createStackNavigator();

const options = {
  headerTitle: () => <Logo />,
  headerTitleAlign: 'center',
  headerBackImage: () => (
    <Icon name="arrow-left-s-line" size={24} color={Colors.backButton} />
  ),
};

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={options}>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Main" component={TabNavigator} />
      <Stack.Screen name="AddAPost" component={AddAPost} />
      <Stack.Screen name="DayEdit" component={DayEdit} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
