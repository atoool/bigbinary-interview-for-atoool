import {ToastAndroid} from 'react-native';
import {get} from './networkUtils';

// Endpoints that Doesn't Require Authentication
export const api = async (PAYLOAD, locale) => {
  const URL = '/api';
  return get(URL, PAYLOAD, false).catch(e => {
    // console.log(e);
    ToastAndroid.show(e, ToastAndroid.SHORT);
  });
};
