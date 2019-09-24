import { CITY_REQUEST_URL } from '../constants/urls';

export const performFetchingCity = () => {
  fetch(CITY_REQUEST_URL)
    .then(response => response.json())
    .then(data => data.city);
};
