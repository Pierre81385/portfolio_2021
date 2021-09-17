import { classes } from "istanbul-lib-coverage";
import React from "react";
import myVideo from "../assets/Black - 13495.mp4";
import { Link } from "react-router-dom";

const BackgroundVideo = () => {
  const style = {
    video: {
      position: "absolute",
      right: 0,
      bottom: 0,
      minWidth: "100%",
      minHeight: "100%",
    },
  };
  return (
    <div className={classes.Container}>
      <video
        autoPlay="autoplay"
        loop="loop"
        muted
        playsInline
        className={classes.Video}
        style={style.video}
      >
        <source src={`${myVideo}`} type="video/mp4" />
      </video>
    </div>
  );
};

export default BackgroundVideo;
