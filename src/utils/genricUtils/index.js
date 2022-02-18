import {put} from 'redux-saga/effects';
import {hideLoading, showLoading} from '../../components/customLoader/action';

export function* hideLoader(isError, errorMessage) {
  yield put(hideLoading(isError, errorMessage));
}

export function* showLoader(silentFetch) {
  if (!silentFetch) {
    yield put(showLoading());
  }
}
