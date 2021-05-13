import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-remix-icon';
import {AddAPost, DayEdit, DayView, PhotoView, Splash} from '../screens';
import TabNavigator from './TabNavigator';
import {Logo} from '../assets';
import {Colors} from '../styles';
import {Platform} from 'react-native';

const Stack = createStackNavigator();

const options = {
  headerTitle: () => <Logo />,
  headerTitleAlign: 'center',
  headerBackTitleVisible: false,
  headerStyle: {
    height: Platform.OS === 'ios' ? 90 : 60,
    borderBottomColor: Colors.border,
    borderBottomWidth: 1,
  },
  headerBackImage: () => (
    <Icon name="arrow-left-s-line" size={24} color={Colors.backButton} />
  ),
};

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={options}>
      {Platform.OS === 'android' && (
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
      )}
      <Stack.Screen name="Main" component={TabNavigator} />
      <Stack.Screen name="AddAPost" component={AddAPost} />
      <Stack.Screen name="DayEdit" component={DayEdit} />
      <Stack.Screen name="DayView" component={DayView} />
      <Stack.Screen name="PhotoView" component={PhotoView} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
