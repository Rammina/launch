// Reducer related to error state management
// Non-package imports
import { ActionTypes } from "../actions";

const INITIAL_STATE = {
  message: null,
  status: null,
  id: null,
};

const errorReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.RETURN_ERRORS:
      return {
        message: action.payload.message,
        status: action.payload.status,
        id: action.payload.id,
      };
    case ActionTypes.CLEAR_ERRORS:
      return {
        message: null,
        status: null,
        id: null,
      };
    default:
      return state;
  }
};
export default errorReducer;
