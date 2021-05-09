import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {PostList} from '../components';
import {Colors} from '../styles';

const PicADays = ({navigation}) => {
  const onPostClick = (item, i) => {
    navigation.navigate('DayView', {item});
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

const dt = Date.now();
const data = [
  {
    uri:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
    location: 'Kochi, India',
    temperature: 24,
    date: dt,
    desc: 'Another awesome morning, I can’t live a day without coffee',
  },
  {
    uri:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
    location: 'Kochi, India',
    temperature: 24,
    date: dt,
    desc: 'Another awesome morning, I can’t live a day without coffee',
  },
  {
    uri:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
    location: 'Kochi, India',
    temperature: 24,
    date: dt,
    desc: 'Another awesome morning, I can’t live a day without coffee',
  },
  {
    uri:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
    location: 'Kochi, India',
    temperature: 24,
    date: dt,
    desc: 'Another awesome morning, I can’t live a day without coffee',
  },
  {
    uri:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
    location: 'Kochi, India',
    temperature: 24,
    date: dt,
    desc: 'Another awesome morning, I can’t live a day without coffee',
  },
  {
    uri:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
    location: 'Kochi, India',
    temperature: 24,
    date: dt,
    desc: 'Another awesome morning, I can’t live a day without coffee',
  },
];

export default PicADays;
