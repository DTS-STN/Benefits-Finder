import { BenefitCard } from "./BenefitCard";

export default {
  title: "Components/Molecules/BenefitCard",
  component: BenefitCard,
  decorators: [
    (Story) => (
      <div className="flex w-full p-6">
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <BenefitCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  id: "1",
  title: "Benefit Title",
  description: "Benefit description",
  type: "Benefit type",
  applyLink: "#",
  eligibility: true,
};

export const NotEligibile = Template.bind({});
NotEligibile.args = {
  id: "1",
  title: "Benefit Title",
  description: "Benefit description",
  type: "Benefit type",
  applyLink: "#",
  eligibility: false,
};
