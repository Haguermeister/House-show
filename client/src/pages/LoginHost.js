import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import Form from "react-bootstrap/Form";
import Host from "../assets/hostPic.jpeg";
import { LOGIN_HOST } from "../utils/mutations";
import Auth from "../utils/auth";
import { useHistory } from "react-router-dom";
import "./LoginHost.css";

const LoginHost = () => {
  const [formStateEmail, setFormStateEmail] = useState();
  const [formStatePassword, setFormStatePassword] = useState();

  const [login, { error }] = useMutation(LOGIN_HOST);
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
      history.push("/explore");
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

  return (
    <section className="hostLogin">
      <div className="hostMedia ">
        <img
          className="backgroundImageHostLogin"
          src={Host}
          alt="host looking over venue"
          style={{ width: "100%", height: "100%" }}
        />
        <h1 className="hostOverlayText">Sign in</h1>

        <div className="hostLogin">
          <>
            <Form onSubmit={handleFormSubmit} className="hostLoginForm">
              <Form.Label htmlFor="loginEmail"></Form.Label>
              <Form.Control
                placeholder="host@email.com"
                type="text"
                id="hostLoginEmail"
                onChange={handleChangeEmail}
                value={formStateEmail}
              />
              <Form.Text id="passwordHelpBlock" muted></Form.Text>

              <Form.Label htmlFor="hostLoginPassword"></Form.Label>
              <Form.Control
                placeholder="******"
                type="text"
                id="hostInputPassword"
                onChange={handleChangePassword}
                value={formStatePassword}
              />

              <div className="flex-row flex-end">
                <button
                  className="btn hostLoginButton mx-auto"
                  to={{ pathname: "/explore" }}
                >
                  Sign in
                </button>
              </div>
              {error ? (
                <div className="hostErrorText">
                  <p>The provided credentials are incorrect</p>
                </div>
              ) : null}
            </Form>
          </>
        </div>
      </div>
    </section>
  );
};

export default LoginHost;
