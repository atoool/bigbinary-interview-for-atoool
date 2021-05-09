import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import {Post} from '../components';
import {Typography} from '../styles';

const DayView = ({route}) => {
  const {item} = route?.params;
  return (
    <SafeAreaView style={styles.container}>
      <Post
        uri={item?.img}
        temperature={item?.temperature}
        date={item?.date}
        location={item?.location}
      />
      <Text style={styles.text}>{item?.desc}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  text: {margin: 20, ...Typography.normal15},
});

export default DayView;
