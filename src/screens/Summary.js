import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {SummaryBox} from '../components';
import {Colors} from '../styles';

const Summary = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <SummaryBox data={data[0]} />
        <SummaryBox data={data[1]} />
        <SummaryBox data={data[2]} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
});

const data = [
  {
    title: 'Days',
    mainText: '17/19',
    subText: 'You have recorded 17 days since the first day',
  },
  {
    title: 'Hottest day',
    mainText: '39˚',
    subText: 'Sun Jan 12, 2021',
  },
  {
    title: 'Coldest day',
    mainText: '21˚',
    subText: 'Mon Jan 1, 2021',
  },
];

export default Summary;
