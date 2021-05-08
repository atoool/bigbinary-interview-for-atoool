import React, {createRef} from 'react';
import {StyleSheet, View} from 'react-native';
import {RNCamera} from 'react-native-camera';
import Icon from 'react-native-remix-icon';
import {Touchable} from '.';
import {Colors} from '../styles';

const Camera = () => {
  const camera = createRef(null);
  const takePicture = async () => {
    if (camera) {
      const options = {quality: 1, base64: true};
      const data = await camera.current.takePictureAsync(options);
      console.log(data.uri);
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
        flashMode={RNCamera.Constants.FlashMode.on}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        captureAudio={false}
        playSoundOnCapture>
        <View style={styles.captureBox}>
          <Touchable onPress={() => takePicture()} style={styles.capture}>
            <Icon name="camera-lens-line" color={Colors.lightGreen} size={30} />
          </Touchable>
        </View>
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
  captureBox: {flex: 0, flexDirection: 'row', justifyContent: 'center'},
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 56,
    width: 56,
    height: 56,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 25,
  },
});
export default Camera;
