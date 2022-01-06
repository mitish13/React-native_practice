//This file will have all the logics and communication with redux global store
//We will pass the functions and state using prop to its correspond component
import React from "react";
import LoginComponent from "../../components/Login";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/login";
import { errorMessenger, removeError } from "../../redux/actions/error";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.error);

  const onSubmit = (email, password) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    if (reg.test(email) === false) {
      dispatch(errorMessenger("Email is not valid"));
    } else if (password == "") {
      dispatch(errorMessenger("Password is not valid"));
    } else {
      dispatch(removeError());
      dispatch(login(email, password));
    }
  };

  return <LoginComponent onSubmit={onSubmit} error={error} />;
};

export default LoginScreen;
