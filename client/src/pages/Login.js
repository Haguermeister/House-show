import React from "react";
import AuthService from "../utils/auth";

const Login = () => {
  console.log("Login : !!!", AuthService.loggedIn());
  return <p>Hello Ryan</p>;
};

export default Login;
