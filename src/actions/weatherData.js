const REQUEST_WEATHER_DATA = 'REQUEST_WEATHER_DATA';

function requestWeatherData(service) {
  return {
    type: REQUEST_WEATHER_DATA,
    service
  };
}

export const ActionNames = {
  REQUEST_WEATHER_DATA
};

export const Actions = {
  requestWeatherData
};
