import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import Auth from "../../utils/auth";
import { ADD_ARTIST } from "../../utils/mutations";
import { Link } from "react-router-dom";
import Explore from "../../pages/Explore";
import { Form } from "react-bootstrap";
import "../../components/Modal/ArtistModal.css";
import { useHistory } from "react-router-dom";

function Modal({ closeModal }) {
  const [formStateEmail, setFormStateEmail] = useState();
  const [formStatePassword, setFormStatePassword] = useState();
  const [formStateName, setFormStateName] = useState();
  const [formStateGenre, setFormStateGenre] = useState();

  const [addArtist, { error }] = useMutation(ADD_ARTIST);
  let history = useHistory();

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log("email", formStateEmail);
    try {
      const mutationResponse = await addArtist({
        variables: {
          email: formStateEmail,
          password: formStatePassword,
          name: formStateName,
          musicType: formStateGenre,
        },
      });
      console.log("response", mutationResponse);
      const token = mutationResponse.data.addArtist.token;
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

  const handleChangeName = (event) => {
    setFormStateName(event.target.value);
  };

  const handleChangeGenre = (event) => {
    setFormStateGenre(event.target.value);
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="title">
          <h1 className="artistSignup">Artist Signup</h1>
        </div>

        <div className="body">
          <Form onSubmit={handleFormSubmit} className="artistSignupForm">
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="text"
                value={formStateEmail}
                placeholder="Enter email"
                onChange={handleChangeEmail}
                id="artistSignupEmail"
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
                id="artistSignupPassword"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Performers Name</Form.Label>
              <Form.Control
                type="text"
                value={formStateName}
                placeholder="Enter Name"
                onChange={handleChangeName}
                id="artistSignupName"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Genre of Music</Form.Label>
              <Form.Control
                type="text"
                value={formStateGenre}
                placeholder="Genre"
                onChange={handleChangeGenre}
                id="artistSignupGenre"
              />
            </Form.Group>
            <div className="footer">
              <button
                className="cancelBtnArtist"
                onClick={() => closeModal(false)}
              >
                Cancel
              </button>

              <button
                className="continueBtnArtist"
                to={{ pathname: "../pages/explore" }}
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
