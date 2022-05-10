import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import Form from "react-bootstrap/Form";
import Host from "../assets/hostPic.jpeg";
import { LOGIN_HOST } from "../utils/mutations";
import Auth from "../utils/auth";
import { useHistory } from "react-router-dom";
import "./LoginHost.css";
<<<<<<< HEAD
import { Redirect } from "react-router-dom";

const LoginHost = () => {
  const { loggedIn } = Auth.loggedIn();
=======
import { Link } from "react-router-dom";

const LoginHost = () => {
  const [formStateEmail, setFormStateEmail] = useState();
  const [formStatePassword, setFormStatePassword] = useState();
>>>>>>> develop

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
  if (!loggedIn) {
    return (
      <section className="loginIn">
        <div className="media ">
          <img
            className="backgroundImageHostLogin"
            src={Host}
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
              <div className="flex-row flex-end submitButton"></div>
            </>
          </div>
        </div>
      </section>
    );
  } else return <Redirect to={{ pathname: "/explore" }} />;
=======
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
                  to={{ pathname: "./explore" }}
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
          <p className="hostLinkToSignup">
            Don't have an account? <br></br>
            <Link className="hostPageLink" to={{ pathname: "/hostSignup" }}>
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
>>>>>>> develop
};

export default LoginHost;
