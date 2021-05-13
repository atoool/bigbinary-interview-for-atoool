import {Platform} from 'react-native';
import Geolocation from 'react-native-geolocation-service';

const getCurrentLoc = async () => {
  let timeOut = {};
  if (Platform.OS === 'ios') {
    timeOut = {
      timeout: 15000,
    };
    await Geolocation.requestAuthorization('whenInUse');
  }
  return new Promise(function (myResolve, myReject) {
    Geolocation.getCurrentPosition(
      async pos => {
        console.warn(pos);
        myResolve(pos.coords);
      },
      e => {
        myReject(e);
      },
      {
        enableHighAccuracy: true,
        showLocationDialog: true,
        forceRequestLocation: true,
        accuracy: {android: 'high'},
        maximumAge: 10000,
        ...timeOut,
      },
    );
  });
};

export default getCurrentLoc;
