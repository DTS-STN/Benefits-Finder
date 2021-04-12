import { ButtonLink } from "./ButtonLink";

export default {
  title: "Components/Atoms/ButtonLink",
  component: ButtonLink,
  decorators: [
    (Story) => (
      <div className="flex w-full p-6">
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <ButtonLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  href: "#",
  text: "Button text",
};
