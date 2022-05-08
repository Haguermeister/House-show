import React from "react";
import "./Modal.css";
import { Form, Button } from "react-bootstrap";

function Modal({ closeModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="title">
          <h1 className="artistSignup">Artist Signup</h1>
          {/* <button className="closeX" onClick={() => closeModal(false)}> X </button> */}
        </div>

        <div className="body">
          <Form className="artistSignupForm">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPerformersName">
              <Form.Label>Performers Name</Form.Label>
              <Form.Control type="name" placeholder="Enter Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicMusic">
              <Form.Label>Genre of Music</Form.Label>
              <Form.Control type="musicGenre" placeholder="Genre" />
            </Form.Group>
          </Form>
        </div>

        <div className="footer">
          <button className="cancelBtnArtist" onClick={() => closeModal(false)}>
            Cancel
          </button>
          <button className="continueBtnArtist">Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
