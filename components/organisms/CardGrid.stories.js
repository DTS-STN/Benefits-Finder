import React from "react";
import { CardGrid } from "./CardGrid";
import { BenefitCard } from "../molecules/BenefitCard";
import { PopularCategoryCard } from "../molecules/PopularCategoryCard";

export default {
  title: "Components/Organisms/CardGrid",
  component: CardGrid,
};

const benefitCards = [
  <BenefitCard
    key="1"
    id="1"
    title="benefit title 1"
    description="benefit description 1"
    applyLink="#"
    type="benefit type 1"
    program="program 1"
  />,
  <BenefitCard
    key="2"
    id="2"
    title="benefit title 2"
    description="benefit description 2"
    applyLink="#"
    type="benefit type 2"
    program="program 2"
  />,
  <BenefitCard
    key="3"
    id="3"
    title="benefit title 3"
    description="benefit description 3"
    applyLink="#"
    type="benefit type 3"
    program="program 3"
  />,
];

const categoryCards = [
  <PopularCategoryCard
    key="1"
    id="1"
    title="category title 1"
    description="category description 1"
    imgSource="/landscape.png"
    imgAltText="image alt text 1"
    type="category type 1"
  />,
  <PopularCategoryCard
    key="2"
    id="2"
    title="category title 2"
    description="category description 2"
    imgSource="/landscape.png"
    imgAltText="image alt text 2"
    type="category type 2"
  />,
  <PopularCategoryCard
    key="3"
    id="3"
    title="category title 3"
    description="category description 3"
    imgSource="/landscape.png"
    imgAltText="image alt text 3"
    type="category type 3"
  />,
];

const Template = (args) => <CardGrid {...args}></CardGrid>;

export const BenefitGrid = Template.bind({});
export const CategoryGrid = Template.bind({});

BenefitGrid.args = {
  children: benefitCards,
};

CategoryGrid.args = {
  children: categoryCards,
};
