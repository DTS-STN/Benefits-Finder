import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { Primary } from "./AlphaBanner.stories";

expect.extend(toHaveNoViolations);

describe("AlphaBanner tests", () => {
  it("renders the Alpha Banner in its primary state", () => {
    render(<Primary {...Primary.args} />);
    const bannerText = screen.getByText("Alpha Banner Text");
    expect(bannerText).toBeTruthy();
    const bannerDesc = screen.getByText("Alpha Banner Desc");
    expect(bannerDesc).toBeTruthy();
    const linkText = screen.getByText("linkText");
    expect(linkText).toBeTruthy();
  });

  it("has no a11y violations", async () => {
    const { container } = render(<Primary {...Primary.args} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
