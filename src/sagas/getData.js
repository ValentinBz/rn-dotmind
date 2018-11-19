// @flow

import { takeLatest, put, call } from 'redux-saga/effects';
import { getDataSuccess, getDataFailure, GET_DATA_START } from '../actions/getData';
import fetchUsers from '../api';

export default function* watcherSaga() {
  yield takeLatest(GET_DATA_START, workerSaga);
}

function* workerSaga() {
  try {
    const response = yield call(fetchUsers);
    yield put(getDataSuccess(response));
  } catch(error) {
    yield put(getDataFailure(error));
  }
}
