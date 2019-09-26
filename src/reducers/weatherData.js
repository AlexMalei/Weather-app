import { ActionNames } from '../actions/weatherData';

const initialState = { data: [], lastUpdate: 0, loading: false };

function weatherDataReducer(state = initialState, action) {
  switch (action.type) {
    case ActionNames.REQUEST_WEATHER_DATA:
      return { ...state, loading: true };
    case ActionNames.UPDATE_WEATHER_DATA:
      return { ...state, weatherData: action.weatherData };
    default:
      return state;
  }
}

export default weatherDataReducer;
