import React from "react";
import { EntitlementBox } from "./EntitlementBox";

export default {
  title: "Components/Atoms/EntitlementBox",
  component: EntitlementBox,
};

const Template = (args) => <EntitlementBox {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  children: "Children Text",
};
