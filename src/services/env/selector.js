import { get } from 'lodash';

export const getLocale = (state) =>
  get(state, 'services.env.locale');