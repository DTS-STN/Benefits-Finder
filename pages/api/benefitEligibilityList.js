import { getBenefits } from "../../lib/benefits";
import { BenefitEligibility } from "../../lib/benefitEligibility";

export default async (req, res) => {
  if (req.method === "GET") {
    //Get situation cookie
    let situation = {};
    if (req.cookies.situation) {
      situation = JSON.parse(req.cookies.situation);
    }

    //Create list of benefits and set eligibility
    let benefits = await getBenefits("en");
    let benefitEligibility = new BenefitEligibility(situation);
    let benefitsArray = [];
    for (const benefitIndex in benefits) {
      benefitsArray.push({
        benefit: benefits[benefitIndex],
        eligibility: benefitEligibility.getBenefitEligibility(
          benefits[benefitIndex].id
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
