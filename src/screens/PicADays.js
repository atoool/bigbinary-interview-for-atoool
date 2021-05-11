import React, {useContext} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {PostList} from '../components';
import {AppContext} from '../contexts';
import {Colors} from '../styles';
import {onCheckDate} from '../utils';

const PicADays = ({navigation}) => {
  const {data} = useContext(AppContext);
  const onPostClick = (item, i) => {
    const isSameDate = onCheckDate(item, data);
    isSameDate
      ? navigation.navigate('DayEdit', {item})
      : navigation.navigate('DayView', {item});
  };

  return (
    <SafeAreaView style={styles.container}>
      <PostList data={data} onPress={onPostClick} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.WHITE},
});

export default PicADays;
