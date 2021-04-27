import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import {
  BenefitGrid,
  CategoryGrid,
  benefitCards,
  categoryCards,
} from "./CardGrid.stories";

expect.extend(toHaveNoViolations);

describe("CardGrid tests", () => {
  it("renders a Benefit Grid in its primary state", () => {
    render(<BenefitGrid {...BenefitGrid.args} />);

    for (let i in benefitCards.length) {
      let benefitData = benefitCards[i];
      let benefitCard = screen.getByText(benefitData.title);
      expect(benefitCard).toBeTruthy();
    }
  });

  it("renders a Category Grid in its primary state", () => {
    render(<CategoryGrid {...CategoryGrid.args} />);

    for (let i in categoryCards.length) {
      let data = categoryCards[i];
      let categoryCard = screen.getByText(data.title);
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
