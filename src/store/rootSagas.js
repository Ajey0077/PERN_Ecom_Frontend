import { all } from 'redux-saga/effects';
import {
  dashboardSaga,
  searchProductSaga,
} from './modules/dashboard/dashboardSaga';

function* rootSaga() {
  yield all([dashboardSaga(), searchProductSaga()]);
}

export default rootSaga;
