import fetchMock from "fetch-mock";
import { getPopularCategories } from "./categories";

describe("categories helper functions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("fetches popular categories", async () => {
    fetchMock.getOnce("http://localhost:1337/overarching-programs?_limit=3", {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: mockCategories,
    });

    const data = await getPopularCategories("en");
    expect(data.length).toEqual(3);
    expect(data[0].title).toEqual("Canadian Pension Plan");
    expect(data[1].title).toEqual("Employment Insurance");
    expect(data[2].title).toEqual("International Register of Electors");
  });

  it("returns the correct format of data - English", async () => {
    fetchMock.getOnce("http://localhost:1337/overarching-programs?_limit=3", {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: mockCategories,
    });

    const data = await getPopularCategories("en");
    expect(data[0]).toEqual({
      id: 1,
      title: "Canadian Pension Plan",
      description: "Canadian Pension Plan",
      imgAltText: "a test image",
      imgSource: "",
    });
  });

  it("returns the correct format of data - French", async () => {
    fetchMock.getOnce("http://localhost:1337/overarching-programs?_limit=3", {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: mockCategories,
    });

    const data = await getPopularCategories("fr");
    expect(data[0]).toEqual({
      id: 1,
      title: "(FR) Canadian Pension Plan",
      description: "(FR) Canadian Pension Plan",
      imgAltText: "(FR) a test image",
      imgSource: "",
    });
  });
});

