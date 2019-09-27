const REQUEST_WEATHER_DATA = 'REQUEST_WEATHER_DATA';
const UPDATE_WEATHER_DATA = 'UPDATE_WEATHER_DATA';

function requestWeatherData(city) {
  return {
    type: REQUEST_WEATHER_DATA,
    city
  };
}
function updateWeatherData(data) {
  return {
    type: UPDATE_WEATHER_DATA,
    data
  };
}

export const ActionNames = {
  REQUEST_WEATHER_DATA,
  UPDATE_WEATHER_DATA
};

export const Actions = {
  requestWeatherData,
  updateWeatherData
};
