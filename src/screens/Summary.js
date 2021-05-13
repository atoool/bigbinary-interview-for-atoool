import moment from 'moment';
import React, {useContext} from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {EmptyComponent, SummaryBox} from '../components';
import {AppContext, LocaleContext} from '../contexts';
import {Colors} from '../styles';

const Summary = () => {
  const {data} = useContext(AppContext);
  const {locale} = useContext(LocaleContext).locale;

  const recordedDays = data?.length;

  if (recordedDays === 0) {
    return <EmptyComponent />;
  }

  const formatDate = val => moment(val).format('ddd MMM DD, YYYY');

  const getProgressData = () => {
    const startedOn = data[recordedDays - 1]?.date;
    totalDays = moment().diff(moment(startedOn), 'days') + 1;
    highest = data[recordedDays - 1]?.temperature;
    lowest = highest;
    highestDay = formatDate(startedOn);
    lowestDay = formatDate(startedOn);
    data?.map(itm => {
      let temp = itm?.temperature;
      if (temp && temp > highest) {
        highest = temp;
        highestDay = formatDate(itm?.date);
      } else if (temp && temp < lowest) {
        lowest = temp;
        lowestDay = formatDate(itm?.date);
      }
    });
    return {lowest, highest, lowestDay, highestDay, totalDays};
  };

  let {lowest, highest, highestDay, lowestDay, totalDays} = getProgressData();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SummaryBox
          title={locale?.days}
          mainText={`${recordedDays}/${totalDays}`}
          subText={`You have recorded ${
            recordedDays === 1 ? recordedDays + ' day' : recordedDays + ' days'
          } since the first day`}
        />
        <SummaryBox
          title={locale?.hotDay}
          mainText={`${highest ? highest : 0}˚`}
          subText={highestDay}
        />
        <SummaryBox
          title={locale?.coldDay}
          mainText={`${lowest ? lowest : 0}˚`}
          subText={lowestDay}
        />
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

export default Summary;
