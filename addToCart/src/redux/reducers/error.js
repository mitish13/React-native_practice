import * as constants from "../../constants";

export const errorReducer = (state = {}, action) => {
  switch (action.type) {
    case constants.SHOW_ERROR:
      return { error: action.payload };
    case constants.REMOVE_ERROR:
      return state;
    default:
      return state;
  }
};
