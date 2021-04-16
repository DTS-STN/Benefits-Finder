import React from "react";
import { LanguageToggle } from "./LanguageToggle";

export default {
  title: "Components/Atoms/LanguageToggle",
  component: LanguageToggle,
};

const Template = (args) => <LanguageToggle {...args} />;

export const EnglishToggle = Template.bind({});
export const FrenchToggle = Template.bind({});

EnglishToggle.args = {
  lang: "en",
  languageToggleText: "French",
  queryValues: "queryValue",
};

FrenchToggle.args = {
  lang: "fr",
  languageToggleText: "English",
  queryValues: "queryValue",
};
