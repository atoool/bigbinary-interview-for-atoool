import React, {createRef, useContext} from 'react';
import {StyleSheet, ToastAndroid, View} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {SnapButton} from '.';
import {LocaleContext} from '../contexts';

const Camera = ({onSnap}) => {
  const camera = createRef(null);
  const {
    locale: {locale},
  } = useContext(LocaleContext);

  const takePicture = async () => {
    if (camera) {
      try {
        const options = {quality: 1, base64: true};
        const data = await camera.current.takePictureAsync(options);

        onSnap(data.uri);
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
          title: locale?.permit,
          message: locale?.permitText,
          buttonPositive: locale?.ok,
          buttonNegative: locale?.cancel,
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
