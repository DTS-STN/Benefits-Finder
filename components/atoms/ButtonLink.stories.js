import { ButtonLink } from "./ButtonLink";

export default {
  title: "Components/Atoms/ButtonLink",
  component: ButtonLink,
  decorators: [
    (Story) => (
      <div className="flex p-6">
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <ButtonLink {...args} />;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});

Primary.args = {
  href: "#",
  text: "Primary button text",
  primary: true,
};

Secondary.args = {
  href: "#",
  text: "Secondary button text",
  primary: false,
};
