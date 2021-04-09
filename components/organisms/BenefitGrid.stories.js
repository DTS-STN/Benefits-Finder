import { BenefitGrid } from "./BenefitGrid";

export default {
  title: "Components/Organisms/BenefitGrid",
  component: BenefitGrid,
};

const Template = (args) => <BenefitGrid {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  benefits: [
    {
      id: "benefit-1",
      title: "Benefit 1 Card",
      description:
        "This is a description for the first benefit card " +
        "about the benefit that this card represents.",
      type: "Funding",
      applyLink: "#",
    },
    {
      id: "benefit-2",
      title: "Benefit 2 Card",
      description:
        "This is a description for the first benefit card " +
        "about the benefit that this card represents.",
      type: "Program",
      applyLink: "#",
    },
    {
      id: "benefit-3",
      title: "Benefit 3 Card",
      description:
        "This is a description for the first benefit card " +
        "about the benefit that this card represents.",
      type: "Information",
      applyLink: "#",
    },
    {
      id: "benefit-4",
      title: "Benefit 4 Card",
      description:
        "This is a description for the first benefit card " +
        "about the benefit that this card represents.",
      type: "Feature",
      applyLink: "#",
    },
    {
      id: "benefit-5",
      title: "Benefit 5 Card",
      description:
        "This is a description for the first benefit card " +
        "about the benefit that this card represents.",
      type: "Tool",
      applyLink: "#",
    },
    {
      id: "benefit-6",
      title: "Benefit 6 Card",
      description:
        "This is a description for the first benefit card " +
        "about the benefit that this card represents.",
      type: "Payment / Tax credit",
      applyLink: "#",
    },
  ],
};
