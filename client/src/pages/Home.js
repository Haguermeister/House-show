import React from "react";
import { Link } from "react-router-dom";
import VideoLoop from "../components/VideoLoop/VideoLoop";
import "./Home.css";
const Home = () => {
  return (
    <div className="d-flex  justify-content-around">
      <VideoLoop />
      <Link className="btn button" to={{ pathname: "/explore" }}>
        Explore
      </Link>
      <Link className="btn button" to={{ pathname: "/login" }}>
        I want to Host
      </Link>
      <Link className="btn button" to={{ pathname: "/login" }}>
        I want to Perform
      </Link>
    </div>
  );
};
export default Home;
