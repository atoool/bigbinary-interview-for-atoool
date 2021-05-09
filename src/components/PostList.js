import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {Post} from '.';

const PostList = ({data, onPress}) => {
  return (
    <FlatList
      data={data}
      style={styles.container}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => <Post item={item} onPress={onPress} />}
    />
  );
};

const styles = StyleSheet.create({container: {flex: 1}});

export default PostList;
