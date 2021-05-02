import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {Post} from '.';

const PostList = ({data}) => {
  return (
    <FlatList
      data={data}
      style={styles.container}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item, index}) => (
        <Post
          uri={item?.img}
          temperature={item?.temperature}
          date={item?.date}
          location={item?.location}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({container: {flex: 1}});

export default PostList;
