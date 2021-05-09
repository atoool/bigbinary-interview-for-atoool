import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors, Typography} from '../styles';

const SummaryBox = ({data}) => {
  const {title = '', mainText = '', subText = ''} = data;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.mainText}>{mainText}</Text>
      <Text style={styles.subText}>{subText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
    paddingBottom: 8,
    marginTop: 20,
  },
  title: {...Typography.bold15, color: Colors.gray},
  mainText: {...Typography.bold40, marginVertical: 8, color: Colors.dark},
  subText: {...Typography.normal12, color: Colors.gray},
});

export default SummaryBox;
