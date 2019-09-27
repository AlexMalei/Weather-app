import { put, select, takeEvery } from 'redux-saga/effects';
import { ActionNames as WeatherServiceActionNames } from '../actions/weatherService';
import { ActionNames as WeatherActionNames } from '../actions/weatherData';

function* updateWeatherService() {
  const city = yield select(state => state.city.name);

  yield put({
    type: WeatherActionNames.REQUEST_WEATHER_DATA,
    city
  });
}

export default function* weatherServiceSaga() {
  yield takeEvery(
    WeatherServiceActionNames.UPDATE_WEATHER_SERVICE,
    updateWeatherService
  );
}
