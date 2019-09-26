const REQUEST_CITY = 'REQUEST_CITY';
const UPDATE_CITY = 'UPDATE_CITY';

function requestCity() {
  return {
    type: REQUEST_CITY
  };
}

function updateCity(data) {
  return {
    type: UPDATE_CITY,
    data
  };
}

export const ActionNames = {
  UPDATE_CITY,
  REQUEST_CITY
};

export const Actions = {
  requestCity,
  updateCity
};
