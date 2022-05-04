import React from "react";
import Musician from "../assets/musician.jpg";

const Login = () => {
  return (
    <section className="background">
      
      <img src={Musician} 
      alt="folk singer"
      style={{ width: "100%", height: "100%"}} />
    </section>
  );
};

export default Login;
