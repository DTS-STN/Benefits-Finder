import React from "react";
import { LocationAssumption } from "./LocationAssumption";

export default {
  title: "Components/Atoms/LocationAssumption",
  component: LocationAssumption,
};

const Template = (args) => <LocationAssumption {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  id: "location-assumption",
  isActive: true,
  location: "Quebec",
};
