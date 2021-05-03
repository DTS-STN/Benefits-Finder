import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { Primary } from "./PopularCategoryCard.stories";
import { act } from "react-dom/test-utils";

expect.extend(toHaveNoViolations);

describe("PopularCategoryCard tests", () => {
  it("renders a Popular Category Card in its primary state", async () => {
    render(<Primary {...Primary.args} />);
    const title = screen.getByText("Category Title");
    const description = screen.getByText("Category description");
    const type = screen.getByText("Category type");

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(type).toBeInTheDocument();
  });

  it("has no a11y violations", async () => {
    const { container } = render(<Primary {...Primary.args} />);
    let results;
    await act(async () => {
      results = await axe(container);
    });
    expect(results).toHaveNoViolations();
  });
});
