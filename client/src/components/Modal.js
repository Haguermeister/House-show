import React from "react";

function Modal({ closeModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <button onClick={() => closeModal(false)}> X </button>

        <div className="title">
          <h1>Artist Signup</h1>
        </div>

        <div className="body">
          <p>Form Form Form</p>
        </div>

        <div className="footer">
          <button onClick={() => closeModal(false)}>Cancel</button>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
