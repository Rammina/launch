// this just contains a list of all projects (not specific to one account only)
import { ActionTypes } from "../actions";

const initialState = { itemsLastRetrieved: 0, retrievedAllFlights: false };

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_FLIGHTS_SUCCESS:
      return {
        itemsLastRetrieved: action.payload.length,
        retrievedAllFlights: action.payload.length === state.itemsLastRetrieved,
      };
    case ActionTypes.CLEAR_FLIGHTS:
      return { itemsLastRetrieved: 0, retrievedAllFlights: false };
    case ActionTypes.GET_FLIGHTS_FAIL:
    default:
      return state;
  }
};
