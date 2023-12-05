import { combineReducers } from 'redux';
import dashboardReducer from './modules/dashboard/dashboardSlice';

const rootReducer = combineReducers({
  dashboard: dashboardReducer,
});

export default rootReducer;
