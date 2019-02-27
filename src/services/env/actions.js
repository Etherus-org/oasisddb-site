// Types
import { SET_LOCALE } from './types';

export const setLocale = (locale) =>
  (dispatch) => {
    localStorage.setItem('locale', locale);
    dispatch({ type: SET_LOCALE, locale });
  };