import { CITY_REQUEST_URL } from '../constants/urls';

export function getCurrentCity() {
  const city = fetch(CITY_REQUEST_URL).then(response => response.json());

  console.log(city);

  return city;
}
