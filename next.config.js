const { i18n } = require("./next-i18next.config");
const { getDomain } = require("./lib/utils");

module.exports = {
  i18n,
  images: {
    domains: [`${getDomain(process.env.NEXT_PUBLIC_STRAPI_API_URL)}`],
  },
};
