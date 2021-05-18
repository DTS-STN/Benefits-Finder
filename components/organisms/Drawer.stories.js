import React from "react";
import { Drawer } from "./Drawer";

export default {
  title: "Components/Organisms/Drawer",
  component: Drawer,
};

const Template = (args) => <Drawer {...args}></Drawer>;

export const Primary = Template.bind({});

Primary.args = {
  children: "Children Content",
};
