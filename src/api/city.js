import {
  REQUEST_IP_URL,
  REQUEST_CITY_IP_URL_TEMPLATE,
  REQUEST_CITY_GEOLOCATION_URL_TEMPLATE
} from '../constants/urls';
import { getGeolocationPromise } from '../helpers/geolocation';

const performFetchingCity = () => {
  const geolocationPromise = getGeolocationPromise();

  return geolocationPromise
    .then(coords => requestCityUsingGeolocation(coords))
    .then(response => response.json())
    .then(json => json.results[0].components.city)
    .catch(error => requestCityUsingIP(error));
};

// make function replace params from template
function requestCityUsingGeolocation({ latitude, longitude }) {
  const requestUrl = REQUEST_CITY_GEOLOCATION_URL_TEMPLATE.replace(
    'LATITUDE',
    latitude
  ).replace('LONGITUDE', longitude);

  return fetch(requestUrl);
}

function requestCityUsingIP(error) {
  console.error(error.message);

  return fetch(REQUEST_IP_URL)
    .then(response => response.json())
    .then(data => data.ip)
    .then(ip => {
      const requestCityUrl = REQUEST_CITY_IP_URL_TEMPLATE.replace('IP', ip);
      return fetch(requestCityUrl);
    })
    .then(response => response.json())
    .then(data => data.city);
}

export { performFetchingCity };
