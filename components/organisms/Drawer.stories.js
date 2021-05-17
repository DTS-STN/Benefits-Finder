import React from "react";
import { Drawer } from "./Drawer";

export default {
  title: "Components/Organisms/Drawer",
  component: Drawer,
};

const childrenProps = "Children Content";

const Template = (args) => <Drawer {...args}></Drawer>;

export const Primary = Template.bind({});

Primary.args = {
  children: childrenProps,
};
