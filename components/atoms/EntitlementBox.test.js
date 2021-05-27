import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { Primary } from "./EntitlementBox.stories";

expect.extend(toHaveNoViolations);

describe("EntitlementBox tests", () => {
  it.only("renders EntitlementBox in its primary state", () => {
    render(<Primary {...Primary.args} />);
    expect(screen.getByText("Children Text")).toBeTruthy();
  });

  it("has no a11y violations", async () => {
    const { container } = render(<Primary {...Primary.args} />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
