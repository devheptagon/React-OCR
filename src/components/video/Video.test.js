import { render } from "@testing-library/react";
import Video from "./Video";

describe("Video", () => {
  test("should render Video", () => {
    Object.defineProperty(HTMLMediaElement.prototype, "muted", {
      set: () => {},
    });
    const { container } = render(<Video />);
    expect(container.querySelector("video")).toBeInTheDocument();
  });
});
