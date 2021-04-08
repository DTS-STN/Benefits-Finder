import { act, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { Primary } from "./BenefitCard.stories";

expect.extend(toHaveNoViolations);

describe("BenefitCard tests", () => {
  it("renders a Benefit Card in its primary state", () => {
    render(<Primary {...Primary.args} />);
    const title = screen.getByText("Benefit Title");
    const description = screen.getByText("Benefit description");
    const benefitLink = screen.getByText("More info");
    const applyLink = screen.getByText("Apply now!");
    expect(title).toBeTruthy();
    expect(description).toBeTruthy();
    expect(benefitLink.href).toBe("http://localhost/benefit/benefit-id");
    expect(applyLink.href).toBe("http://localhost/#");
  });

  it("has no a11y violations", async () => {
    const { container } = render(<Primary {...Primary.args} />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
