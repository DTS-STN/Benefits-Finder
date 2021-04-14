import { Header } from "./Header";

export default {
  title: "Components/Molecules/Header",
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
