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
