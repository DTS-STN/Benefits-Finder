import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { Primary } from "./LocationAssumption.stories";

expect.extend(toHaveNoViolations);

describe("LocationAssumption tests", () => {
  it("renders LocationAssumption in its primary state", () => {
    render(<Primary {...Primary.args} />);
    expect(screen.findByPlaceholderText("Quebec")).toBeTruthy();
  });

  it("has no a11y violations", async () => {
    const { container } = render(<Primary {...Primary.args} />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
