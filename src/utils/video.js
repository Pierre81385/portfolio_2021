import { classes } from "istanbul-lib-coverage";
import React from "react";
import myVideo from "../assets/Black - 13495.mp4";

const BackgroundVideo = () => {
  return (
    <div className={classes.Container}>
      <video autoPlay="autoplay" loop="loop" muted className={classes.Video}>
        <source src={`${myVideo}`} type="video/mp4" />
      </video>
    </div>
  );
};

export default BackgroundVideo;
