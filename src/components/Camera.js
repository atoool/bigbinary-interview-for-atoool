import React, {createRef, useContext} from 'react';
import {StyleSheet, ToastAndroid, View} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {SnapButton} from '.';
import {AppContext} from '../contexts';

const Camera = ({navigation}) => {
  const camera = createRef(null);
  const {
    locale: {locale},
  } = useContext(AppContext);

  const takePicture = async () => {
    if (camera) {
      try {
        const options = {quality: 1, base64: true};
        const data = await camera.current.takePictureAsync(options);

        navigation.navigate('DayEdit', {uri: data.uri});
      } catch (e) {
        ToastAndroid.show(locale?.error, ToastAndroid.SHORT);
      }
    }
  };

  return (
    <View style={styles.container}>
      <RNCamera
        ref={ref => {
          camera.current = ref;
        }}
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.off}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        captureAudio={false}
        playSoundOnCapture>
        <SnapButton onPress={takePicture} />
      </RNCamera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
export default Camera;
