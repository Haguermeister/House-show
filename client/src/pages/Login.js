import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Musician from "../assets/musician.jpg";
import "./Login.css";



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

        <div className="userCheck">
          <Form>
            <Form.Check type="switch" id="hostSwitch" label="Im a Host" />

            <Form.Check type="switch" id="artistSwitch" label="Im an Artist" />
          </Form>
        </div>

        <div className="userLogin">
          <>
            <Form.Label htmlFor="loginEmail">Email</Form.Label>
            <Form.Control
              type="email"
              id="inputEmail"
              aria-describedby="passwordHelpBlock"
              

            />
            <Form.Text id="passwordHelpBlock" muted></Form.Text>

            <Form.Label htmlFor="loginPassword">Password</Form.Label>
            <Form.Control
              placeholder="******"
              type="passworrd"
              id="inputPassword"
              
              aria-describedby="passwordHelpBlock"
            />
          </>
        </div>
      </div>
    </section>
  );
};

export default Login;
