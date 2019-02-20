import { combineReducers } from 'redux';

/** Views reducers **/
import { reducer as main } from './Main';
import { reducer as team } from './Team';

const viewsReducer = combineReducers({ main, team });

export default (state = {}, action) => {
  switch (action.type) {
    default:
      return viewsReducer(state, action);
  }
};
