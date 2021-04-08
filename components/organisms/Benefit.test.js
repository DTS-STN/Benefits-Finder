import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { Primary } from "./Benefit.stories";

expect.extend(toHaveNoViolations);

describe("Benefit tests", () => {
  it("renders Benefit in its primary state", () => {
    render(<Primary {...Primary.args} />);
    const typeElement = screen.getByText("Benefit Type");
    const outcomesElement = screen.getByText("Benefit Outcomes");
    const providerElement = screen.getByText("Benefit Provider");
    expect(typeElement).toBeTruthy();
    expect(outcomesElement).toBeTruthy();
    expect(providerElement).toBeTruthy();
  });

  it("has no a11y violations", async () => {
    const { container } = render(<Primary {...Primary.args} />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
