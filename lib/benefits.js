//TODO: get benefit data from better source
export function getBenefitData(id, t) {
  const benefits = getBenefits(t);
  let benefit;
  for (let i = 0; i < benefits.length; i++) {
    if (benefits[i].id === id) {
      benefit = benefits[i];
    }
  }

  return benefit;
}

//TODO: get benefit ids data from better source
export function getBenefitIds() {
  return [
    "benefit-1",
    "benefit-2",
    "benefit-3",
    "benefit-4",
    "benefit-5",
    "benefit-6",
  ];
  // return getBenefits(t).map((benefit) => {
  //   return {
  //     params: {
  //       id: benefit.id,
  //     },
  //   };
  // });
}

export function getBenefits(t) {
  return [
    {
      id: "benefit-1",
      title: t("benefits.benefit_1.title"),
      description: t("benefits.benefit_1.description"),
      type: t("benefits.benefit_1.type"),
      applyLink: t("benefits.benefit_1.applyLink"),
      outcomes: t("benefits.benefit_1.outcomes"),
      provider: t("benefits.benefit_1.provider"),
    },
    {
      id: "benefit-2",
      title: t("benefits.benefit_2.title"),
      description: t("benefits.benefit_2.description"),
      type: t("benefits.benefit_2.type"),
      applyLink: t("benefits.benefit_2.applyLink"),
      outcomes: t("benefits.benefit_2.outcomes"),
      provider: t("benefits.benefit_2.provider"),
    },
    {
      id: "benefit-3",
      title: t("benefits.benefit_3.title"),
      description: t("benefits.benefit_3.description"),
      type: t("benefits.benefit_3.type"),
      applyLink: t("benefits.benefit_3.applyLink"),
      outcomes: t("benefits.benefit_3.outcomes"),
      provider: t("benefits.benefit_3.provider"),
    },
    {
      id: "benefit-4",
      title: t("benefits.benefit_4.title"),
      description: t("benefits.benefit_4.description"),
      type: t("benefits.benefit_4.type"),
      applyLink: t("benefits.benefit_4.applyLink"),
      outcomes: t("benefits.benefit_4.outcomes"),
      provider: t("benefits.benefit_4.provider"),
    },
    {
      id: "benefit-5",
      title: t("benefits.benefit_5.title"),
      description: t("benefits.benefit_5.description"),
      type: t("benefits.benefit_5.type"),
      applyLink: t("benefits.benefit_5.applyLink"),
      outcomes: t("benefits.benefit_5.outcomes"),
      provider: t("benefits.benefit_5.provider"),
    },
    {
      id: "benefit-6",
      title: t("benefits.benefit_6.title"),
      description: t("benefits.benefit_6.description"),
      type: t("benefits.benefit_6.type"),
      applyLink: t("benefits.benefit_6.applyLink"),
      outcomes: t("benefits.benefit_6.outcomes"),
      provider: t("benefits.benefit_6.provider"),
    },
  ];
}
