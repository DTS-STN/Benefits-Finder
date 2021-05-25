import React from "react";
import { EntitlementInfo } from "./EntitlementInfo";

export default {
  title: "Components/Atoms/EntitlementInfo",
  component: EntitlementInfo,
};

const Template = (args) => <EntitlementInfo {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  title: "title",
  body: "body",
  bgColor: "green",
  textColor: "blue",
};
