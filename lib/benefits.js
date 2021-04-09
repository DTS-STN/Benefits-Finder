//TODO: get benefit data from better source
export function getBenefitData(id, t) {
  if (id == "oas") {
    return {
      name: t("benefits.oas.name"),
      type: t("benefits.oas.type"),
      outcomes: t("benefits.oas.outcomes"),
      provider: t("benefits.oas.provider"),
    };
  }
  if (id == "ei") {
    return {
      name: t("benefits.ei.name"),
      type: t("benefits.ei.type"),
      outcomes: t("benefits.ei.outcomes"),
      provider: t("benefits.ei.provider"),
    };
  }
  return null;
}

//TODO: get benefit ids data from better source
export function getBenefitIds() {
  return [
    {
      params: {
        id: "oas",
      },
    },
    {
      params: {
        id: "ei",
      },
    },
  ];
}

export function getBenefits(t) {
  return [
    {
      id: t("benefits.benefit_1.id"),
      title: t("benefits.benefit_1.title"),
      description: t("benefits.benefit_1.description"),
      type: t("benefits.benefit_1.type"),
      applyLink: t("benefits.benefit_1.applyLink"),
    },
    {
      id: t("benefits.benefit_2.id"),
      title: t("benefits.benefit_2.title"),
      description: t("benefits.benefit_2.description"),
      type: t("benefits.benefit_2.type"),
      applyLink: t("benefits.benefit_2.applyLink"),
    },
    {
      id: t("benefits.benefit_3.id"),
      title: t("benefits.benefit_3.title"),
      description: t("benefits.benefit_3.description"),
      type: t("benefits.benefit_3.type"),
      applyLink: t("benefits.benefit_3.applyLink"),
    },
    {
      id: t("benefits.benefit_4.id"),
      title: t("benefits.benefit_4.title"),
      description: t("benefits.benefit_4.description"),
      type: t("benefits.benefit_4.type"),
      applyLink: t("benefits.benefit_4.applyLink"),
    },
    {
      id: t("benefits.benefit_5.id"),
      title: t("benefits.benefit_5.title"),
      description: t("benefits.benefit_5.description"),
      type: t("benefits.benefit_5.type"),
      applyLink: t("benefits.benefit_5.applyLink"),
    },
    {
      id: t("benefits.benefit_6.id"),
      title: t("benefits.benefit_6.title"),
      description: t("benefits.benefit_6.description"),
      type: t("benefits.benefit_6.type"),
      applyLink: t("benefits.benefit_6.applyLink"),
    },
  ];
}
