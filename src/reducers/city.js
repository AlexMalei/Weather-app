import { ActionNames } from '../actions/city';

function cityReducer(state, action) {
  switch (action.type) {
    case ActionNames.SELECT_CITY:
      return { ...state, city: action.city };
    default:
      return state;
  }
}

export default cityReducer;
