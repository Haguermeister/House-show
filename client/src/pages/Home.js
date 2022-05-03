import React from "react";
import { Link } from "react-router-dom";
import VideoLoop from "../components/VideoLoop/VideoLoop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Auth from "../utils/auth"
const Home = () => {
  return (
    <div className="">
      <VideoLoop />
      {Auth.loggedIn() && (<Link to={{ pathname: "/explore" }}>Explore</Link>)}
      <Link to={{ pathname: "/login" }}>I want to Host</Link>
      <Link to={{ pathname: "/login" }}>I want to Perform</Link>
    </div>
  );
};
export default Home;
