import React from "react";
import { NumInput } from "./NumInput";

export default {
  title: "Components/Atoms/NumInput",
  component: NumInput,
};

const Template = (args) => <NumInput {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  id: "num-input-id",
  placeholder: "Placeholder Text",
};
