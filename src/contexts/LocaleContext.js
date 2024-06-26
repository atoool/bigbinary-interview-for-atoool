import React, {createContext, useState, useEffect} from 'react';
import {I18nManager} from 'react-native';
import RNRestart from 'react-native-restart';
import {en} from '../locale/';
import {Storage} from '../utils';

const LOCALES = [{lan: 'English', locale: en, isRTL: false}];

export const LocaleContext = createContext({
  locale: LOCALES[0],
});

export const LocaleContextProvider = ({children}) => {
  //locale
  const [languages, setLanguages] = useState();
  const [locale, setLocale] = useState(LOCALES[0]);

  const loadLocale = async () => {
    try {
      let localeFromStorage = await Storage.getLocale();
      let _locale = LOCALES.find(item => item?.lan === localeFromStorage?.lan);
      setLocale(_locale ?? _locale);
    } catch (e) {
      setLocale(LOCALES[0]);
    }
  };

  const languageRestart = async rtl => {
    if (rtl) {
      if (!I18nManager.isRTL) {
        I18nManager.forceRTL(true);
      }
    } else {
      if (I18nManager.isRTL) {
        I18nManager.forceRTL(false);
      }
    }
    RNRestart.Restart();
  };

  useEffect(() => {
    let _languages = LOCALES.map(item => {
      let {lan, rtl} = item;
      return {lan, rtl};
    });
    setLanguages(_languages);
    loadLocale();
  }, []);

  const changeLocale = async (lan, prevLan) => {
    let _locale = LOCALES.find(item => item?.lan === lan);
    await Storage.setLocale({lan: _locale?.lan, rtl: _locale?.rtl});
    setLocale(_locale);
    languageRestart(_locale?.rtl ?? LOCALES[0].rtl);
  };

  const value = {
    locale,
    languages,
    changeLocale,
  };
  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
};
