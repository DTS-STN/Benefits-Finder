const { i18n } = require("./next-i18next.config");

module.exports = {
  i18n,
  images: {
    domains: ["localhost", "benefits-finder-cms-api-dev.dev.dts-stn.com" ],
  },
  env: {
    NEXT_IP_LOCATION_API_URL: process.env.NEXT_IP_LOCATION_API_URL,
  }
};
