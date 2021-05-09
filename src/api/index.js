import axios from 'axios';
import {ToastAndroid} from 'react-native';
import {API_URL} from './API_URL';

// Endpoints that Doesn't Require Authentication
export const getWeather = async PAYLOAD => {
  const appid = '31e4f6cb2178d7d4ba1eb33368941c6f';
  let PARAMS = `?appid=${appid}&q=${'kochi'}`;
  return await axios
    .get(API_URL + PARAMS)
    .then(data => {
      return data;
    })
    .catch(e => {
      ToastAndroid.show(e, ToastAndroid.SHORT);
    });
};
