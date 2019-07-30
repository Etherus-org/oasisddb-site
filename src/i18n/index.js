import { get, keys } from "lodash";

import en from "./en";
import ru from "./ru";

const MESSAGES = { en, ru };

// console.log(
//   JSON.stringify(
//     Object.keys(ru).map(key => ({
//       key,
//       value: ru[key]
//     }))
//   )
// );

export default MESSAGES;

export const getLocales = () => keys(MESSAGES) || [];

export const getMessages = locale => get(MESSAGES, locale);

export const test = [
  {
    lang: "en",
    messages: en
  },
  {
    lang: "ru",
    messages: ru
  }
];
