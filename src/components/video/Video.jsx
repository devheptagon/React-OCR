import styles from "./Video.module.scss";

function Video() {
  return <video autoPlay={true} muted={true} className={styles.Video}></video>;
}

export default Video;
