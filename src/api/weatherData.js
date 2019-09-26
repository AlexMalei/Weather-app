import { REQUEST_WEATHER_URL_TEMPLATE } from '../constants/urls';

const performFetchingWeather = city => {
  const weatherRequestUrl = REQUEST_WEATHER_URL_TEMPLATE.replace('CITY', city);
  return fetch(weatherRequestUrl)
    .then(response => response.json())
    .then(json => json.main.temp);
};

export { performFetchingWeather };
