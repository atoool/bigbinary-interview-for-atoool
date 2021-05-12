/* eslint-disable react-hooks/exhaustive-deps */
import {CommonActions} from '@react-navigation/native';
import React, {useContext, useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, TextInput, View} from 'react-native';
import {Post, SnapButton} from '../components';
import {AppContext, LocaleContext} from '../contexts';
import useBackHandler from '../hooks/useBackHandler';
import {Colors, Typography} from '../styles';

const DayEdit = ({route, navigation}) => {
  const {item} = route?.params;
  const [text, setText] = useState(item?.desc ? item?.desc : '');

  const {
    locale: {locale},
  } = useContext(LocaleContext);

  const onPhotoView = itm => {
    navigation.navigate('PhotoView', {uri: itm?.uri});
  };

  const {onChangeData} = useContext(AppContext);

  const onChangeText = txt => setText(txt);

  const onSnapPress = () => navigation.navigate('AddAPost');

  const onSubmit = () => {
    try {
      const itm = {...item, desc: text};
      onChangeData(itm);
    } catch {}
  };

  useBackHandler(navigation, onSubmit);

  const resetNavigation = () => {
    navigation.dispatch(state => {
      // Remove the home route from the stack
      const routes = state.routes.filter(r => r.name !== 'AddAPost');

      return CommonActions.reset({
        ...state,
        routes,
        index: routes.length - 1,
      });
    });
  };

  useEffect(() => {
    resetNavigation();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Post item={item} onPress={onPhotoView} />
        <SnapButton style={styles.snapButton} onPress={onSnapPress} />
      </View>
      <TextInput
        value={text}
        placeholder={locale?.textInput}
        placeholderTextColor={Colors.gray}
        style={styles.input}
        multiline={true}
        onChangeText={onChangeText}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.WHITE},
  snapButton: {bottom: -25, elevation: 5},
  input: {
    marginTop: 45,
    marginHorizontal: 10,
    ...Typography.normal15,
    color: Colors.BLACK,
  },
});

export default DayEdit;
