import { useState, useEffect } from "react";
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
import { initializeOCR, read } from "./utils";

const NO_CONTENT_TEXT = "Nothing to display!";

const App = () => {
  const theme = createTheme({});
  const [content, setContent] = useState(NO_CONTENT_TEXT);
  const [ocr, setOcr] = useState(null);
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    if (!ocr) {
      initializeOCR().then((ocrInstance) => setOcr(ocrInstance));
    }
    return () => ocr?.terminate();
  }, [ocr]);

  const onCapture = async () => {
    if (!ocr) {
      return;
    }

    setProcessing(true);
    const result = await read(ocr);
    setContent(result?.data?.text || NO_CONTENT_TEXT);
    setProcessing(false);
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
            <Output text={content} processing={processing} />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default App;
