import React from "react";
import { Link } from "react-router-dom";
import musician from "../../../public/images/musician";

const SignIn = () => {
  return (
    <section className="signin">
      <div style={{ backgroundImage: `url(${musician})` }}></div>
      <p>Hello</p>
    </section>
  );
};

export default SignIn;
