import React from "react";
import { DrawerItem } from "./DrawerItem";

export default {
  title: "Components/Atoms/DrawerItem",
  component: DrawerItem,
};

const Template = (args) => <DrawerItem {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  summary: "Summary Text",
  children: "Children Text",
};
