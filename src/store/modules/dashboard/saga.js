import {takeEvery, put, call} from 'redux-saga/effects';
import {DASHBOARD_REQUEST} from './types';
import {DashboardFail, DashboardSuccess} from './actions';
import {Request} from '../../../services';
import {hideLoader, showLoader} from '../../../utils';
function* getDashboardDataRequested({payload}) {
  yield* showLoader(false);
  try {
    const response = yield Request.get('/users?page=1');
    if (response.status) {
      yield* hideLoader(false, '');
      yield put(DashboardSuccess(response.data));
    } else {
      yield* hideLoader(false, '');
      yield put(DashboardFail());
    }
  } catch (error) {
    yield* hideLoader(false, '');
    yield put(DashboardFail());
  }
}

function* sagaLogin() {
  yield takeEvery(DASHBOARD_REQUEST, getDashboardDataRequested);
}
export default sagaLogin;
