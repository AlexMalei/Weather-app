const UPDATE_WEATHER_SERVICE = 'UPDATE_WEATHER_SERVICE';

function updateWeatherService(service) {
  return {
    type: UPDATE_WEATHER_SERVICE,
    service
  };
}

export const ActionNames = {
  UPDATE_WEATHER_SERVICE
};

export const Actions = {
  updateWeatherService
};
