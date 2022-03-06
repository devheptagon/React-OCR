import React, { useEffect } from "react";
import styles from "./Video.module.scss";

const Video = () => {
  useEffect(() => {
    const video = document.querySelector("video");
    navigator.mediaDevices
      ?.getUserMedia({ video: true })
      .then((stream) => (video.srcObject = stream))
      .catch((err) => console.log(err));
  }, []);

  return (
    <video
      crossOrigin="anonymous"
      autoPlay={true}
      muted={true}
      className={styles.Video}
    ></video>
  );
};

export default Video;
