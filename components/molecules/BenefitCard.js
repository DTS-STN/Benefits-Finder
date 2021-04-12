import { ButtonLink } from "../atoms/ButtonLink";
import PropTypes from "prop-types";

export function BenefitCard(props) {
  function moreInfoHandler() {
    window.location.assign(`/benefit/${props.id}`);
  }
  return (
    <div className="flex flex-col md:w-64 lg:w-1/4 rounded-lg border pt-5 pb-5 pl-6 pr-6 m-1">
      <small className="text-gray-500 uppercase">{props.type}</small>
      <div className="flex w-full">
        <div className="flex flex-col justify-start">
          <h3 className="text-lg">{props.title}</h3>
        </div>
      </div>
      <p className="truncate-4-lines py-2">{props.description}</p>

      <div className="w-full flex flex-wrap justify-end">
        {/* TODO: these links will be replaced by a component when they are created */}
        <ButtonLink href={`/benefit/${props.id}`} text={"More info"} />
        <ButtonLink href={props.applyLink} text={"Apply now!"} primary />
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
