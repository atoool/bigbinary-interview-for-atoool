import axios from 'axios';
import Storage from '../utils/Storage';
import {API_URL} from './API_URL';

const DEFAULT_CONFIG = {
  headers: {
    'content-type': 'application/json',
  },
};
const axiosInstance = axios.create({
  baseURL: API_URL,
});
const networkErrorLogger = (e, URL, PAYLOAD) => {
  console.error(
    `\nREQUEST TO URL: \n${API_URL}${URL} \nwith PAYLOAD: \n${JSON.stringify(
      PAYLOAD,
    )} \nfailed!\n`,
  );
  console.error(JSON.stringify(e));
  if (e.message === 'Network Error') {
    console.log('Network Error');
    // Flash.showError('Network Error');
    throw 'Network Error. Ensure you are connected to internet.';
  } else {
    let {error_code, message} = e.response.data;
    // console.warn(e.response);
    if (error_code === 400) {
      //TODO: Logout
      throw message;
    } else {
      console.log('Server Error');
      // Flash.showError('Server Error! Please Try again after sometime.');
    }
    if (typeof error_code === 'string') {
      console.error(error_code);
      throw error_code;
    } else {
      throw 'Fatal Error. Contact Admin.';
    }
  }
};
const setUpConfig = async isAuthenticated => {
  if (isAuthenticated) {
    try {
      const access_token = await Storage.getUserAccessToken();
      const CONFIG = {
        headers: {
          'content-type': 'application/json',
          'access-token': access_token,
        },
      };
      return CONFIG;
    } catch (e) {
      console.log('Error Setting Config');
    }
  } else {
    return DEFAULT_CONFIG;
  }
};

const get = async (
  URL,
  isAuthenticated = true,
  getFullResult = false,
  extraParams = '',
) => {
  try {
    let PARAMS = extraParams;
    const CONFIG = await setUpConfig(isAuthenticated);
    console.log(CONFIG);
    const result = await axiosInstance.get(URL + PARAMS, CONFIG);
    console.warn(result);
    if (getFullResult) {
      return result.data;
    } else {
      return result.data.data;
    }
  } catch (e) {
    // console.warn(e);
    networkErrorLogger(e, URL, 'nil');
  }
};

const post = async (URL, PAYLOAD = {}, isAuthenticated = true) => {
  try {
    const CONFIG = await setUpConfig(isAuthenticated);
    const result = await axiosInstance.post(URL, PAYLOAD, CONFIG);
    // console.info(
    //   `POST TO: ${URL} with PAYLOAD: ${JSON.stringify(
    //     PAYLOAD,
    //   )} and CONFIG: ${JSON.stringify(CONFIG)}`,
    // );
    // console.log(`Returned: ${JSON.stringify(result.data.data)}`);
    return result.data.data;
  } catch (e) {
    // console.warn(e);
    networkErrorLogger(e, URL, PAYLOAD);
  }
};

const put = async (URL, PAYLOAD = {}, isAuthenticated = true) => {
  try {
    const CONFIG = await setUpConfig(isAuthenticated);
    const result = await axiosInstance.put(URL, PAYLOAD, CONFIG);
    return result.data.data;
  } catch (e) {
    networkErrorLogger(e, URL, PAYLOAD);
  }
};

export {put, post, get};
