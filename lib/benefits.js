//TODO: get benefit data from better source
export function getBenefitData(id) {
  if (id == "oas") {
    return {
      name: "Old age security",
      type: "oas type",
      outcomes: "oas outcomes",
      provider: "oas provider",
    };
  }
  if (id == "ei") {
    return {
      name: "Employment insurance",
      type: "ei type",
      outcomes: "ei outcomes",
      provider: "ei provider",
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