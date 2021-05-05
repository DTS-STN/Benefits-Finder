export class BenefitEligibility {
  constructor(situation) {
    this.eligibilityCriteria = this.getEligibilityCriteria(situation);
  }
  eligiblity = {
    NOT_ELIGIBLE: 0,
    POTENTIALLY_ELIGIBLE: 1,
    ELIGIBLE: 2,
  };

  //Returns json with a benefitId as a key and a value of eligibility criteria as an array
  getEligibilityCriteria(situation) {
    //ToDo: replace key with something more human readable
    return {
      3: [this.isOver60(situation), this.isUnder65(situation)],
      5: [this.isOver60(situation)],
    };
  }

  isOver60(situation) {
    if (!situation["age"]) return this.eligiblity.POTENTIALLY_ELIGIBLE;
    else if (situation["age"] >= 60) return this.eligiblity.ELIGIBLE;
    return this.eligiblity.NOT_ELIGIBLE;
  }

  isUnder65(situation) {
    if (!situation["age"]) return this.eligiblity.POTENTIALLY_ELIGIBLE;
    else if (situation["age"] < 65) return this.eligiblity.ELIGIBLE;
    return this.eligiblity.NOT_ELIGIBLE;
  }

  //Returns value based on situation matching with eligibility criteria based on id
  getBenefitEligibility(benefitId) {
    //Return possibly eligible if no criteria found
    if (!this.eligibilityCriteria[benefitId]) {
      return this.eligiblity.POTENTIALLY_ELIGIBLE;
    }

    //Return not eligible then potentially and finally eligible
    if (
      this.eligibilityCriteria[benefitId].includes(this.eligiblity.NOT_ELIGIBLE)
    ) {
      return this.eligiblity.NOT_ELIGIBLE;
    } else if (
      this.eligibilityCriteria[benefitId].includes(
        this.eligiblity.POTENTIALLY_ELIGIBLE
      )
    ) {
      return this.eligiblity.POTENTIALLY_ELIGIBLE;
    } else if (
      this.eligibilityCriteria[benefitId].includes(this.eligiblity.ELIGIBLE)
    ) {
      return this.eligiblity.ELIGIBLE;
    }

    //return possible eligible by default
    return this.eligiblity.POTENTIALLY_ELIGIBLE;
  }
}
