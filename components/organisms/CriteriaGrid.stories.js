import React from "react";
import { CriteriaGrid } from "./CriteriaGrid";

import { SelectPicker } from "../atoms/SelectPicker";
import { NumInput } from "../atoms/NumInput";

import { CriteriaBox } from "../atoms/CriteriaBox";

export default {
  title: "Components/Organisms/CriteriaGrid",
  component: CriteriaGrid,
};

const criteriaBoxNum = [
  <CriteriaBox>
    <NumInput
      criteriaTitle="criteriaTitle1"
      placeholder="placeholder"
    ></NumInput>
  </CriteriaBox>,

  <CriteriaBox>
    <SelectPicker
      criteriaTitle="criteriaTitle2"
      id="id"
      name="Name"
      selects={[
        {
          criteriaSelect: "Ontario",
        },
        {
          criteriaSelect: "Alberta",
        },
      ]}
    ></SelectPicker>
  </CriteriaBox>,
];

const Template = (args) => <CriteriaGrid {...args}></CriteriaGrid>;

export const Primary = Template.bind({});

Primary.args = {
  children: criteriaBoxNum,
};
