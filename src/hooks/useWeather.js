import React from 'react';
import {getCurrentLoc} from '../utils';
import {getWeather} from '../api';

const useWeather = onSetData => {
  React.useEffect(() => {
    const onLoad = async () => {
      try {
        const coords = await getCurrentLoc();
        const {longitude, latitude} = coords;
        const data = await getWeather({longitude, latitude});
        const {
          main: {temp = 30},
          name = 'Kochi',
        } = data?.data;
        onSetData({temp, name});
      } catch {}
    };
    onLoad();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useWeather;
