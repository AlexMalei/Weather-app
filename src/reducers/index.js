import { combineReducers } from 'redux';

import cityReducer from './city';
import weatherServiceReducer from './weatherService';
import weatherDataReducer from './weatherData';

const rootReducer = combineReducers({
  city: cityReducer,
  weatherService: weatherServiceReducer,
  weather: weatherDataReducer
});

export default rootReducer;
