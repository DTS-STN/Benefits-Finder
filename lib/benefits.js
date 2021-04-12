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

export function getBenefits() {
  return [
    {
      id: "benefit-1",
      title: "Benefit 1 Card",
      description:
        "This is a description for the first benefit card " +
        "about the benefit that this card represents.",
      type: "Funding",
      applyLink: "#",
      outcomes: "Benefit 1 outcomes",
      provider: "Benefit 1 provider",
    },
    {
      id: "benefit-2",
      title: "Benefit 2 Card",
      description:
        "This is a description for the first benefit card " +
        "about the benefit that this card represents.",
      type: "Program",
      applyLink: "#",
      outcomes: "Benefit 2 outcomes",
      provider: "Benefit 2 provider",
    },
    {
      id: "benefit-3",
      title: "Benefit 3 Card",
      description:
        "This is a description for the first benefit card " +
        "about the benefit that this card represents.",
      type: "Information",
      applyLink: "#",
      outcomes: "Benefit 3 outcomes",
      provider: "Benefit 3 provider",
    },
    {
      id: "benefit-4",
      title: "Benefit 4 Card",
      description:
        "This is a description for the first benefit card " +
        "about the benefit that this card represents.",
      type: "Feature",
      applyLink: "#",
      outcomes: "Benefit 4 outcomes",
      provider: "Benefit 4 provider",
    },
    {
      id: "benefit-5",
      title: "Benefit 5 Card",
      description:
        "This is a description for the first benefit card " +
        "about the benefit that this card represents.",
      type: "Tool",
      applyLink: "#",
      outcomes: "Benefit 5 outcomes",
      provider: "Benefit 5 provider",
    },
    {
      id: "benefit-6",
      title: "Benefit 6 Card",
      description:
        "This is a description for the first benefit card " +
        "about the benefit that this card represents.",
      type: "Payment / Tax credit",
      applyLink: "#",
      outcomes: "Benefit 6 outcomes",
      provider: "Benefit 6 provider",
    },
  ];
}
