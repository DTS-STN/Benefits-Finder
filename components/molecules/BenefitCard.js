import PropTypes from "prop-types";
import { useI18n } from "next-rosetta";

export function BenefitCard(props) {
  const { t } = useI18n();
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
        {/* TODO: these links will be replaced by a component when they are created */}
        <a href={`/benefit/${props.id}`}>{t("moreInfo")}</a>
        <a href={props.applyLink}>{t("applyNow")}</a>
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
