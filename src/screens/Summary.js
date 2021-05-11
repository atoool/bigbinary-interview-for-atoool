import moment from 'moment';
import React, {useContext} from 'react';
import {useEffect} from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {SummaryBox} from '../components';
import {AppContext} from '../contexts';
import {Colors} from '../styles';

const Summary = () => {
  const {data} = useContext(AppContext);
  useEffect(() => {
    const onMount = async () => {};
    onMount();
  }, []);

  const recordedDays = data.length;

  const getProgressData = () => {
    if (recordedDays !== 0) {
      const startedOn = data[recordedDays - 1]?.date;
      const totalDays = moment().diff(moment(startedOn), 'days');
      return `${recordedDays}/${totalDays}`;
    }
    return '0/0';
  };

  const getHighestTemp = () => {
    if (recordedDays !== 0) {
      highest = data[0].temperature;
      lowest = highest;
      data?.map(itm => {
        if (itm?.temperature > highest) {
          highest = itm?.temperature;
          highestDay = moment(itm.date).format('ddd MMM DD, YYYY');
        } else if (itm?.temperature < lowest) {
          lowest = itm?.temperature;
          lowestDay = moment(itm.date).format('ddd MMM DD, YYYY');
        }
      });
      return {lowest, highest, lowestDay, highestDay};
    }
  };

  let today = moment().format('ddd MMM DD, YYYY');
  let {
    lowest = 0,
    highest = 0,
    highestDay = today,
    lowestDay = today,
  } = getHighestTemp();

  const dayData = {
    title: 'Days',
    mainText: getProgressData(),
    subText: `You have recorded ${data.length} days since the first day`,
  };

  const highTempData = {
    title: 'Hottest day',
    mainText: `${highest}˚`,
    subText: highestDay,
  };

  const lowTempData = {
    title: 'Coldest day',
    mainText: `${lowest}˚`,
    subText: lowestDay,
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <SummaryBox data={dayData} />
        <SummaryBox data={highTempData} />
        <SummaryBox data={lowTempData} />
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
