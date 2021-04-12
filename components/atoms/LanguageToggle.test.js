import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";

import { EnglishToggle, FrenchToggle } from "./LanguageToggle.stories";

expect.extend(toHaveNoViolations);

describe("LanguageToggle tests", () => {
  it("renders LanguageToggle in its English state", () => {
    render(<EnglishToggle {...EnglishToggle.args} />);
    const textElement = screen.getByText("French");
    expect(textElement).toBeTruthy();
  });

  it("renders LanguageToggle in its French state", () => {
    render(<FrenchToggle {...FrenchToggle.args} />);
    const textElement = screen.getByText("English");
    expect(textElement).toBeTruthy();
  });

  //TODO: fix Next js <Link> tag causing a11y violations
  it.skip("has no a11y violations", async () => {
    const { containerEnglish } = render(
      <EnglishToggle {...EnglishToggle.args} />
    );
    const resultsEnglish = await axe(containerEnglish);

    const { containerFrench } = render(<FrenchToggle {...FrenchToggle.args} />);
    const resultsFrench = await axe(containerFrench);
    expect(resultsEnglish).toHaveNoViolations();
    expect(resultsFrench).toHaveNoViolations();
  });
});
