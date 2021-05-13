import React from 'react';
import {Platform, StatusBar} from 'react-native';
import {Colors} from '../styles';

const useStatusbar = () => {
  React.useEffect(() => {
    Platform.OS === 'android' && StatusBar.setBackgroundColor(Colors.WHITE);
  }, []);
};

export default useStatusbar;
