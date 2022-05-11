import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import Auth from "../../utils/auth";
import { UPDATE_HOST } from "../../utils/mutations";
import { Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "../../components/Modal/profileModal.css";

function Modal({ closeModal }) {
  const [formStateFirstName, setFormStateFirstName] = useState();
  const [formStateLastName, setFormStateLastName] = useState();
  const [formStateEmail, setFormStateEmail] = useState();
  const [formStatePassword, setFromStatePassword] = useState();
  const [formStateUsername, setFormStateUsername] = useState();

  const [updateHost, { error }] = useMutation(UPDATE_HOST);
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
      const mutationResponse = await updateHost({ variables });
      console.log("response");
      const token = mutationResponse.data.updateHost.token;
    //   Auth.login(token, "host");
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
    <div className="profUpbg d-flex justify-content-center">
      <div className="profUpcont">

          <Form onSubmit={handleFormSubmit} className="">
            <Form.Group className="">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Email"
                value={formStateEmail}
                onChange={handleChangeEmail}
                id="hostProfileEmail"
              />
            </Form.Group>

            <Form.Group className="pt-4">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="text"
                value={formStatePassword}
                placeholder="********"
                onChange={handleChangePassword}
                id="hostProfilePassword"
              />
            </Form.Group>

            <Form.Group className="pt-4">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                value={formStateFirstName}
                placeholder="Enter First Name"
                onChange={handleChangeFirstName}
                id="hostProfileFirstName"
              />
            </Form.Group>

            <Form.Group className="pt-4">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                value={formStateLastName}
                placeholder="Enter Last Name"
                onChange={handleChangeLastName}
                id="hostProfileLastName"
              />
            </Form.Group>

            <Form.Group className="pt-4">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                value={formStateUsername}
                placeholder="Enter Username"
                onChange={handleChangeUsername}
                id="hostProfileUsername"
              />
            </Form.Group>
            <div className="d-flex justify-content-around pt-4">
              <button
                className="profileDelBtn"
                onClick={() => closeModal(false)}
              >
                Cancel
              </button>

              <button
                className="profileUpBtn"
                to={{ pathname: "../pages/account" }}
                type="submit">

                Update
              </button>
            </div>
          </Form>

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