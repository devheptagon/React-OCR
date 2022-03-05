import {
  CssBaseline,
  Container,
  Grid,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import TopBar from "./components/TopBar";

function App() {
  const theme = createTheme({});

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <CssBaseline />
        <TopBar />
      </Container>
    </ThemeProvider>
  );
}

export default App;
