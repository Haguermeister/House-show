import React from "react";
import auth from "../utils/auth";
const Account = () => {
  const [userType, loggedIn] = auth.loggedIn();
  console.log("test", userType, loggedIn);
  return <div className="">We are going to crush this!</div>;
};
export default Account;
