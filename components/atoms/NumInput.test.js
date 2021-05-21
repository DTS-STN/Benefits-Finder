import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { Primary } from "./NumInput.stories";

expect.extend(toHaveNoViolations);

describe("NumInput tests", () => {
  it("renders NumInput in its primary state", () => {
    render(<Primary {...Primary.args} />);
    expect(screen.findByPlaceholderText("Placeholder Text")).toBeTruthy();
  });

  it("has no a11y violations", async () => {
    const { container } = render(<Primary {...Primary.args} />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
