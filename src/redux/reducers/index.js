// Package imports
import { combineReducers } from "redux";
// Non-package imports
import flightsReducer from "./flightsReducer";
import callsReducer from "./callsReducer";
import errorReducer from "./errorReducer";
import loaderReducer from "./loaderReducer";

const rootReducer = combineReducers({
  flights: flightsReducer,
  calls: callsReducer,
  error: errorReducer,
  loader: loaderReducer,
});

export default rootReducer;
