import { BenefitCard } from "./BenefitCard";

export default {
  title: "Components/Molecules/BenefitCard",
  component: BenefitCard,
  decorators: [
    (Story) => (
      <div className="flex w-full justify-center p-6">
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <BenefitCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  id: "benefit-id",
  title: "Benefit Title",
  description: "Benefit description",
  applyLink: "#"
}