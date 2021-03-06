import React from "react";
import { SelectPicker } from "./SelectPicker";

export default {
  title: "Components/Atoms/SelectPicker",
  component: SelectPicker,
};

const Template = (args) => <SelectPicker {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  id: "id",
  name: "Name",
  ariaLabel: "AriaLabel",
  selects: [
    {
      criteriaSelect: "Ontario",
    },
    {
      criteriaSelect: "Alberta",
    },
  ],
};
