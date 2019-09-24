import { all } from 'redux-saga/effects';
import citySaga from './city';

export default function* rootSaga() {
  yield all([citySaga]);
}
