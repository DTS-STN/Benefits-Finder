import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { Primary } from "./Footer.stories";

expect.extend(toHaveNoViolations);

describe("Footer", () => {
  it("renders with government links", async () => {
    render(<Primary {...Primary.args} />);
    expect(await screen.findByText("Contact us")).toBeTruthy();
    expect(await screen.findByText("Departments and agencies")).toBeTruthy();
    expect(await screen.findByText("Public service and military")).toBeTruthy();
    expect(await screen.findByText("News")).toBeTruthy();
    expect(
      await screen.findByText("Treaties, laws and regulations")
    ).toBeTruthy();
    expect(await screen.findByText("Government-wide reporting")).toBeTruthy();
    expect(await screen.findByText("Prime Minister")).toBeTruthy();
    expect(await screen.findByText("How government works")).toBeTruthy();
    expect(await screen.findByText("Open government")).toBeTruthy();
  });

  it("renders with about links", async () => {
    render(<Primary {...Primary.args} />);
    expect(await screen.findByText("Social media")).toBeTruthy();
    expect(await screen.findByText("Mobile applications")).toBeTruthy();
    expect(await screen.findByText("About Canada.ca")).toBeTruthy();
    expect(await screen.findByText("Terms and conditions")).toBeTruthy();
    expect(await screen.findByText("Privacy")).toBeTruthy();
  });

  it("has no a11y violations", async () => {
    const { container } = render(<Primary {...Primary.args} />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
