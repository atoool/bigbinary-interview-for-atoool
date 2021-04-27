import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {AddAPic, PicADays, Summary} from '../screens';

const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="PicADays" component={PicADays} />
      <Tab.Screen name="AddAPic" component={AddAPic} />
      <Tab.Screen name="Summary" component={Summary} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
