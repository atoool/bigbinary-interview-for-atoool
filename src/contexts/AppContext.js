import React, {createContext, useEffect, useState} from 'react';
import {onCheckDate, Storage} from '../utils';

export const AppContext = createContext({
  weather: {},
  onChangeWeather: () => {},
  data: [],
  onChangeData: () => {},
});

export const AppContextProvider = ({children}) => {
  const [weather, setWeather] = useState({});
  const [data, setData] = useState([]);

  useEffect(() => {
    const onMount = async () => {
      try {
        const appData = await Storage.getItem('appData');
        setData(appData);
      } catch {}
    };
    onMount();
  }, []);

  const onChangeWeather = val => setWeather(val);
  const onChangeData = async item => {
    try {
      let tempData = [item, ...data];
      let isSameDate = onCheckDate(data[0]?.date);
      if (isSameDate) {
        tempData = data;
        tempData[0] = item;
      }
      setData([...tempData]);
      await Storage.setItem('appData', tempData);
    } catch {}
  };

  const value = {
    weather,
    data,
    onChangeWeather,
    onChangeData,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
