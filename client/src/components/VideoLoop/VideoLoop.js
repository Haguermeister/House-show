import React from "react";
//import backgroundVideo from "./backgroundVideo.mp4";

const VideoLoop = () => {
  return (
    <video autoplay loop muted id="video">
      {/* <source src={backgroundVideo} type="video/mp4" /> */}
    </video>
  );
};
export default VideoLoop;
