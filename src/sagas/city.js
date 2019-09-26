import { put, all, call, takeEvery } from 'redux-saga/effects';
import { performFetchingCity } from '../api/city';
import { ActionNames as CityActionNames } from '../actions/city';

function* fetchCity() {
  console.log('IN FETCH CITY');
  const currentCity = yield call(performFetchingCity);
  yield put({ type: CityActionNames.UPDATE_CITY, city: currentCity });
  console.log('AFTER FETCH CITY');
}

export default function* citySaga() {
  yield all([takeEvery(CityActionNames.REQUEST_CITY, fetchCity)]);
}
