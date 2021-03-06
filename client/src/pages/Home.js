import React from "react";
import { Link } from "react-router-dom";
import VideoLoop from "../components/VideoLoop/VideoLoop";
import "./Home.css";
import auth from "../utils/auth";
const Home = () => {
  const [userType, loggedIn] = auth.loggedIn();
  if (!loggedIn) {
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
          <Link
            className=" signIn-Link btn mx-auto"
            to={{ pathname: "/login" }}
          >
            Sign in as Artist
          </Link>
        </div>
        <div className="w-100 d-flex flex-row align-items-center mb-4">
          <div className="w-100 d-flex flex-row align-items-center mb-4">
            <Link
              className="btn button mx-auto"
              to={{ pathname: "/hostSignup" }}
            >
              I want to Host
            </Link>
            <Link
              className="btn button mx-auto"
              to={{ pathname: "/artistSignup" }}
            >
              I want to Perform
            </Link>
          </div>
        </div>
      </div>
    );
  } else if (userType === "host") {
    return (
      <div className="w-100 d-flex flex-column align-items-center justify-content-center ">
        <VideoLoop className="mb-5" />
        <div className="w-100 d-flex flex-row align-items-center">
          <Link
            className="signIn-Link col-6 p-3 exploreBtn btn mx-auto"
            to={{ pathname: "/explore" }}
          >
            Start Booking Artists
          </Link>
        </div>
      </div>
    );
  } else if (userType === "artist") {
    return (
      <div className="w-100 d-flex flex-column align-items-center justify-content-center ">
        <VideoLoop className="mb-5" />
        <div className="w-100 d-flex flex-row align-items-center">
          <Link
            className="signIn-Link col-6 p-3 exploreBtn btn mx-auto"
            to={{ pathname: "/explore" }}
          >
            Find a Venue
          </Link>
        </div>
      </div>
    );
  }
};
export default Home;
