import React from "react";
import { Link } from "react-router-dom";
import VideoLoop from "../components/VideoLoop/VideoLoop";
import "./Home.css";
const Home = () => {
  return (
    <div className="">
      <VideoLoop />
      <Link className="btn button p-2" to={{ pathname: "/explore" }}>
        Explore
      </Link>
      <Link className="btn button p-2" to={{ pathname: "/login" }}>
        I want to Host
      </Link>
      <Link className="btn button p-2" to={{ pathname: "/login" }}>
        I want to Perform
      </Link>
    </div>
  );
};
export default Home;
