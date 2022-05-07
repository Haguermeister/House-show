import React from "react";
import "./ArtistSignup.css";
import Artist from "../assets/juanArtist.jpeg";
import { Link } from "react-router-dom";
import auth from "../utils/auth";

const ArtistSignup = () => {
  const [userType, loggedIn] = auth.loggedIn();

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

        <div className="flex-row flex-end signupButton">
          <Link className="btn button mx-auto" to={{ pathname: "/explore" }}>
            Sign up
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ArtistSignup;
