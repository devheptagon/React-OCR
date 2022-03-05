import {
  CssBaseline,
  Container,
  Grid,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import TopBar from "./components/top-bar/TopBar";
import Video from "./components/video/Video";

function App() {
  const theme = createTheme({});
  const onCapture = () => {};
  const onReset = () => {};

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <CssBaseline />
        <TopBar onCapture={onCapture} onReset={onReset} />
        <Grid container mt={2} mb={2}>
          <Grid item xs={12} md={6}>
            <Video />
          </Grid>
          <Grid item xs={12} md={6}></Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
