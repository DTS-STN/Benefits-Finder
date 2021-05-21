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
  <CriteriaBox key="1">
    <NumInput
      id="num-input-id"
      criteriaTitle="criteriaTitle1"
      placeholder="placeholder"
    ></NumInput>
  </CriteriaBox>,

  <CriteriaBox key="2">
    <SelectPicker
      criteriaTitle="criteriaTitle2"
      id="id"
      name="Name"
      ariaLabel="arialLabel"
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
