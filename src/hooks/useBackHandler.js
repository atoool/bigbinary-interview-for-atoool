import React from 'react';

const useBackHandler = (navigation, handler) => {
  React.useEffect(() => {
    navigation.addListener('beforeRemove', e => {
      if (handler) {
        handler();
        return;
      }
      e.preventDefault();
    });
    return () =>
      navigation.removeListener('beforeRemove', e => {
        if (handler) {
          handler();
          return;
        }
        e.preventDefault();
      });
  }, [navigation, handler]);
};

export default useBackHandler;
