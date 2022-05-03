import React from "react";
import { Link } from "react-router-dom";
import VideoLoop from "../components/VideoLoop/VideoLoop";
import "./Home.css";
const Home = () => {
  return (
    <div className="w-100 d-flex flex-column align-items-center justify-content-center ">
      <VideoLoop />
      <Link className="btn button" to={{ pathname: "/explore" }}>
        Explore
      </Link>
      <div className="w-100 d-flex flex-row align-items-center">
        <Link className="btn button mx-auto" to={{ pathname: "/login" }}>
          I want to Host
        </Link>
        <Link className="btn button mx-auto" to={{ pathname: "/login" }}>
          I want to Perform
        </Link>
      </div>
    </div>
  );
};
export default Home;
