import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {Colors} from '../styles';

const PicADays = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>PicADays</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.WHITE},
});

export default PicADays;
