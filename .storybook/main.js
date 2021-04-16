
module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: (config) => {
    // useTranslation() hook in next-i18next is looking for a server environment and storybooks
    // runs client-side, so use client-side react-i18next to allow components to render outside server environment
    config.resolve.alias = {
      ...config.resolve.alias,
      'next-i18next': 'react-i18next'
    }
    return config;
  }
};
