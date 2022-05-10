import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import Form from "react-bootstrap/Form";
import Musician from "../assets/music.jpg";
import { LOGIN_ARTIST } from "../utils/mutations";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN_ARTIST);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <section className="loginIn">
      <div className="media ">
        <img
          className="backgroundImageLogin"
          src={Musician}
          alt="folk singer"
          style={{ width: "100%", height: "100%" }}
        />
        <h1 className="overlayText">Sign in</h1>

        <div className="userCheck">
          {/* <Form>
            <Form.Check type="switch" id="hostSwitch" label="Im a Host" />

            <Form.Check type="switch" id="artistSwitch" label="Im an Artist" />
          </Form> */}
        </div>

        <div className="userLogin">
          <>
            <Form onSubmit={handleFormSubmit}>
              <Form.Label htmlFor="loginEmail"></Form.Label>
              <Form.Control
                placeholder="yourname@email.com"
                type="email"
                id="inputEmail"
                onChange={handleChange}
                aria-describedby="passwordHelpBlock"
              />
              <Form.Text id="passwordHelpBlock" muted></Form.Text>

              <Form.Label htmlFor="loginPassword"></Form.Label>
              <Form.Control
                placeholder="******"
                type="passworrd"
                id="inputPassword"
                onChange={handleChange}
                aria-describedby="passwordHelpBlock"
              />
            </Form>
            {error ? (
              <div>
                <p className="error-text">
                  The provided credentials are incorrect
                </p>
              </div>
            ) : null}
            <div className="flex-row flex-end artistSubmitButton">
              <Link
                className="btn artistButton mx-auto"
                to={{ pathname: "/explore" }}
              >
                Sign in
              </Link>
            </div>
          </>
        </div>
      </div>
    </section>
  );
};

export default Login;
