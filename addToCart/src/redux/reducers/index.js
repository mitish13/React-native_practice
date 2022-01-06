import { combineReducers } from "redux";
import { loginReducer } from "./login";
import { itemReducer } from "./item";
import { errorReducer } from "./error";
import { cartReducer } from "./cart";

const rootReducer = combineReducers({
  login: loginReducer,
  item: itemReducer,
  error: errorReducer,
  cart: cartReducer,
});

export default rootReducer;
