import React from "react";
import { Link } from "react-router-dom";
import VideoLoop from "../components/VideoLoop/VideoLoop";
import "./Home.css";
import auth from "../utils/auth";
const Home = () => {
  const [userType, loggedIn] = auth.loggedIn();
  return (
    <div className="w-100 d-flex flex-column align-items-center justify-content-center ">
      <VideoLoop className="mb-5" />
      <div className="w-100 d-flex flex-row align-items-center">
        <Link
          className="signIn-Link btn mx-auto"
          to={{ pathname: "/loginHost" }}
        >
          Sign in as Host
        </Link>
        <Link className=" signIn-Link btn mx-auto" to={{ pathname: "/login" }}>
          Sign in as Artist
        </Link>
      </div>
      <div className="w-100 d-flex flex-row align-items-center mb-4">
        <Link className="btn button mx-auto" to={{ pathname: "/login" }}>
          I want to Host
        </Link>
        <Link className="btn button mx-auto" to={{ pathname: "/artistSignup" }}>
          I want to Perform
        </Link>
      </div>
    </div>
  );
};
export default Home;
