import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { Primary, Secondary } from "./ButtonLink.stories";

expect.extend(toHaveNoViolations);

describe("ButtonLink tests", () => {
  it("renders a Button Link in its primary state", () => {
    render(<Primary {...Primary.args} />);
    const button = screen.getByText("Primary button text");

    expect(button).toBeInTheDocument();
  });

  it("renders a Button Link in its secondary state", () => {
    render(<Secondary {...Secondary.args} />);
    const button = screen.getByText("Secondary button text");

    expect(button).toBeInTheDocument();
  });

  it("primary has no a11y violations", async () => {
    const { container } = render(<Primary {...Primary.args} />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it("secondary has no a11y violations", async () => {
    const { container } = render(<Secondary {...Secondary.args} />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
