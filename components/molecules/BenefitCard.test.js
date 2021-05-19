import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { Primary, NotEligible } from "./BenefitCard.stories";

expect.extend(toHaveNoViolations);

describe("BenefitCard tests", () => {
  it("renders a Benefit Card in its primary state", () => {
    render(<Primary {...Primary.args} />);
    const title = screen.getByText("Benefit Title");
    const description = screen.getByText("Benefit description");
    const eligibilityCriteria = screen.getByText(
      "Benefit eligibility criteria"
    );
    const type = screen.getByText("Benefit type");
    const benefitLink = screen.getByText("moreInfo");
    const applyLink = screen.getByText("applyNow");

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(eligibilityCriteria).toBeInTheDocument();
    expect(type).toBeInTheDocument();
    expect(benefitLink).toBeInTheDocument();
    expect(applyLink).toBeInTheDocument();
  });

  it("renders a Benefit Card in its not eligible state", () => {
    const { container } = render(<NotEligible {...NotEligible.args} />);
    expect(container.firstChild.classList.contains("bg-gray-300")).toBe(true);
  });

  it("has no a11y violations", async () => {
    const { container } = render(<Primary {...Primary.args} />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
