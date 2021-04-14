import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { Primary } from "./Header.stories";

expect.extend(toHaveNoViolations);

describe("Header", () => {
  it("renders with english and french GoC title", async () => {
    render(<Primary {...Primary.args} />);
    const en = await screen.findByText("Government of Canada");
    const fr = await screen.findByText("Gouvernment du Canada");
    expect(en).toBeTruthy();
    expect(fr).toBeTruthy();
  });

  it("renders with the menu", () => {
    render(<Primary {...Primary.args} />);
    expect(screen.findByText("Menu")).toBeTruthy();
  });

  it("has no a11y violations", async () => {
    const { container } = render(<Primary {...Primary.args} />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
