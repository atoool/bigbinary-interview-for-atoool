/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Logo} from '../assets';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Main');
    }, 3000);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Logo />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    flex: 1,
  },
  logoImage: {
    width: 250,
    height: 250,
  },
});

export default Splash;
