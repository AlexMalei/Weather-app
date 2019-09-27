import { fork } from 'redux-saga/effects';
import citySaga from './city';
import weatherSaga from './weather';
import weatherServiceSaga from './weatherService';

export default function* rootSaga() {
  yield fork(citySaga);
  yield fork(weatherSaga);
  yield fork(weatherServiceSaga);
}
