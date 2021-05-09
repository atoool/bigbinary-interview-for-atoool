import React, {useContext} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import moment from 'moment';
import {Camera} from '../components';
import {AppContext} from '../contexts';
import {useWeather} from '../hooks';
import {Colors} from '../styles';

const AddAPost = ({navigation}) => {
  const {weather, onChangeWeather} = useContext(AppContext);
  useWeather(onChangeWeather);
  const onSnap = uri => {
    try {
      const item = {
        uri,
        location: weather?.name,
        temperature: weather?.temp,
        date: moment().toISOString(),
      };
      navigation.navigate('DayEdit', {item});
    } catch {}
  };
  return (
    <SafeAreaView style={styles.container}>
      <Camera onSnap={onSnap} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.WHITE},
});

export default AddAPost;