const mockCategories = [
  {
    id: 1,
    Title_EN: "Canadian Pension Plan",
    Title_FR: "(FR) Canadian Pension Plan",
    Description_EN: "Canadian Pension Plan",
    Description_FR: "(FR) Canadian Pension Plan",
    ImageAltText_EN: "a test image",
    ImageAltText_FR: "(FR) a test image",
    Image: "",
    benefits: [
      {
        id: 7,
        Title_EN: "Canadian Pension Plan Children's Benefit",
        Title_FR: "(FR) Canadian Pension Plan Children's Benefit",
        Description_EN:
          "Supporting children of disabled or deceased CPP contributors",
        Description_FR:
          "Supporting children of disabled or deceased CPP contributors",
        ApplyLink_EN:
          "https://www.canada.ca/en/services/benefits/publicpensions/cpp/cpp-childrens-benefit.html",
        ApplyLink_FR:
          "https://www.canada.ca/fr/services/prestations/pensionspubliques/rpc/prestation-rpc-enfant.html",
        Outcomes_EN: "",
        Outcomes_FR: "",
        Provider_EN: "",
        Provider_FR: "",
        type: 3,
        program: 1,
        EligibilityCriteria_EN: "",
        EligibilityCriteria_FR: "",
        BenefitKey: "cpp-childrens",
      },
      {
        id: 8,
        Title_EN: "Survivor's Pension",
        Title_FR: "(FR) Survivor's Pension",
        Description_EN: "",
        Description_FR: "",
        ApplyLink_EN:
          "https://www.canada.ca/en/services/benefits/publicpensions/cpp/cpp-survivor-pension.html",
        ApplyLink_FR:
          "https://www.canada.ca/en/services/benefits/publicpensions/cpp/cpp-survivor-pension.html",
        Outcomes_EN: "",
        Outcomes_FR: "",
        Provider_EN: "",
        Provider_FR: "",
        type: 3,
        program: 1,
        EligibilityCriteria_EN: "",
        EligibilityCriteria_FR: "",
        BenefitKey: "cpp-survivor-pension",
      },
    ],
  },
  {
    id: 2,
    Title_EN: "Employment Insurance",
    Title_FR: "(FR) Employment Insurance",
    Description_EN: "Employment Insurance",
    Description_FR: "(FR) Employment Insurance",
    ImageAltText_EN: "a test image",
    ImageAltText_FR: "(FR) a test image",
    Image: "",
    benefits: [
      {
        id: 18,
        Title_EN:
          "Extended parental benefit period for military families (EI) ",
        Title_FR:
          "(FR) Extended parental benefit period for military families (EI) ",
        Description_EN: "",
        Description_FR: "",
        ApplyLink_EN:
          "https://www.canada.ca/en/services/benefits/ei/ei-military-families.html",
        ApplyLink_FR:
          "https://www.canada.ca/en/services/benefits/ei/ei-military-families.html",
        Outcomes_EN: "",
        Outcomes_FR: "",
        Provider_EN: "Service Canada",
        Provider_FR: "Service Canada",
        type: 3,
        program: 2,
        EligibilityCriteria_EN:
          "As a Canadian Forces member, you have to:\n\n- formally request your EI parental leave from the Department of National Defence before you leave for the imperative military requirement, or\n- provide the dates you intended to take your EI parental leave, if you are already on the imperative military requirement\n",
        EligibilityCriteria_FR:
          "(FR) As a Canadian Forces member, you have to:\n\n- formally request your EI parental leave from the Department of National Defence before you leave for the imperative military requirement, or\n- provide the dates you intended to take your EI parental leave, if you are already on the imperative military requirement\n",
        BenefitKey: "ei-military-families",
      },
      {
        id: 14,
        Title_EN: "Employment Insurance - Parents of young victims of crime",
        Title_FR:
          "(FR) Employment Insurance - Parents of young victims of crime",
        Description_EN: "",
        Description_FR: "",
        ApplyLink_EN:
          "https://www.canada.ca/en/employment-social-development/services/parents-young-victims-crime.html",
        ApplyLink_FR:
          "https://www.canada.ca/en/employment-social-development/services/parents-young-victims-crime.html",
        Outcomes_EN: "",
        Outcomes_FR: "",
        Provider_EN: "Service Canada",
        Provider_FR: "Service Canada",
        type: 3,
        program: 2,
        EligibilityCriteria_EN:
          "To be eligible, you must:\n\n- be legally responsible for the child or children involved in the incident\n- have earned at least $6,500 in the previous calendar year, or in the 52 weeks prior to the incident\n- be on leave from employment or only working up to 50 % of your regular work week, up to a maximum of 20 hours per week\n- have a valid Social Insurance Number (SIN)\n- not be receiving any type of Employment Insurance benefits or Quebec Parental Insurance Plan benefits, and\n- not have been charged with committing a probable Criminal Code offence that led to the death or disappearance of the child",
        EligibilityCriteria_FR:
          "(FR) To be eligible, you must:\n\n- be legally responsible for the child or children involved in the incident\n- have earned at least $6,500 in the previous calendar year, or in the 52 weeks prior to the incident\n- be on leave from employment or only working up to 50 % of your regular work week, up to a maximum of 20 hours per week\n- have a valid Social Insurance Number (SIN)\n- not be receiving any type of Employment Insurance benefits or Quebec Parental Insurance Plan benefits, and\n- not have been charged with committing a probable Criminal Code offence that led to the death or disappearance of the child",
        BenefitKey: "ei-parents-young-victims",
      },
    ],
  },
  {
    id: 3,
    Title_EN: "International Register of Electors",
    Title_FR: "(FR) International Register of Electors",
    Description_EN: "International Register of Electors",
    Description_FR: "(FR) International Register of Electors",
    ImageAltText_EN: "a test image",
    ImageAltText_FR: "(FR) a test image",
    Image: "",
    benefits: [
      {
        id: 35,
        Title_EN: "Elections (Voting from Abroad) ",
        Title_FR: "(FR) Elections (Voting from Abroad) ",
        Description_EN:
          "How to participate and vote in a Canadian election from abroad ",
        Description_FR:
          "How to participate and vote in a Canadian election from abroad ",
        ApplyLink_EN:
          "https://travel.gc.ca/travelling/living-abroad/elections-faq",
        ApplyLink_FR:
          "https://travel.gc.ca/travelling/living-abroad/elections-faq",
        Outcomes_EN: "",
        Outcomes_FR: "",
        Provider_EN: "",
        Provider_FR: "",
        type: 2,
        program: 3,
        EligibilityCriteria_EN: "",
        EligibilityCriteria_FR: "",
        BenefitKey: "elections-living-abroad",
      },
    ],
  },
];
