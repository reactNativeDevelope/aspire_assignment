import {combineReducers} from 'redux';
import loadingReducer from '../components/customLoader/reducer';
import dashboardReducer from './modules/dashboard/reducer';

const rootReducer = combineReducers({
  loadingReducer,
  dashboardReducer,
});

export default rootReducer;
