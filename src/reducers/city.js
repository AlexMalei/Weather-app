import { ActionNames } from '../actions/city';

const initialState = { name: '', lastUpdate: 0, loading: false };

function cityReducer(state = initialState, action) {
  switch (action.type) {
    case ActionNames.REQUEST_CITY:
      return { ...state, loading: true };
    default:
      return state;
  }
}

export default cityReducer;
