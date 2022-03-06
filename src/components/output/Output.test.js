import { render } from "@testing-library/react";
import Output from "./Output.jsx";

describe("Output", () => {
  test("should render Output", () => {
    const { container } = render(<Output text="hello world" />);
    const element = container.querySelector("pre");
    expect(element).toBeInTheDocument();
    expect(element.textContent).toBe("hello world");
  });
});
