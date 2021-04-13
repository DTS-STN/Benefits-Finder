//TODO: get benefit data from better source
export function getBenefitData(id) {
  const benefits = getBenefits();
  let benefit;
  for (let i = 0; i < benefits.length; i++) {
    if (benefits[i].id === id) {
      benefit = benefits[i];
    }
  }

  return benefit;

  // if (id == "oas") {
  //   return {
  //     name: "Old age security",
  //     type: "oas type",
  //     outcomes: "oas outcomes",
  //     provider: "oas provider",
  //   };
  // }
  // if (id == "ei") {
  //   return {
  //     name: "Employment insurance",
  //     type: "ei type",
  //     outcomes: "ei outcomes",
  //     provider: "ei provider",
  //   };
  // }
  // return null;
}

//TODO: get benefit ids data from better source
export function getBenefitIds() {
  return getBenefits().map((benefit) => {
    return {
      params: {
        id: benefit.id,
      },
    };
  });
}

export function getBenefits(t) {
  return [
    {
      id: t("benefits.benefit_1.id"),
      title: t("benefits.benefit_1.title"),
      description: t("benefits.benefit_1.description"),
      type: t("benefits.benefit_1.type"),
      applyLink: t("benefits.benefit_1.applyLink"),
      outcomes: "Benefit 1 outcomes",
      provider: "Benefit 1 provider",
    },
    {
      id: t("benefits.benefit_2.id"),
      title: t("benefits.benefit_2.title"),
      description: t("benefits.benefit_2.description"),
      type: t("benefits.benefit_2.type"),
      applyLink: t("benefits.benefit_2.applyLink"),
      outcomes: "Benefit 2 outcomes",
      provider: "Benefit 2 provider",
    },
    {
      id: t("benefits.benefit_3.id"),
      title: t("benefits.benefit_3.title"),
      description: t("benefits.benefit_3.description"),
      type: t("benefits.benefit_3.type"),
      applyLink: t("benefits.benefit_3.applyLink"),
      outcomes: "Benefit 3 outcomes",
      provider: "Benefit 3 provider",
    },
    {
      id: t("benefits.benefit_4.id"),
      title: t("benefits.benefit_4.title"),
      description: t("benefits.benefit_4.description"),
      type: t("benefits.benefit_4.type"),
      applyLink: t("benefits.benefit_4.applyLink"),
      outcomes: "Benefit 4 outcomes",
      provider: "Benefit 4 provider",
    },
    {
      id: t("benefits.benefit_5.id"),
      title: t("benefits.benefit_5.title"),
      description: t("benefits.benefit_5.description"),
      type: t("benefits.benefit_5.type"),
      applyLink: t("benefits.benefit_5.applyLink"),
      outcomes: "Benefit 5 outcomes",
      provider: "Benefit 5 provider",
    },
    {
      id: t("benefits.benefit_6.id"),
      title: t("benefits.benefit_6.title"),
      description: t("benefits.benefit_6.description"),
      type: t("benefits.benefit_6.type"),
      applyLink: t("benefits.benefit_6.applyLink"),
      outcomes: "Benefit 6 outcomes",
      provider: "Benefit 6 provider",
    },
  ];
}
