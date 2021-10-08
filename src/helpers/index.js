// Helper functions to be used in other files

// Non-package imports
import { returnErrors } from "redux/actions";
import { formatDistanceToNowStrict } from "date-fns";

// action creator helpers

export const errorHandler = (dispatch, err, errorType) => {
  // handle failure by logging it on the console and the redux store
  console.error(err);
  console.error(err.response);
  if (err.response)
    dispatch(returnErrors(err.response.data, err.response.status));
  dispatch(errorType);
};

// Date time helpers

export const getLaunchDateString = (dateUtc) => {
  return dateUtc ? formatDistanceToNowStrict(dateUtc) : null;
};

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
