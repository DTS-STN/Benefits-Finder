import { AlphaBanner } from "./AlphaBanner";

export default {
  title: "Components/Molecules/AlphaBanner",
  component: AlphaBanner,
};

const Template = (args) => <AlphaBanner {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  bannerText: "Alpha Banner Text",
  bannerDesc: "Alpha Banner Desc",
  feedbackButtonLink: "Feedback",
  link: "#",
  linkText: "linkText",
};
