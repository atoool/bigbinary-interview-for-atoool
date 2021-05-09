import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Camera} from '../components';
import {Colors} from '../styles';

const AddAPost = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Camera />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.WHITE},
});

export default AddAPost;
