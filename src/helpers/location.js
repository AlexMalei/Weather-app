import { LOCATION_URL } from '../constants/urls';

export function getCurrentCity() {
  const city = fetch(LOCATION_URL).then(response => response.json());

  console.log(city);

  return city;
}
