import { applyMiddleware, createStore } from 'redux';

/** Middleware **/
import { routerMiddleware as router } from 'react-router-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import reducer from './reducer';

export default history => createStore(reducer, applyMiddleware(
  router(history), logger, thunk
))
