import { put, takeLatest, all, call } from 'redux-saga/effects';
import * as actions from './actions';
import * as API from './api';

export function* signin(payload) {
  const { token } = yield call(API.signin);
  yield put({ type: actions.SIGNIN_SUCCESS, payload: { token } });
}

export default function* authSaga() {
  yield all([
    takeLatest(actions.SIGNIN_REQUEST, signin),
  ]);
}