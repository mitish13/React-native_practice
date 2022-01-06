import * as constants from "../../constants";

export const itemReducer = (state = {}, action) => {
  switch (action.type) {
    case constants.FETCH_ITEMS_REQUEST:
      return { loading: true };
    case constants.FETCH_ITEMS_SUCCESS:
      return { loading: false, items: action.payload };
    case constants.FETCH_ITEMS_FAIL:
      return { loading: false, error: "errrorrr" };
    default:
      return state;
  }
};
