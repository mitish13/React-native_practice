import * as constants from "../../constants";
import axios from "axios";

export const fetchItems = () => async (dispatch) => {
  dispatch({ type: constants.FETCH_ITEMS_REQUEST });
  try {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    dispatch({ type: constants.FETCH_ITEMS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: constants.FETCH_ITEMS_FAIL });
    console.log(error.message);
  }
};
