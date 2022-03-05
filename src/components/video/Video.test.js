import { render } from "@testing-library/react";
import Video from "./Video";

describe("Video", () => {
  test("should render Video", () => {
    Object.defineProperty(HTMLMediaElement.prototype, "muted", {
      set: () => {},
    });
    const wrapper = render(<Video />);
    expect(wrapper.container.querySelector("video")).toBeInTheDocument();
  });
});
