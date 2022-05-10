import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import Auth from "../../utils/auth";
import { ADD_HOST } from "../../utils/mutations";
import Explore from "../../pages/Explore";
import { Form } from "react-bootstrap";
import "../../components/Modal/HostModal.css";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

function Modal({ closeModal }) {
  const [formStateFirstName, setFormStateFirstName] = useState();
  const [formStateLastName, setFormStateLastName] = useState();
  const [formStateEmail, setFormStateEmail] = useState();
  const [formStatePassword, setFromStatePassword] = useState();
  const [formStateUsername, setFormStateUsername] = useState();

  const [addHost, { error }] = useMutation(ADD_HOST);
  let history = useHistory();

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const variables = {
      email: formStateEmail,
      password: formStatePassword,
      firstName: formStateFirstName,
      lastName: formStateLastName,
      username: formStateUsername,
    };

    try {
      console.log(variables);
      const mutationResponse = await addHost({ variables });
      console.log("response");
      const token = mutationResponse.data.addHost.token;
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
    setFromStatePassword(event.target.value);
  };

  const handleChangeFirstName = (event) => {
    setFormStateFirstName(event.target.value);
  };

  const handleChangeLastName = (event) => {
    setFormStateLastName(event.target.value);
  };

  const handleChangeUsername = (event) => {
    setFormStateUsername(event.target.value);
  };

  return (
    <div className="hostModalBackground">
      <div className="hostModalContainer">
        <div className="hostTitle">
          <h1 className="hostSignup">Host Signup</h1>
        </div>

        <div className="hostBody">
          <Form onSubmit={handleFormSubmit} className="hostSignupForm">
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="text"
                value={formStateEmail}
                placeholder="Enter email"
                onChange={handleChangeEmail}
                id="hostSignupEmail"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="text"
                value={formStatePassword}
                placeholder="Password"
                onChange={handleChangePassword}
                id="hostSignupPassword"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                value={formStateFirstName}
                placeholder="First Name"
                onChange={handleChangeFirstName}
                id="hostSignupFirstName"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                value={formStateLastName}
                placeholder="Last Name"
                onChange={handleChangeLastName}
                id="hostSignupLastName"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                value={formStateUsername}
                placeholder="Username"
                onChange={handleChangeUsername}
                id="hostSignupUsername"
              />
            </Form.Group>
            <div className="hostFooter mt-5">
              <button
                className="cancelBtnHost"
                onClick={() => closeModal(false)}
              >
                Cancel
              </button>
              <button
                onClick={() => closeModal(true)}
                className="continueBtnHost"
                to={{ pathname: "/explore" }}
              >
                Continue
              </button>
            </div>
          </Form>
        </div>

        {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Modal;
