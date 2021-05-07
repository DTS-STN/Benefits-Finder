import { getBenefits } from "../../lib/benefits";

export default async (req, res) => {
  if (req.method === "GET") {
    const language = req.headers["accept-language"] === "fr" ? "fr" : "en";

    //Get situation cookie
    let situation = {};
    if (req.cookies.situation) {
      situation = JSON.parse(req.cookies.situation);
    }

    //Create list of benefits and set eligibility
    let benefits = await getBenefits(language);
    let benefitsArray = [];
    for (const benefitIndex in benefits) {
      benefitsArray.push({
        benefit: benefits[benefitIndex],
        eligibility: getBenefitEligibility(
          situation,
          benefits[benefitIndex].benefitKey
        ),
      });
    }

    //Sort benefits by eligibility
    benefitsArray.sort(function (a, b) {
      if (a.eligibility < b.eligibility) return 1;
      if (a.eligibility > b.eligibility) return -1;
      return 0;
    });
    res.status(200).json(benefitsArray);
  }
};

const eligiblityStatus = {
  NOT_ELIGIBLE: 0,
  POTENTIALLY_ELIGIBLE: 1,
  ELIGIBLE: 2,
};

const getBenefitEligibility = (situation, benefitKey) => {
  //Get eligibility criteria and if none exist default to potentially eligibile
  const criteria = eligibilityCriteria[benefitKey];
  if (!criteria) {
    return eligiblityStatus.POTENTIALLY_ELIGIBLE;
  }

  let eligibility = eligiblityStatus.ELIGIBLE;
  //Filter by getting the lesser eligibility status
  for (const item in criteria) {
    if (criteria[item](situation) < eligibility)
      eligibility = criteria[item](situation);
  }

  return eligibility;
};

const isOver60 = (situation) => {
  if (!situation["age"]) return eligiblityStatus.POTENTIALLY_ELIGIBLE;
  else if (situation["age"] >= 60) return eligiblityStatus.ELIGIBLE;
  return eligiblityStatus.NOT_ELIGIBLE;
};

const isOver65 = (situation) => {
  if (!situation["age"]) return eligiblityStatus.POTENTIALLY_ELIGIBLE;
  else if (situation["age"] >= 65) return eligiblityStatus.ELIGIBLE;
  return eligiblityStatus.NOT_ELIGIBLE;
};

const isUnder65 = (situation) => {
  if (!situation["age"]) return eligiblityStatus.POTENTIALLY_ELIGIBLE;
  else if (situation["age"] < 65) return eligiblityStatus.ELIGIBLE;
  return eligiblityStatus.NOT_ELIGIBLE;
};

const eligibilityCriteria = {
  oas: [isOver65],
  alw: [isOver60, isUnder65],
  alws: [isOver60, isUnder65],
  cpp: [isOver60],
  "cpp-gis": [isOver65],
};
