import React from "react";
import auth from "../utils/auth";
const ArtistSignup = () => {
  const [userType, loggedIn] = auth.loggedIn();

  return (
    <section>
      <p>Hellow World</p>
    </section>
  );
};

export default ArtistSignup;
