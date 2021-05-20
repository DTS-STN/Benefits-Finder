import { fetchStrapi } from "./strapi";

/**
 * get a single benefit
 *
 * @param {*} id the id of the benefit
 * @param {*} lang the language requested
 * @returns benefit information based on the id passed in
 */
export async function getBenefitData(id, lang) {
  const benefit = await fetchStrapi(`/benefits/${id}`);
  return mapBenefit(benefit, lang);
}

/**
 * gets a list of benefit ids
 *
 * @returns a list of ids of the benefits found in strapi
 */
export async function getBenefitIds() {
  const benefits = await getBenefits();
  return benefits.map((benefit) => {
    return `${benefit.id}`;
  });
}

/**
 * gets a list of benefits
 *
 * @param {*} lang the language requested
 * @returns a list of benefits found in strapi
 */
export async function getBenefits(lang) {
  const data = await fetchStrapi("/benefits");

  const benefits = data.map((benefit) => {
    return mapBenefit(benefit, lang);
  });

  return benefits;
}

/**
 * converts the benefit model from strapi into the benefit model used in the app
 *
 * @param {*} benefit the benefit model coming from strapi
 * @returns the benefit model that is usable in our app
 */
function mapBenefit(benefit, lang) {
  console.log(benefit);
  lang = lang ? lang.toUpperCase() : "";
  return {
    id: benefit[`id`],
    benefitKey: benefit["BenefitKey"],
    title: benefit[`Title_${lang}`],
    description: benefit[`Description_${lang}`],
    applyLink: benefit[`ApplyLink_${lang}`] ?? "#",
    outcomes: benefit[`Outcomes_${lang}`],
    provider: benefit[`Provider_${lang}`],
    type: benefit[`type`] ? benefit[`type`][`Type_${lang}`] : "",
    program: benefit[`program`] ? benefit[`program`][`Title_${lang}`] : "",
    collections: benefit[`bundles`].map((collection) => {
      return collection[`Title_${lang}`];
    }),
  };
}
