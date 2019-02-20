import { combineReducers } from 'redux';

/** External reducers **/
import { routerReducer as router } from 'react-router-redux';

/** Reducers **/
import services from 'services/reducer';
import views from 'views/reducer';

export default combineReducers({ router, services, views });
