const REQUEST_CITY = 'REQUEST_CITY';
const UPDATE_CITY = 'UPDATE_CITY';

function requestCity() {
  return {
    type: REQUEST_CITY
  };
}

function updateCity(city) {
  return {
    type: UPDATE_CITY,
    city
  };
}

export const ActionNames = {
  UPDATE_CITY,
  REQUEST_CITY
};

export const Actions = {
  requestCity
};
