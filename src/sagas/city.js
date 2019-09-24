import { put, call, takeEvery } from 'redux-saga/effects';
import { performFetchingCity } from '../api/city';
import { ActionNames } from '../actions/city';

export function* fetchCity(action) {
  const currentCity = yield call(performFetchingCity);
  console.log(currentCity);
}

export default function* citySaga() {
  yield takeEvery(ActionNames.REQUEST_CITY, fetchCity);
}
