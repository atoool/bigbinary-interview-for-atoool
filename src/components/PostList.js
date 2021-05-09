import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {Post, Touchable} from '.';

const PostList = ({data, onPress}) => {
  return (
    <FlatList
      data={data}
      style={styles.container}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item, index}) => (
        <Touchable onPress={() => onPress(item, index)}>
          <Post
            uri={item?.img}
            temperature={item?.temperature}
            date={item?.date}
            location={item?.location}
          />
        </Touchable>
      )}
    />
  );
};

const styles = StyleSheet.create({container: {flex: 1}});

export default PostList;
