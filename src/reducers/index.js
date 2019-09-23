import { combineReducers } from 'redux';

import cityReducer from './city';
import weatherServiceReducer from './weatherService';

const rootReducer = combineReducers({
  city: cityReducer,
  weatherService: weatherServiceReducer
});

export default rootReducer;
