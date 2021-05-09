import Geolocation from 'react-native-geolocation-service';

const getCurrentLoc = () => {
  return new Promise(function (myResolve, myReject) {
    Geolocation.getCurrentPosition(
      async pos => {
        myResolve(pos.coords);
      },
      e => myReject(e),
      {
        enableHighAccuracy: true,
        showLocationDialog: true,
        forceRequestLocation: true,
        accuracy: {android: 'high'},
        maximumAge: 0,
      },
    );
  });
};

export default getCurrentLoc;
