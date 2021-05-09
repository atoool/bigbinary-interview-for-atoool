import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Colors} from '../styles';

const DayEdit = () => {
  return <SafeAreaView style={styles.container}></SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.BLACK},
});

export default DayEdit;