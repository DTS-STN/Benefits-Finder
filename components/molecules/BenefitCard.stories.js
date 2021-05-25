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
  eligibilityCriteria: "Benefit eligibility criteria",
  type: "Benefit type",
  applyLink: "#",
  eligibility: true,
};

export const NotEligible = Template.bind({});
NotEligible.args = {
  id: "1",
  title: "Benefit Title",
  description: "Benefit description",
  eligibilityCriteria: "Benefit eligibility criteria",
  type: "Benefit type",
  applyLink: "#",
  eligibility: false,
};
