import { ActionNames } from '../actions/weatherData';

const initialState = { data: [], lasrUpdate: 0 };

function weatherDataReducer(state = initialState, action) {
  switch (action.type) {
    case ActionNames.REQUEST_WEATHER_DATA:
      return { ...state, weatherData: action.weatherData };
    default:
      return state;
  }
}
