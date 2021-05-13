import fetchMock from "fetch-mock";
import { getBenefitData, getBenefitIds, getBenefits } from "./benefits";

describe("benefits helper functions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("gets a list of benefits", async () => {
    fetchMock.getOnce("http://localhost:1337/benefits", {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: mockBenefits,
    });

    const data = await getBenefits("en");
    expect(data.length).toEqual(2);
    expect(data[0].title).toEqual("Allowance for the Survivor");
    expect(data[1].title).toEqual("Guaranteed Income Supplement (GIC)");
  });

  it("gets a list of benefit ids", async () => {
    fetchMock.getOnce("http://localhost:1337/benefits", {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: mockBenefits,
    });

    const data = await getBenefitIds();
    expect(data.length).toEqual(2);
    expect(data).toEqual(["2", "4"]);
  });

  it("gets benefit data for a specific benefit - English", async () => {
    fetchMock.getOnce("http://localhost:1337/benefits/2", {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: mockBenefits[0],
    });

    const data = await getBenefitData(2, "en");
    expect(data.id).toEqual(2);
    expect(data.title).toEqual("Allowance for the Survivor");
  });

  it("gets benefit data for a specific benefit - French", async () => {
    fetchMock.getOnce("http://localhost:1337/benefits/2", {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: mockBenefits[0],
    });

    const data = await getBenefitData(2, "fr");
    expect(data.id).toEqual(2);
    expect(data.title).toEqual("(FR) Allowance for the Survivor");
  });
});

const mockBenefits = [
  {
    id: 2,
    Title_EN: "Allowance for the Survivor",
    Title_FR: "(FR) Allowance for the Survivor",
    Description_EN: "",
    Description_FR: "",
    ApplyLink_EN:
      "https://www.canada.ca/en/services/benefits/publicpensions/cpp/old-age-security/guaranteed-income-supplement/allowance-survivor.html",
    ApplyLink_FR:
      "https://www.canada.ca/en/services/benefits/publicpensions/cpp/old-age-security/guaranteed-income-supplement/allowance-survivor.html",
    Outcomes_EN: "",
    Outcomes_FR: "",
    Provider_EN: "Service Canada",
    Provider_FR: "Service Canada",
    type: {
      id: 3,
      Type_EN: "Feature",
      Type_FR: "(FR) Feature",
    },
    program: {
      id: 4,
      Title_EN: "Old Age Security",
      Title_FR: "(FR) Old Age Security",
      Description_EN: "Old Age Security",
      Description_FR: "(FR) Old Age Security",
    },
    EligibilityCriteria_EN:
      "- you are aged 60 to 64 (includes the month of your 65th birthday); (Age)\n- you are a Canadian citizen or a legal resident;\n- you reside in Canada and have resided in Canada for at least 10 years since the age of 18;\n- your spouse or common-law partner has died and you have not remarried or entered into a common-law relationship; and\n- your annual income is less than the maximum annual threshold.",
    EligibilityCriteria_FR:
      "(FR) - you are aged 60 to 64 (includes the month of your 65th birthday); (Age)\n- you are a Canadian citizen or a legal resident;\n- you reside in Canada and have resided in Canada for at least 10 years since the age of 18;\n- your spouse or common-law partner has died and you have not remarried or entered into a common-law relationship; and\n- your annual income is less than the maximum annual threshold.",
    BenefitKey: "alws",
    collections: [
      {
        id: 1,
        Title_EN: "Public Pension",
        Title_FR: "(FR) Public Pension",
        Description_EN: "Public Pension ",
        Description_FR: "(FR) Public Pension",
      },
    ],
  },
  {
    id: 4,
    Title_EN: "Guaranteed Income Supplement (GIC)",
    Title_FR: "(FR) Guaranteed Income Supplement (GIC)",
    Description_EN: "",
    Description_FR: "",
    ApplyLink_EN:
      "https://www.canada.ca/en/services/benefits/publicpensions/cpp/old-age-security/guaranteed-income-supplement.html",
    ApplyLink_FR:
      "https://www.canada.ca/en/services/benefits/publicpensions/cpp/old-age-security/guaranteed-income-supplement.html",
    Outcomes_EN: "",
    Outcomes_FR: "",
    Provider_EN: "Service Canada",
    Provider_FR: "Service Canada",
    type: {
      id: 3,
      Type_EN: "Feature",
      Type_FR: "(FR) Feature",
    },
    program: {
      id: 4,
      Title_EN: "Old Age Security",
      Title_FR: "(FR) Old Age Security",
      Description_EN: "Old Age Security",
      Description_FR: "(FR) Old Age Security",
      ImageAltText_EN: "a test image",
      ImageAltText_FR: "(FR) a test image",
    },
    EligibilityCriteria_EN:
      "- you are 65 or older\n- you live in Canada\n- you receive the Old Age Security (OAS) pension\n- your income is below $18,648 if you are single, widowed, or divorced\nyour income plus the income of your spouse/common-law partner is below:\n- $24,624 if your spouse/common-law partner receives the full OAS pension\n- $44,688 if your spouse/common-law partner does not receive an OAS pension\n- $44,688 if your spouse/common-law partner receives the Allowance\n",
    EligibilityCriteria_FR:
      "(FR) - you are 65 or older\n- you live in Canada\n- you receive the Old Age Security (OAS) pension\n- your income is below $18,648 if you are single, widowed, or divorced\nyour income plus the income of your spouse/common-law partner is below:\n- $24,624 if your spouse/common-law partner receives the full OAS pension\n- $44,688 if your spouse/common-law partner does not receive an OAS pension\n- $44,688 if your spouse/common-law partner receives the Allowance\n",
    BenefitKey: "cpp-gis",
    collections: [
      {
        id: 1,
        Title_EN: "Public Pension",
        Title_FR: "(FR) Public Pension",
        Description_EN: "Public Pension ",
        Description_FR: "(FR) Public Pension",
      },
    ],
  },
];
