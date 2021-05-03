import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { Primary } from "./CriteriaGrid.stories";

expect.extend(toHaveNoViolations);

describe("CriteriaGrid tests", () => {
  it("renders a Criteria Grid in its primary state", () => {
    render(<Primary {...Primary.args} />);

    for (let i in 2) {
      let categoryCard = screen.getByText(`criteriaTitle${i}`);
      expect(categoryCard).toBeTruthy();
    }
  });

  it("has no a11y violations", async () => {
    const { container } = render(<Primary {...Primary.args} />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
