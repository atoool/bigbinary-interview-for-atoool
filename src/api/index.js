import axios from 'axios';
import {ToastAndroid} from 'react-native';
import {API_URL} from './API_URL';

// Endpoints that Doesn't Require Authentication
export const getWeather = async ({latitude = 0, longitude = 0}) => {
  const appid = '31e4f6cb2178d7d4ba1eb33368941c6f';
  let PARAMS = `?appid=${appid}&units=metric&lat=${latitude}&lon=${longitude}`;
  return await axios.get(API_URL + PARAMS).catch(e => {
    ToastAndroid.show(e, ToastAndroid.SHORT);
  });
};
