import * as constants from "../../constants";
export const errorMessenger = (message) => {
  return { type: constants.SHOW_ERROR, payload: message };
};

export const removeError = () => {
  return { type: constants.REMOVE_ERROR };
};
