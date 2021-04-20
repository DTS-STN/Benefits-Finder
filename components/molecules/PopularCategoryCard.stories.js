import { PopularCategoryCard } from "./PopularCategoryCard";
import logo from "../../public/wmms-blk.svg";

export default {
  title: "Components/Molecules/PopularCategoryCard",
  component: PopularCategoryCard,
  decorators: [
    (Story) => (
      <div className="flex w-full p-6">
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <PopularCategoryCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  id: "category-id",
  title: "Category Title",
  description: "Category description",
  type: "Category type",
  imgSource: "/landscape.png",
  altText: "Category image alt text",
};
