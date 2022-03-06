import { screen, render, fireEvent } from "@testing-library/react";
import { ThemeProvider, createTheme } from "@mui/material";
import TopBar from "./TopBar";

const mockClickHandler = jest.fn();

const setup = () => {
  const theme = createTheme({});
  return render(
    <ThemeProvider theme={theme}>
      <TopBar onCapture={mockClickHandler} onReset={mockClickHandler} />
    </ThemeProvider>
  );
};

describe("TopBar", () => {
  test("should display Title", () => {
    setup();
    expect(screen.getByText("OCR Demo With React.js")).toBeInTheDocument();
  });

  test("should have Capture button", () => {
    setup();
    const captureButton = screen.getByText("Capture Text");
    expect(captureButton).toBeInTheDocument();

    fireEvent.click(captureButton);
    expect(mockClickHandler).toBeCalled();
  });

  test("should have Reset button", () => {
    setup();
    const resetButton = screen.getByText("Reset");
    expect(resetButton).toBeInTheDocument();

    fireEvent.click(resetButton);
    expect(mockClickHandler).toBeCalled();
  });
});
