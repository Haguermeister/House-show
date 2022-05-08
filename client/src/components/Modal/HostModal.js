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
    <div className="hostModalBackground">
      <div className="hostModalContainer">
        <div className="hostTitle">
          <h1 className="hostSignup">Host Signup</h1>
        </div>

        <div className="hostBody">
          <Form onSubmit={handleFormSubmit} className="hostSignupForm">
            <Form.Group className="mb-3" controlId="hostFormBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={handleChange}
                id="hostSignupEmail"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="hostFormBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={handleChange}
                id="hostSignupPassword"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicVenueName">
              <Form.Label>Venue Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter Name"
                onChange={handleChange}
                id="hostSignupName"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="hostFormBasicMusic">
              <Form.Label>Preferred Genre of Music</Form.Label>
              <Form.Control
                type="musicGenre"
                placeholder="Genre"
                onChange={handleChange}
                id="hostSignupGenre"
              />
            </Form.Group>
          </Form>
        </div>

        {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null}

        <div className="hostFooter">
          <button className="cancelBtnHost" onClick={() => closeModal(false)}>
            Cancel
          </button>
          <Link>
            <button
              className="continueBtnHost"
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
