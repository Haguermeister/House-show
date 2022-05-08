import React, { useState } from "react";
import "./ArtistSignup.css";
import Artist from "../assets/juanArtist.jpeg";
import Modal from "../components/Modal";

const ArtistSignup = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <section>
      <div className="mainSection">
        <div className="artistPhoto">
          <img className="backgroundImage" src={Artist} alt="folk singer" />
        </div>

        <div className="coralBack"></div>
        <div className="greyBack"></div>

        <div className="infoBlock">
          <p className="artistInto">
            Become an Artist and have access to thousands of venues at your
            fingertips.
          </p>
        </div>

        <button
          className="openModalBtn"
          onClick={() => {
            setOpenModal(true);
          }}
        >
          Signup
        </button>
        {openModal && <Modal closeModal={setOpenModal} />}
      </div>
    </section>
  );
};

export default ArtistSignup;
