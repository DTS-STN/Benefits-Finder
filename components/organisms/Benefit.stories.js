import React from "react";
import { Benefit } from "./Benefit";

export default {
  title: "Components/Organisms/Benefit",
  component: Benefit,
};

const Template = (args) => <Benefit {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  type: "Benefit Type",
  outcomes: "Benefit Outcomes",
  provider: "Benefit Provider",
};
