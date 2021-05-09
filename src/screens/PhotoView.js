import React from 'react';
import {SafeAreaView, Image, StyleSheet} from 'react-native';
import {Colors} from '../styles';

const PhotoView = ({route}) => {
  const {uri} = route?.params;
  return (
    <SafeAreaView style={styles.container}>
      <Image source={{uri}} style={styles.img} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    justifyContent: 'center',
  },
  img: {width: '100%', height: 184, marginTop: -60},
});

export default PhotoView;
