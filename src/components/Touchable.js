import React from 'react';
import {TouchableOpacity} from 'react-native';

const Touchable = ({
  style = {},
  opacity = 0.3,
  children,
  onPress = () => {},
}) => {
  return (
    <TouchableOpacity style={style} activeOpacity={opacity} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

export default Touchable;
