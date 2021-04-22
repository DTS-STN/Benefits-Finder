import Link from "next/link";
import { AlphaBanner } from "./AlphaBanner";

export default {
  title: "Components/Molecules/AlphaBanner",
  component: AlphaBanner,
};

const Template = (args) => <AlphaBanner {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  alphaBannerText: "Alpha Banner Text",
  alphaBannerDesc: "Alpha Banner Desc",
  feedbackButton: "Feedback",
  link: "#",
  linkText: "linkText",
};
