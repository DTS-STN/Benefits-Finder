import { ButtonLink } from "../atoms/ButtonLink";
import PropTypes from "prop-types";
import { useTranslation } from "next-i18next";

export function BenefitCard(props) {
  const { t } = useTranslation("common");
  return (
    <div className="flex flex-col md:w-64 lg:w-1/3 ">
      <div className="px-3 py-2">
        <div className="rounded-lg border p-5">
          <small className="text-gray-500 uppercase">{props.type}</small>
          <div className="flex w-full">
            <div className="flex flex-col justify-start">
              <h3 className="text-lg">{props.title}</h3>
            </div>
          </div>
          <p className="truncate-4-lines py-2">{props.description}</p>

          <div className="w-full flex flex-wrap justify-end">
            <ButtonLink href={`/benefit/${props.id}`} text={t("moreInfo")} />
            <ButtonLink href={props.applyLink} text={t("applyNow")} primary />
          </div>
        </div>
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
