import { ActionNames } from '../actions/weatherService';

function weatherServiceReducer(state, action) {
  switch (action.type) {
    case ActionNames.SELECT_WEATHER_SERVICE:
      return { ...state, weatherService: action.weatherService };
    default:
      return state;
  }
}

export default weatherServiceReducer;
