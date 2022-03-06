import Tesseract from "tesseract.js";

export const initializeOCR = async () => {
  const tesseractWorker = Tesseract.createWorker();
  await tesseractWorker.load();
  await tesseractWorker.loadLanguage("eng");
  await tesseractWorker.initialize("eng");
  return tesseractWorker;
};

export const read = async (ocr) => {
  const video = document.querySelector("video");
  const canvas = document.createElement("canvas");
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  canvas.getContext("2d").drawImage(video, 0, 0);
  const result = await ocr.recognize(canvas.toDataURL("image/jpeg"));
  return result;
};
