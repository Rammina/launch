// Non-package imports
import { ActionTypes } from "./types";

// RETURN ERRORS
export const returnErrors = (message, status, id) => {
  console.error(message);
  return {
    type: ActionTypes.RETURN_ERRORS,
    payload: { message, status, id },
  };
};

// CLEAR ERRORS
export const clearErrors = () => {
  return {
    type: ActionTypes.CLEAR_ERRORS,
  };
};
