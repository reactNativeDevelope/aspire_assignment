import {all} from 'redux-saga/effects';

import sagaDashboard from './modules/dashboard/saga';

export default function* rootSaga() {
  yield all([sagaDashboard()]);
}
