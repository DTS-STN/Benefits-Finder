import { ButtonLink } from "../atoms/ButtonLink";
import PropTypes from "prop-types";
import { useTranslation } from "next-i18next";

export function BenefitCard(props) {
  const { t } = useTranslation("common");
  return (
    <div
      className={`md:shadow-md h-auto min-h-96 w-full rounded-md border pl-3 pr-3 
      ${!props.eligibility ? "bg-gray-300" : undefined}`}
    >
      <div className="py-2">
        <small className="text-gray-500 uppercase">{props.type}</small>
        <a href="#catalog">
          <h2 className="text-h3">{props.title}</h2>
        </a>
      </div>
      <p className="pb-4">{props.description}</p>
      <div className="pb-5 pt-1 flex justify-end justify-items-end">
        <ButtonLink href={`/benefit/${props.id}`} text={t("moreInfo")} />
        <ButtonLink href={props.applyLink} text={t("applyNow")} primary />
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
   * link to apply to the benefit
   */
  applyLink: PropTypes.string,

  /**
   * benefit type
   */
  type: PropTypes.string,

  /**
   * which program the benefit falls into
   */
  program: PropTypes.string,

  /**
   * which collections the benefit belongs to
   */
  collections: PropTypes.arrayOf(PropTypes.string),

  /**
   * eligible for benefit
   */
  eligibility: PropTypes.bool,
};
