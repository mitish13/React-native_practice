import rootReducer from "./src/redux/reducers";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(compose(thunk)));

export default store;
