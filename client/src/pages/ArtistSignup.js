import React from "react";
import "./ArtistSignup.css";
import Artist from "../assets/juanArtist.PNG";

const ArtistSignup = () => {
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
      </div>
    </section>
  );
};

export default ArtistSignup;
