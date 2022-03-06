import { useEffect } from "react";
import { Typography } from "@mui/material";
import styles from "./Output.module.scss";
import Tesseract from "tesseract.js";

const initializeOCR = async () => {
  const tesseractWorker = Tesseract.createWorker();
  await tesseractWorker.load();
  await tesseractWorker.loadLanguage("eng");
  await tesseractWorker.initialize("eng");
  return tesseractWorker;
};

const createCanvas = () => {
  const canvas = document.createElement("canvas");
  const video = document.querySelector("video");
  canvas.width = video.width;
  canvas.height = video.height;
  return canvas;
};

const Output = (props) => {
  useEffect(() => {
    initializeOCR().then((tesseractWorker) => {
      const canvas = createCanvas();
      props.onCanvasCreate(canvas, tesseractWorker);
    });
  }, [props]);

  return (
    <div className={styles.Output}>
      <Typography variant="h6" component="h2">
        Scanned Output:
      </Typography>
      <pre>{props.processing ? "Processing..." : props.text}</pre>
    </div>
  );
};

export default Output;
