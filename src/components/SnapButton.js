import React from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-remix-icon';
import {Touchable} from '.';
import {Colors} from '../styles';

const SnapButton = ({onPress = () => {}, style}) => {
  return (
    <Touchable onPress={onPress} style={[styles.capture, style]}>
      <Icon name="camera-lens-line" color={Colors.lightGreen} size={30} />
    </Touchable>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  capture: {
    backgroundColor: '#fff',
    borderRadius: 56,
    width: 56,
    height: 56,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 40,
  },
});

export default SnapButton;
