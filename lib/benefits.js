import { fetchStrapi } from "./strapi";

export async function getBenefitData(id, lang) {
  const benefits = await getBenefits(lang);
  let benefit;
  for (let i = 0; i < benefits.length; i++) {
    if (benefits[i].id === id) {
      benefit = benefits[i];
    }
  }
  return benefit;
}

export async function getBenefitIds() {
  const benefits = await getBenefits();
  return benefits.map((benefit) => {
    return benefit.id;
  });
}

export async function getBenefits(lang) {
  return fetchStrapi("/benefits").then((result) => {
    const benefits = result.map((benefit) => {
      if (lang === "fr")
        return {
          id: benefit.Slug,
          title: benefit.ProductNameFr,
          description: benefit.TaglineFr,
          type: benefit.Type,
          applyLink: benefit.ApplyLinkFr,
          outcomes: benefit.OutcomesFr,
          provider: benefit.ProviderFr,
        };
      else
        return {
          id: benefit.Slug,
          title: benefit.ProductNameEn,
          description: benefit.TaglineEn,
          type: benefit.Type,
          applyLink: benefit.ApplyLinkEn,
          outcomes: benefit.OutcomesEn,
          provider: benefit.ProviderEn,
        };
    });
    return benefits;
  });
}
