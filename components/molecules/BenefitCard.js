import PropTypes from "prop-types";
import { ButtonLink } from "../atoms/ButtonLink";

export function BenefitCard(props) {
  return (
    <div className="flex flex-col flex-grow w-full md:w-64 lg:w-1/4 rounded-lg shadow pt-5 pb-5 pl-6 pr-6 m-1 hover:bg-gray-300">
      <div className="flex justify-between items-center w-full">
        <div className="flex flex-col justify-start">
          <h3 className="text-l">{props.title}</h3>
          <small>{props.type}</small>
        </div>
      </div>
      <p className="truncate-4-lines ">{props.description}</p>

      <div className="bg-bg-gray-dk">
        <ButtonLink href={`/benefit/${props.id}`} text="More info"></ButtonLink>
        <a href={props.applyLink}>Apply now!</a>
      </div>
    </div>
  );
}

BenefitCard.propTypes = {
  /**
   * benefit id
   */
  id: PropTypes.string.isRequired,

  /**
   * benefit title
   */
  title: PropTypes.string.isRequired,

  /**
   * benefit description
   */
  description: PropTypes.string,

  /**
   * benefit type
   */
  type: PropTypes.string,

  /**
   * link to apply to the benefit
   */
  applyLink: PropTypes.string,
};
