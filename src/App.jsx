import { useState } from "react";
import {
  CssBaseline,
  Container,
  Grid,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import TopBar from "./components/top-bar/TopBar";
import Video from "./components/video/Video";
import Output from "./components/output/Output";
import img from "./eng_bw.png";

const NO_CONTENT_TEXT = "Nothing to display!";

const App = () => {
  const theme = createTheme({});
  const [content, setContent] = useState(NO_CONTENT_TEXT);
  const [canvas, setCanvas] = useState(null);
  const [ocr, setOcr] = useState(null);
  const [processing, setProcessing] = useState(false);

  const onCanvasCreate = (newCanvas, newOcr) => {
    if (!canvas) setCanvas(newCanvas);
    if (!ocr) setOcr(newOcr);
  };

  const onCapture = async () => {
    if (!canvas || !ocr) {
      return;
    }
    setProcessing(true);
    //const video = document.querySelector("video");
    //canvas.getContext("2d").drawImage(video, 0, 0, video.width, video.height);
    const result = await ocr.recognize(img);
    setProcessing(false);
    setContent(result?.data?.text || NO_CONTENT_TEXT);
    await ocr.terminate();
  };

  const onReset = () => {
    setProcessing(false);
    setContent(NO_CONTENT_TEXT);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <CssBaseline />
        <TopBar onCapture={onCapture} onReset={onReset} />
        <Grid container mt={2} mb={2}>
          <Grid item xs={12} md={6}>
            <Video />
          </Grid>
          <Grid item xs={12} md={6}>
            <Output
              text={content}
              onCanvasCreate={onCanvasCreate}
              processing={processing}
            />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default App;
