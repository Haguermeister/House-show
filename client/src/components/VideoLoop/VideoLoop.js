import React from "react";
import backgroundVideo from "./videoBackground.mp4";

const VideoLoop = (props) => {
  return (
    <div>
      <video autoplay loop muted id="video">
        <source src={backgroundVideo} type="video/mp4" />
      </video>
    </div>
  );
};
export default VideoLoop;
