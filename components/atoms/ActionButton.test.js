import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import {
  Primary,
  Rounded,
  WithCounter,
  StartAgain,
  Disabled,
} from "./ActionButton.stories";

it("renders ActionButton in its primary state", () => {
  render(<Primary {...Primary.args} />);
  expect(screen.getByRole("button")).toHaveTextContent(Primary.args.text);
});

it("renders ActionButton in its rounded state", () => {
  render(<Rounded {...Rounded.args} />);
  expect(screen.getByRole("button")).toHaveTextContent(Rounded.args.text);
  expect(screen.getByRole("button").classList).toContain("rounded-md");
});

it.skip("renders ActionButton in its withCounter state", () => {
  render(<WithCounter {...WithCounter.args} />);
  expect(screen.getByRole("button")).toHaveTextContent(WithCounter.args.text);
  expect(screen.getByRole("button").classList).toContain("bg-gray-light");
});

it("renders StartAgainButton in its icon state", () => {
  render(<StartAgain {...StartAgain.args} />);
  expect(screen.getByText(StartAgain.args.text)).toBeTruthy();
  expect(document.getElementsByTagName("span")[0].classList).toContain(
    "icon-loop2"
  );
});

it("renders ActionButton disabled", () => {
  render(<Disabled {...Disabled.args} />);
  expect(screen.getByRole("button")).toHaveTextContent(Disabled.args.text);
  expect(screen.getByRole("button")).toHaveAttribute("disabled");
});
