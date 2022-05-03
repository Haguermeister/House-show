import React from "react";
import backgroundVideo from "./videoBackground.mp4";
import "./VideoLoop.css";
const VideoLoop = (props) => {
  return (
    <div className="videoContainer">
      <video loop muted autoPlay controls="" className="videoFrame">
        <source src={backgroundVideo} />
      </video>
    </div>
  );
};
export default VideoLoop;
