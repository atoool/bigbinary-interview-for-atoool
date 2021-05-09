import React, {useContext, useState} from 'react';
import {SafeAreaView, StyleSheet, TextInput, View} from 'react-native';
import {Post, SnapButton} from '../components';
import {AppContext, LocaleContext} from '../contexts';
import {Colors, Typography} from '../styles';

const DayEdit = ({route, navigation}) => {
  const {item} = route?.params;
  const [text, setText] = useState('');

  const {
    locale: {locale},
  } = useContext(LocaleContext);

  const onPhotoView = itm => {
    navigation.navigate('PhotoView', {uri: itm?.uri});
  };

  const {onChangeData} = useContext(AppContext);

  const onChangeText = txt => setText(txt);

  const onSubmit = () => {
    try {
      const itm = {...item, desc: text};
      onChangeData(itm);
      navigation.popToTop();
    } catch {}
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Post item={item} onPress={onPhotoView} />
        <SnapButton style={styles.snapButton} onPress={onSubmit} />
      </View>
      <TextInput
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
