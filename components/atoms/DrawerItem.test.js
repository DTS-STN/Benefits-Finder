import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { Primary } from "./DrawerItem.stories";

expect.extend(toHaveNoViolations);

describe("DrawerItem tests", () => {
  it.only("renders DrawerItem in its primary state", () => {
    render(<Primary {...Primary.args} />);

    expect(screen.getByText("Summary Text")).toBeTruthy();
    expect(screen.getByText("Children Text")).toBeTruthy();
  });

  it("has no a11y violations", async () => {
    const { container } = render(<Primary {...Primary.args} />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
