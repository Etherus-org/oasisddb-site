import { device } from "device.js";

// Types
import { SET_LOCALE } from "./types";

const initialState = {
  isMobile: device.mobile,
  isTablet: device.tablet,
  locale:
    localStorage.getItem("locale") || (navigator.language || navigator.userLanguage) === "ru-RU"
      ? "ru"
      : "en"
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOCALE:
      return {
        ...state,
        locale: action.locale
      };
    default:
      return state;
  }
};
