import { put, all, call, takeEvery } from 'redux-saga/effects';
import { performFetchingWeather } from '../api/weatherData';
import { ActionNames as WeatherDataActionNames } from '../actions/weatherData';

function* fetchWeather() {
  console.log('FETCHING WEATHER');
  const weatherData = yield call(performFetchingWeather);

  console.log('AFTER FETCHING');
  console.log(weatherData);

  yield put({ type: WeatherDataActionNames.UPDATE_WEATHER_DATA });
}

export default function* weatherDataSaga() {
  yield all([
    takeEvery(WeatherDataActionNames.REQUEST_WEATHER_DATA, fetchWeather)
  ]);
}
