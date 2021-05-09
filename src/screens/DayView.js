import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import {Post} from '../components';
import {Typography} from '../styles';

const DayView = ({route, navigation}) => {
  const {item} = route?.params;

  const onPhotoView = () => {
    navigation.navigate('PhotoView', {uri: item?.uri});
  };
  return (
    <SafeAreaView style={styles.container}>
      <Post item={item} onPress={onPhotoView} />
      <Text style={styles.text}>{item?.desc}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  text: {margin: 20, ...Typography.normal15},
});

export default DayView;
