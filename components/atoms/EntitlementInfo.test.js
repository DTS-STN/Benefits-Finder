import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { Primary } from "./EntitlementInfo.stories";

expect.extend(toHaveNoViolations);

describe("EntitlementInfo tests", () => {
  it("renders EntitlementInfo in its primary state", () => {
    render(<Primary {...Primary.args} />);
    expect(screen.getByText("title")).toBeTruthy();
    expect(screen.getByText("body")).toBeTruthy();
    expect(screen.findByText("green")).toBeTruthy();
  });

  it("has no a11y violations", async () => {
    const { container } = render(<Primary {...Primary.args} />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
