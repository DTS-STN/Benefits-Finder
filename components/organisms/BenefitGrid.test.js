import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { Primary } from "./BenefitGrid.stories";

expect.extend(toHaveNoViolations);

describe("BenefitGrid tests", () => {
  it("renders a Benefit Grid in its primary state", () => {
    render(<Primary {...Primary.args} />);

    for (let i in Primary.args.benefits) {
      let benefitData = Primary.args.benefits[i];
      let benefitCard = screen.getByText(benefitData.title);
      expect(benefitCard).toBeTruthy();
    }
  });

  it("has no a11y violations", async () => {
    const { container } = render(<Primary {...Primary.args} />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
