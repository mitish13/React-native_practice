import React, { useEffect } from "react";
import { ActivityIndicator } from "react-native";
import LoginScreen from "../../screens/Login";
import StackNavigator from "./StackNavigator";
import { useDispatch, useSelector } from "react-redux";
import { restoreStatus } from "../../redux/actions/login";
import Splash from "../../screens/Splash";

const AppNavigator = () => {
  const dispatch = useDispatch();
  const { isLogin, loading } = useSelector((state) => state.login);
  useEffect(() => {
    dispatch(restoreStatus());
  }, [restoreStatus]);

  return (
    <>
      {loading ? (
        <Splash />
      ) : isLogin == true ? (
        <StackNavigator />
      ) : (
        <LoginScreen />
      )}
    </>
  );
};

export default AppNavigator;
