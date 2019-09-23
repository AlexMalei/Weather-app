const SELECT_WEATHER_SERVICE = 'SELECT_WEATHER_SERVICE';

function selectWeatherService(service) {
  return {
    type: SELECT_WEATHER_SERVICE,
    service
  };
}

export const ActionNames = {
  SELECT_WEATHER_SERVICE
};

export const Actions = {
  selectWeatherService
};
