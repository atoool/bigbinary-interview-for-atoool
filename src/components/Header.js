import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Logo} from '../assets';
import {Colors} from '../styles';

const Header = () => {
  return (
    <View style={styles.container}>
      <Logo />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 10,
    backgroundColor: Colors.WHITE,
    elevation: 5,
  },
  image: {height: 23},
});

export default Header;
