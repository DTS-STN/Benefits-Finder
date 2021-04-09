import PropTypes from "prop-types";
import { BenefitCard } from "../molecules/BenefitCard";

export function BenefitGrid(props) {
  //const benefitCards = [];

  // for (let i =0; i < props.benefits.length; i++) {
  //   benefitData = props.benefits[i];
  //   benefitCards.push(
  //     <BenefitCard
  //       id={benefitData.id}
  //       title={benefitData.title}
  //       description={benefitData.description}
  //       type={benefitData.type}
  //       applyLink={benefitData.applyLink}
  //     />
  //   )
  // }

  const benefitCards = props.benefits.map((benefitData) => {
    <BenefitCard
      id={benefitData.id}
      title={benefitData.title}
      description={benefitData.description}
      type={benefitData.type}
      applyLink={benefitData.applyLink}
    />;
  });

  return (
    <div className="w-full flex flex-col items-center md:items-start">
      <div className="w-full flex flex-wrap mb-5">{benefitCards}</div>
    </div>
  );
}

BenefitGrid.propTypes = {
  /**
   * benefits array which contains the unique
   * dynamic information for each card
   */
  benefits: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      type: PropTypes.string,
      applyLink: PropTypes.string,
    })
  ),
};
