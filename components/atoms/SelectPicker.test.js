import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { Primary } from "./SelectPicker.stories";

expect.extend(toHaveNoViolations);

describe("SelectPicker tests", () => {
  it.only("renders SelectPicker in its primary state", () => {
    render(<Primary {...Primary.args} />);

    Primary.args.selects.forEach((value) => {
      const item = screen.getByText(value.criteriaSelect);
      expect(item).toBeTruthy();
    });
  });

  it("has no a11y violations", async () => {
    const { container } = render(<Primary {...Primary.args} />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
