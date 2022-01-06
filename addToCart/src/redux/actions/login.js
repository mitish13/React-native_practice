import * as constants from "../../constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const login = (emailToCheck, passwordToCheck) => async (dispatch) => {
  //We do not need api call here so not using redux thunk
  //static email and password to validate

  const email = "admin@gmail.com";
  const password = "admin123";

  if (email == emailToCheck && password == passwordToCheck) {
    await AsyncStorage.setItem("isLogin", JSON.stringify(true));
    dispatch({ type: constants.LOGIN_SUCCESS });
  } else dispatch({ type: constants.SHOW_ERROR, payload: "Wrong credintials" });
};

export const restoreStatus = () => async (dispatch) => {
  let loginStatus;
  try {
    dispatch({ type: constants.LOGIN_STATE_RESTORE_REQUEST });
    loginStatus = await AsyncStorage.getItem("isLogin")
      .then((val) => {
        if (val === "true") return true;
        else return false;
      })
      .catch((err) => console.log(err));

    dispatch({ type: constants.LOGIN_STATE_RESTORE, payload: loginStatus });
  } catch (error) {
    console.log("status restoration failed: ", error);
  }
};

export const logout = () => async (dispatch) => {
  try {
    await AsyncStorage.removeItem("isLogin", () => {
      dispatch({ type: constants.LOGOUT });
      dispatch(restoreStatus());
    });
  } catch (err) {
    console.log(err);
  }
};
