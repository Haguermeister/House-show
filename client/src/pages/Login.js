import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import Form from "react-bootstrap/Form";
import Musician from "../assets/musician.jpeg";
import { LOGIN_ARTIST } from "../utils/mutations";
import Auth from "../utils/auth";
import { useHistory } from "react-router-dom";
import "./Login.css";
import { Link } from "react-router-dom";
import auth from "../utils/auth";
import { Redirect } from "react-router-dom";
const Login = () => {
  const [formStateEmail, setFormStateEmail] = useState();
  const [formStatePassword, setFormStatePassword] = useState();

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
      const token = mutationResponse.data.loginArtist.token;
      Auth.login(token, "artist");
      history.push("explore");
    } catch (e) {
      console.log(e);
    }
  };
  const { loggedIn } = auth.loggedIn();

  const handleChangeEmail = (event) => {
    setFormStateEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setFormStatePassword(event.target.value);
  };
  if (!loggedIn) {
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
              <Link
                className="artistPageLink"
                to={{ pathname: "/artistSignup" }}
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </section>
    );
  } else {
    return <Redirect to={{ pathname: "/explore" }} />;
  }
};

export default Login;
