import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import Auth from "../../utils/auth";
import { ADD_ARTIST } from "../../utils/mutations";
import { Link } from "react-router-dom";
// import Explore from "../pages/Explore";
import { Form } from "react-bootstrap";
import "../../components/Modal/HostModal.css";

function Modal({ closeModal }) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [addArtist, { error }] = useMutation(ADD_ARTIST);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await addArtist({
        variables: {
          email: formState.email,
          password: formState.password,
          name: formState.name,
          genre: formState.genre,
        },
      });
      const token = mutationResponse.data.addArtist.token;
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
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="title">
          <h1 className="artistSignup">Artist Signup</h1>
        </div>

        <div className="body">
          <Form onSubmit={handleFormSubmit} className="artistSignupForm">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={handleChange}
                id="artistSignupEmail"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={handleChange}
                id="artistSignupPassword"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPerformersName">
              <Form.Label>Performers Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter Name"
                onChange={handleChange}
                id="artistSignupName"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicMusic">
              <Form.Label>Genre of Music</Form.Label>
              <Form.Control
                type="musicGenre"
                placeholder="Genre"
                onChange={handleChange}
                id="artistSignupGenre"
              />
            </Form.Group>
          </Form>
        </div>

        {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null}

        <div className="footer">
          <button className="cancelBtnArtist" onClick={() => closeModal(false)}>
            Cancel
          </button>
          <Link>
            <button
              className="continueBtnArtist"
              //   to={{ pathname: "../pages/explore" }}
            >
              Continue
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Modal;
