import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { Primary } from "./Share.stories";

expect.extend(toHaveNoViolations);

describe("Share tests", () => {
  it("renders Share in its primary state", () => {
    render(<Primary {...Primary.args} />);
    expect(screen.getByText("Share")).toBeTruthy();
    // expect(getByText("Share").href).toBe("https://link.com");
  });

  it("has no a11y violations", async () => {
    const { container } = render(<Primary {...Primary.args} />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
