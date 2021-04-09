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
    },
    {
      id: "benefit-2",
      title: "Benefit 2 Card",
      description:
        "This is a description for the first benefit card " +
        "about the benefit that this card represents.",
      type: "Program",
      applyLink: "#",
    },
    {
      id: "benefit-3",
      title: "Benefit 3 Card",
      description:
        "This is a description for the first benefit card " +
        "about the benefit that this card represents.",
      type: "Information",
      applyLink: "#",
    },
    {
      id: "benefit-4",
      title: "Benefit 4 Card",
      description:
        "This is a description for the first benefit card " +
        "about the benefit that this card represents.",
      type: "Feature",
      applyLink: "#",
    },
    {
      id: "benefit-5",
      title: "Benefit 5 Card",
      description:
        "This is a description for the first benefit card " +
        "about the benefit that this card represents.",
      type: "Tool",
      applyLink: "#",
    },
    {
      id: "benefit-6",
      title: "Benefit 6 Card",
      description:
        "This is a description for the first benefit card " +
        "about the benefit that this card represents.",
      type: "Payment / Tax credit",
      applyLink: "#",
    },
  ];
}
