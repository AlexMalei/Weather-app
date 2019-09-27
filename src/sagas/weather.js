import { put, call, takeEvery } from 'redux-saga/effects';
import { performFetchingWeather } from '../api/weatherData';
import { ActionNames as WeatherActionNames } from '../actions/weatherData';
import { kelvinToCelsius } from '../helpers/temperatureConvertor';

function* fetchWeather(action) {
  const temperatureInKelvin = yield call(performFetchingWeather, action.city);
  const temperatureInCelsius = kelvinToCelsius(temperatureInKelvin);

  yield put({
    type: WeatherActionNames.UPDATE_WEATHER_DATA,
    data: {
      temperature: temperatureInCelsius
    }
  });
}

export default function* weatherSaga() {
  yield takeEvery(WeatherActionNames.REQUEST_WEATHER_DATA, fetchWeather);
}
