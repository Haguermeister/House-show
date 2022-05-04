import React, { useState } from "react";
import "./Login.css";
import Musician from "../assets/musician.jpg";

const Login = () => {
  return (
    <section className="loginIn">
      <div className="media ">
        <img
          className="backgroundImage"
          src={Musician}
          alt="folk singer"
          style={{ width: "100%", height: "100%" }}
        />
        <h1 className="overlayText">Sign in</h1>
      </div>
    </section>
  );
};

export default Login;
