import React from 'react';
import {StatusBar} from 'react-native';
import {Colors} from '../styles';

const useStatusbar = () => {
  React.useEffect(() => {
    StatusBar.setBackgroundColor(Colors.WHITE);
  }, []);
};

export default useStatusbar;
