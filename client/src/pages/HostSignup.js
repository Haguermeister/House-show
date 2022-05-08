import React, { useState } from "react";
import Modal from "../components/Modal";
import Host from "../assets/davidHost.jpeg";
import "./HostSignup.css";

const ArtistSignup = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <section>
      <div className="hostSignupMainSection">
        <div className="hostSignupPhoto">
          <img
            className="hostSignupBackgroundImage"
            src={Host}
            alt="host looking over venue"
          />
        </div>

        <div className="hostCoralBack"></div>
        <div className="hostGreyBack"></div>

        <div className="hostInfoBlock">
          <p className="hostIntro">
            Become a Host and have access to thousands of performers at your
            fingertips.
          </p>
        </div>

        <button
          className="hostOpenModalBtn"
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
