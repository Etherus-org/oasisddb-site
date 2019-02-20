import { combineReducers } from 'redux';

/** Reducers **/
import env from './env/reducer';

const servicesReducer = combineReducers({ env });

export default (state = {}, action) => {
  switch (action.type) {
    default:
      return servicesReducer(state, action)
  }
}
