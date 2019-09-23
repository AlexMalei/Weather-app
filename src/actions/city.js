const SELECT_CITY = 'SELECT_CITY';

function selectCity(city) {
  return {
    type: SELECT_CITY,
    city
  };
}

export const ActionNames = {
  SELECT_CITY
};

export const Actions = {
  selectCity
};
