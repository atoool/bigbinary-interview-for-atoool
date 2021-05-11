import moment from 'moment';
import React, {createContext, useEffect, useState} from 'react';
import {Storage} from '../utils';

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
      const length = data?.length;
      const lastItem = data[0];
      let tempData = [item, ...data];
      if (
        length !== 0 &&
        moment(item?.date).format('DD/MM/YY') ===
          moment(lastItem?.date).format('DD/MM/YY')
      ) {
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
