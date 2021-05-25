import { fetchStrapi } from "./strapi";

export async function getBundles(locale) {
  locale = locale ? locale.toUpperCase() : "";

  return fetchStrapi("/bundles").then((result) => {
    let bundles = [];
    if (result.length > 0) {
      bundles = result.map((bundle) => {
        const baseUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL;
        return {
          id: bundle[`id`],
          slug: bundle[`slug`],
          title: bundle[`Title_${locale}`],
          description: bundle[`Description_${locale}`],
          imgAltText: bundle[`ImageAltText_${locale}`],
          imgSource: `${
            bundle["Image"] ? baseUrl + bundle["Image"]["url"] : ""
          }`,
        };
      });
    }
    return programs;
  });
}
