import { render } from "@testing-library/react";
import Output from "./Output.jsx";

describe("Output", () => {
  test("should render Output", () => {
    const wrapper = render(<Output text="hello world" />);
    const element = wrapper.container.querySelector("pre");
    expect(element).toBeInTheDocument();
    expect(element.textContent).toBe("hello world");
  });
});
