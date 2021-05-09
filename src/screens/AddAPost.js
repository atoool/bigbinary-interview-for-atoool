import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Camera} from '../components';
import {Colors} from '../styles';

const AddAPost = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Camera navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.WHITE},
});

export default AddAPost;
