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
          title: benefit.Title_FR,
          description: benefit.Description_FR,
          type: benefit.Type.Type_FR,
          applyLink: benefit.ApplyLink_FR,
          outcomes: benefit.Outcomes_FR,
          provider: benefit.Provider_FR,
        };
      else
        return {
          id: benefit.Slug,
          title: benefit.Title_EN,
          description: benefit.Description_EN,
          type: benefit.Type.Type_EN,
          applyLink: benefit.ApplyLink_EN,
          outcomes: benefit.Outcomes_EN,
          provider: benefit.Provider_EN,
        };
    });
    return benefits;
  });
}
