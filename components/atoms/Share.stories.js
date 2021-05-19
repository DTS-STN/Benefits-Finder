import React from "react";
import { Share } from "./Share";

export default {
  title: "Components/Atoms/Share",
  component: Share,
};

const Template = (args) => <Share {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  href: "https://link.com",
  text: "Share",
};
