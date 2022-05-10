import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import Form from "react-bootstrap/Form";
import Musician from "../assets/musician.jpeg";
import { LOGIN_ARTIST } from "../utils/mutations";
import Auth from "../utils/auth";
import { useHistory } from "react-router-dom";
import "./Login.css";
<<<<<<< HEAD
import { Redirect } from "react-router-dom";

const Login = () => {
  const { loggedIn } = Auth.loggedIn();
=======
import { Link } from "react-router-dom";

const Login = () => {
  const [formStateEmail, setFormStateEmail] = useState();
  const [formStatePassword, setFormStatePassword] = useState();
>>>>>>> develop

  const [login, { error }] = useMutation(LOGIN_ARTIST);
  let history = useHistory();

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const variables = {
      email: formStateEmail,
      password: formStatePassword,
    };

    try {
      console.log(variables);
      const mutationResponse = await login({ variables });
      console.log("response");
      const token = mutationResponse.data.login.token;
      Auth.login(token);
      history.push("explore");
    } catch (e) {
      console.log(e);
    }
  };

  const handleChangeEmail = (event) => {
    setFormStateEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setFormStatePassword(event.target.value);
  };
  if (!loggedIn) {
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

<<<<<<< HEAD
          <div className="userCheck">
            {/* <Form>
            <Form.Check type="switch" id="hostSwitch" label="Im a Host" />

            <Form.Check type="switch" id="artistSwitch" label="Im an Artist" />
          </Form> */}
          </div>

          <div className="userLogin">
            <Form onSubmit={handleFormSubmit}>
=======
  return (
    <section className="artistLogin">
      <div className="artistMedia ">
        <img
          className="backgroundImageArtistLogin"
          src={Musician}
          alt="folk singer"
          style={{ width: "100%", height: "100%" }}
        />
        <h1 className="artistOverlayText">Sign in</h1>

        <div className="artistLogin">
          <>
            <Form onSubmit={handleFormSubmit} className="artistLoginForm">
>>>>>>> develop
              <Form.Label htmlFor="loginEmail"></Form.Label>
              <Form.Control
                placeholder="artist@email.com"
                type="text"
                id="artistLoginEmail"
                onChange={handleChangeEmail}
              />
              <Form.Text id="passwordHelpBlock" muted></Form.Text>

              <Form.Label htmlFor="artistLoginPassword"></Form.Label>
              <Form.Control
                placeholder="******"
                type="text"
                id="artistInputPassword"
                onChange={handleChangePassword}
                value={formStatePassword}
              />
<<<<<<< HEAD
              <button
                className="btn button mx-auto"
                to={{ pathname: "/explore" }}
              >
                Sign in
              </button>
            </Form>
            {error ? (
              <div>
                <p className="error-text">
                  The provided credentials are incorrect
                </p>
              </div>
            ) : null}
          </div>
=======

              <div className="flex-row flex-end">
                <button
                  className="btn artistLoginButton mx-auto"
                  to={{ pathname: "/explore" }}
                >
                  Sign in
                </button>
              </div>
              {error ? (
                <div className="artistErrorText">
                  <p>The provided credentials are incorrect</p>
                </div>
              ) : null}
            </Form>
          </>
          <p className="artistLinkToSignup">
            Don't have an account? <br></br>
            <Link className="artistPageLink" to={{ pathname: "/artistSignup" }}>
              Sign up
            </Link>
          </p>
>>>>>>> develop
        </div>
      </section>
    );
  } else {
    return <Redirect to={{ pathname: "/explore" }} />;
  }
};

export default Login;
