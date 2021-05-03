import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { Primary } from "./CriteriaBox.stories";

it("renders CriteriaBox in its primary state", () => {
  render(<Primary {...Primary.args} />);

  expect(screen.getByText("Title Text")).toBeTruthy();
});
