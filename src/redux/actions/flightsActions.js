import serverRest from "api/serverRest";
import { clearErrors } from "./errorActions";
import { actionShowLoader } from "./loaderActions";
import { errorHandler } from "helpers";
import { ActionTypes } from "./types";

export const getFlightList =
  ({ mission_name, limit }) =>
  (dispatch) => {
    // default to retrieving 10 items
    const queryString = `limit=${limit || 10}${
      mission_name ? `&mission_name=${mission_name}` : ""
    }`;
    serverRest
      .get(`?${queryString}`)
      .then((res) => {
        let flights = res.data;
        dispatch({
          type: ActionTypes.GET_FLIGHTS_SUCCESS,
          payload: flights,
        });
        dispatch(clearErrors());
      })
      .catch((err) => {
        errorHandler(dispatch, err, { type: ActionTypes.GET_FLIGHTS_FAIL });
      })
      .finally(() => {
        dispatch(actionShowLoader("flights", false));
      });
  };
