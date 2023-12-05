import { put, takeLatest } from 'redux-saga/effects';
import { getProducts } from './dashboardService';

import {
  setProducts,
  setSearchProducts,
  setTotalPageCount,
  setIsLoading,
  setError,
} from './dashboardSlice';

function* fetchProducts(action) {
  try {
    yield put(setIsLoading(true));

    const data = yield getProducts(action.payload);

    yield put(setProducts(data?.products));
    yield put(setTotalPageCount(data?.totalPages));
  } catch (error) {
    yield put(setError(error.message));
  } finally {
    yield put(setIsLoading(false));
  }
}

function* searchProducts(action) {
  try {
    const data = yield getProducts(action.payload);

    yield put(setSearchProducts(data?.products));
  } catch (error) {
    yield put(setError(error.message));
  }
}

function* dashboardSaga() {
  yield takeLatest('dashboard/fetchProducts', fetchProducts);
}

function* searchProductSaga() {
  yield takeLatest('dashboard/searchProducts', searchProducts);
}

function* setProductsSaga() {
  yield takeLatest('dashboard/setProducts', action => {
    //setProduct
  });
}

export { dashboardSaga, searchProductSaga };
