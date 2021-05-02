import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AddAPic, PicADays, Summary} from '../screens';
import {BottomBar} from '../components';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomBar {...props} />}>
      <Tab.Screen name="PickADays" component={PicADays} />
      <Tab.Screen name="AddAPic" component={AddAPic} />
      <Tab.Screen name="Summary" component={Summary} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
