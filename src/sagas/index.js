import { fork } from 'redux-saga/effects';
import citySaga from './city';
import weatherDataSaga from './weather';

export default function* rootSaga() {
  yield fork(citySaga);
  yield fork(weatherDataSaga);
}
