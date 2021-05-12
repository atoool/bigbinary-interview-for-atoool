import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import {Colors, Typography} from '../styles';

const EmptyComponent = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.emptyBox}>
        <Text style={styles.text}>No data available</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  text: {...Typography.bold15, color: Colors.lightGray},
  emptyBox: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export default EmptyComponent;
