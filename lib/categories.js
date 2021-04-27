import { fetchStrapi } from "./strapi";

// todo: determine what is a 'category'
export async function getPopularCategories(locale) {
  locale = locale ? locale.toUpperCase() : "";
  // for now we're just grabbing 3 randomly. there will eventually be some logic to which 3 we get, but for now just take the first 3
  return fetchStrapi("/overarching-programs?_limit=3").then((result) => {
    let programs = [];
    if (result.length > 0) {
      programs = result.map((program) => {
        const baseUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL;
        return {
          id: program[`id`],
          title: program[`Title_${locale}`],
          description: program[`Description_${locale}`],
          imgAltText: program[`ImageAltText_${locale}`],
          imgSource: `${
            program["Image"] ? baseUrl + program["Image"]["url"] : ""
          }`,
        };
      });
    }
    return programs;
  });
}
