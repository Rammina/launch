// Non-package imports
import { ActionTypes } from "./types";
import { capitalizeFirstLetter } from "helpers";

export const actionShowLoader = (name, show) => {
  return {
    type: ActionTypes.ACTION_SHOW_LOADER,
    payload: { ["show" + capitalizeFirstLetter(name) + "Loader"]: show },
  };
};
