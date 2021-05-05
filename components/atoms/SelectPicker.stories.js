import React from "react";
import { SelectPicker } from "./SelectPicker";

export default {
  title: "Components/Atoms/SelectPicker",
  component: SelectPicker,
};

const Template = (args) => <SelectPicker {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  criteriaTitle: "Title Text",
  id: "id",
  name: "Name",
  selects: [
    {
      criteriaSelect: "Ontario",
    },
    {
      criteriaSelect: "Alberta",
    },
  ],
};
