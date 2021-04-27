import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { BenefitGrid, CategoryGrid } from "./CardGrid.stories";

expect.extend(toHaveNoViolations);

describe("CardGrid tests", () => {
  it("renders a Benefit Grid in its primary state", () => {
    render(<BenefitGrid {...BenefitGrid.args} />);

    for (let i in 3) {
      let benefitCard = screen.getByText(`benefit title ${i}`);
      expect(benefitCard).toBeTruthy();
    }
  });

  it("renders a Category Grid in its primary state", () => {
    render(<CategoryGrid {...CategoryGrid.args} />);

    for (let i in 3) {
      let categoryCard = screen.getByText(`category title ${i}`);
      expect(categoryCard).toBeTruthy();
    }
  });

  it("has no a11y violations", async () => {
    const { container } = render(<BenefitGrid {...BenefitGrid.args} />);
    //const { container } = render(<CategoryGrid {...BenefitGrid.args} />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
