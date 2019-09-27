import { ActionNames } from '../actions/weatherService';
import WeatherServiceNames from './../constants/weatherServices';

const initialState = { name: WeatherServiceNames.OPEN_WEATHER_MAP };

function weatherServiceReducer(state = initialState, action) {
  switch (action.type) {
    case ActionNames.UPDATE_WEATHER_SERVICE:
      return { ...state, name: action.service };
    default:
      return state;
  }
}

export default weatherServiceReducer;
