import AsyncStorage from '@react-native-async-storage/async-storage';

const setItem = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
    // console.log(`${key} & ${value} set successfully in localStorage`);
  } catch (e) {
    console.log(e);
    throw e;
  }
};

const getItem = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value === null) {
      throw `No Value for "${key}" in Storage 💾`;
    }
    return value;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

const removeItem = async key => {
  try {
    await AsyncStorage.removeItem(key);
    // console.log(`${key} removed  successfully from localStorage`);
  } catch (e) {
    console.log(e);
  }
};

const getLocale = async () => {
  let jsonValue = await getItem('locale');
  return jsonValue != null ? JSON.parse(jsonValue) : null;
};
const setLocale = async locale => {
  const jsonValue = JSON.stringify(locale);
  await setItem('locale', jsonValue);
};

export default {
  setItem,
  getItem,
  removeItem,
  getLocale,
  setLocale,
};
