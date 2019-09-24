import { ActionNames } from '../actions/weatherService';

const initialState = { name: '', lastUpdate: 0 };

function weatherServiceReducer(state = initialState, action) {
  switch (action.type) {
    case ActionNames.SELECT_WEATHER_SERVICE:
      return { ...state, weatherService: action.weatherService };
    default:
      return state;
  }
}

export default weatherServiceReducer;
