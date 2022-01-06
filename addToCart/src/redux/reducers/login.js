import * as constants from "../../constants";

export const loginReducer = (
  state = { isLogin: false, loading: false },
  action
) => {
  switch (action.type) {
    case constants.LOGIN_STATE_RESTORE_REQUEST:
      return { loading: true, isLogin: false };
    case constants.LOGIN_STATE_RESTORE:
      return { isLogin: action.payload, loading: false };
    case constants.LOGIN_SUCCESS:
      return { isLogin: true };
    case constants.LOGIN_FAIL:
      return { error: action.payload, isLogin: false };
    case constants.LOGOUT:
      return { isLogin: false, loading: false };
    default:
      return state;
  }
};
