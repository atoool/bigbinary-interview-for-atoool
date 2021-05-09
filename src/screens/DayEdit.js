import React, {useContext} from 'react';
import {SafeAreaView, StyleSheet, TextInput, View} from 'react-native';
import {Post, SnapButton} from '../components';
import {AppContext} from '../contexts';
import {Colors} from '../styles';

const DayEdit = ({route, navigation}) => {
  const {uri} = route?.params;

  const {
    locale: {locale},
  } = useContext(AppContext);

  const onSubmit = () => {
    navigation.popToTop();
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Post uri={uri} />
        <SnapButton style={styles.snapButton} onPress={onSubmit} />
      </View>
      <TextInput
        placeholder={locale?.textInput}
        style={styles.input}
        multiline={true}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.WHITE},
  snapButton: {bottom: -25, elevation: 5},
  input: {marginTop: 45, marginHorizontal: 10},
});

export default DayEdit;
