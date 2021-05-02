import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {Colors} from '../styles';

const Summary = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Summary</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.WHITE},
});

export default Summary;
