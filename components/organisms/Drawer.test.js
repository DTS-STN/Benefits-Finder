import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { Primary } from "./Drawer.stories";

expect.extend(toHaveNoViolations);

describe("Drawer tests", () => {
  it("renders a Drawer in its primary state", () => {
    render(<Primary {...Primary.args} />);
    expect(screen.getAllByText("Children Content")).toBeTruthy();
  });

  it("has no a11y violations", async () => {
    const { container } = render(<Primary {...Primary.args} />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
