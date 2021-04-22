import { fetchStrapi } from "./strapi";

export async function getBenefitData(id, lang) {
  const benefits = await getBenefits(lang);
  const benefit = await fetchStrapi(`/benefits/${id}`);
  lang = lang ? lang.toUpperCase() : "";
  return {
    id: benefit[`id`],
    title: benefit[`Title_${lang}`],
    description: benefit[`Description_${lang}`],
    applyLink: benefit[`ApplyLink_${lang}`] ?? "#",
    outcomes: benefit[`Outcomes_${lang}`],
    provider: benefit[`Provider_${lang}`],
    type: benefit[`type`][`Type_${lang}`],
    program: benefit[`program`][`Title_${lang}`],
    collections: benefit[`collections`].map((collection) => {
      return collection[`Title_${lang}`];
    }),
  };
}

export async function getBenefitIds() {
  const benefits = await getBenefits();
  return benefits.map((benefit) => {
    return `${benefit.id}`;
  });
}

export async function getBenefits(lang) {
  lang = lang ? lang.toUpperCase() : "";
  return fetchStrapi("/benefits").then((result) => {
    const benefits = result.map((benefit) => {
      return {
        id: benefit[`id`],
        title: benefit[`Title_${lang}`],
        description: benefit[`Description_${lang}`],
        applyLink: benefit[`ApplyLink_${lang}`] ?? "#",
        outcomes: benefit[`Outcomes_${lang}`],
        provider: benefit[`Provider_${lang}`],
        type: benefit[`type`][`Type_${lang}`],
        program: benefit[`program`][`Title_${lang}`],
        collections: benefit[`collections`].map((collection) => {
          return collection[`Title_${lang}`];
        }),
      };
    });
    return benefits;
  });
}
