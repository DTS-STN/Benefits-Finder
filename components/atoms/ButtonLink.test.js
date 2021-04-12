import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { Primary } from "./ButtonLink.stories";

expect.extend(toHaveNoViolations);

// need to mock next/link because it throws an error when using the real one
// and I don't really know why
jest.mock("next/link", () => {
  return ({ children }) => {
    return children;
  };
});

describe("ButtonLink tests", () => {
  it("renders a Benefit Card in its primary state", () => {
    render(<Primary {...Primary.args} />);
    const button = screen.getByText("Button text");
    expect(button).toBeInTheDocument();
  });

  it("has no a11y violations", async () => {
    const { container } = render(<Primary {...Primary.args} />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
