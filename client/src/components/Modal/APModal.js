import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import Auth from "../../utils/auth";
import { UPDATE_ARTIST } from "../../utils/mutations";
import { Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function Modal({ closeModal }) {
  const [formStateEmail, setFormStateEmail] = useState();
  const [formStatePassword, setFormStatePassword] = useState();
  const [formStateName, setFormStateName] = useState();
  const [formStateMusicType, setFormStateMusicType] = useState();
  const [formStateUsername, setFormStateUsername] = useState();

  const [updateArtist, { error }] = useMutation(UPDATE_ARTIST);
  let history = useHistory();

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const variables = {
      email: formStateEmail,
      password: formStatePassword,
      name: formStateName,
      musicType: formStateMusicType,
      username: formStateUsername,
    };

    try {
      console.log(variables);
      const mutationResponse = await updateArtist({ variables });
      console.log("response");
      const token = mutationResponse.data.updateArtist.token;
      // Auth.update(token, "artist");
      history.push("/account");
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

  const handleChangeName = (event) => {
    setFormStateName(event.target.value);
  };

  const handleChangeMusicType = (event) => {
    setFormStateMusicType(event.target.value);
  };

  const handleChangeUsername = (event) => {
    setFormStateUsername(event.target.value);
  };

  return (
    <div className="">
      <div className="">
        <div className="">
          <h1 className="">Update account</h1>
        </div>

        <div className="">
          <Form onSubmit={handleFormSubmit} className="">
            <Form.Group className="">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="text"
                value={formStateEmail}
                placeholder="Enter email"
                onChange={handleChangeEmail}
                id="artistProfileEmail"
              />
              <Form.Text className="">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="text"
                value={formStatePassword}
                placeholder="Password"
                onChange={handleChangePassword}
                id="artistProfilePassword"
              />
            </Form.Group>

            <Form.Group className="">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                value={formStateUsername}
                placeholder=""
                onChange={handleChangeUsername}
                id="artistProfileUsername"
              />
            </Form.Group>

            <Form.Group className="">
              <Form.Label>Performers Name</Form.Label>
              <Form.Control
                type="text"
                value={formStateName}
                placeholder="Enter Name"
                onChange={handleChangeName}
                id="artistProfileName"
              />
            </Form.Group>

            <Form.Group className="">
              <Form.Label>Genre of Music</Form.Label>
              <Form.Control
                type="text"
                value={formStateMusicType}
                placeholder="Genre"
                onChange={handleChangeMusicType}
                id="artistProfileGenre"
              />
            </Form.Group>
            <div className="">
              <button
                className=""
                onClick={() => closeModal(false)}
              >
                Cancel
              </button>

              <button
                className=""
                to={{ pathname: "../pages/account" }}
                type="submit"
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