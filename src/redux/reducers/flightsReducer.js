import { ActionTypes } from "../actions";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_FLIGHTS_SUCCESS:
      return action.payload;
    case ActionTypes.CLEAR_FLIGHTS:
      return [];
    case ActionTypes.GET_FLIGHTS_FAIL:
    default:
      return state;
  }
};
