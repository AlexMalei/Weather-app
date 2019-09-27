import { put, call, takeEvery } from 'redux-saga/effects';
import { performFetchingCity } from '../api/city';
import { ActionNames as CityActionNames } from '../actions/city';

function* fetchCity() {
  const currentCity = yield call(performFetchingCity);
  yield put({ type: CityActionNames.UPDATE_CITY, city: currentCity });
}

export default function* citySaga() {
  yield takeEvery(CityActionNames.REQUEST_CITY, fetchCity);
}
