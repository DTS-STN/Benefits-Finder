import React from "react";
import { ActionButton } from "./ActionButton";

export default {
  title: "Components/Atoms/ActionButton",
  component: ActionButton,
};

const Template = (args) => <ActionButton {...args} />;

export const Primary = Template.bind({});
export const Rounded = Template.bind({});
export const WithCounter = Template.bind({});
export const StartAgain = Template.bind({});
export const Disabled = Template.bind({});
export const Linklook = Template.bind({});

Primary.args = {
  text: "Example Action 🚀",
};

Rounded.args = {
  text: "Example Rounded Action 🚀",
  rounded: true,
};

Linklook.args = {
  text: "Example Link Look 🚀",
  linklook: true,
  className: "shadow-none underline bg-white",
};

StartAgain.args = {
  notFullRound: true,
  className:
    "bg-lightBlue-700 text-white border-gray-400 hover:bg-blue-700 hover:text-white focus:bg-blue-900 focus:text-white focus:ring",
  icon: "icon-loop2 my-1 mr-4",
  text: "Start again and clear answers",
};

Disabled.args = {
  text: "Disabled Button 🚀",
  disabled: true,
  invert: true,
};
