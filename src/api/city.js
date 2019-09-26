import { REQUEST_IP_URL, REQUEST_CITY_URL_TEMPLATE } from '../constants/urls';
import { getGeolocationPromise } from '../helpers/geolocation';

const performFetchingCity = () => {
  console.log('PERFORM FETCH CITY');
  return fetch(REQUEST_IP_URL)
    .then(response => response.json())
    .then(json => json.ip)
    .then(ip => {
      const requestCityUrl = REQUEST_CITY_URL_TEMPLATE.replace('IP', ip);
      return fetch(requestCityUrl);
    })
    .then(response => response.json())
    .then(json => json.city);
};

export { performFetchingCity };
