import { ButtonLink } from "../atoms/ButtonLink";
import PropTypes from "prop-types";
import { useTranslation } from "next-i18next";
import { EntitlementInfo } from "../atoms/EntitlementInfo";
import { EntitlementBox } from "../atoms/EntitlementBox";
import { CurrencyDollarIcon, CurrencyPoundIcon } from "@heroicons/react/solid";

export function BenefitCard(props) {
  const { t } = useTranslation("common");
  return (
    <div
      className={` flex flex-col  h-50 max-w-lg mx-full hover:shadow-cards border border-b-4 border-custom-blue-blue pl-3 pr-3
      ${!props.eligibility ? "bg-gray-300" : ""}`}
    >
      <div className="flex justify-between py-2 ">
        <a href="#catalog">
          <h2 className="text-h3">{props.title}</h2>
        </a>
        <span className="flex ">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
          </svg>{" "}
          share
        </span>
      </div>
      <div className="my-1">
        <small className="bg-gray-800 text-white uppercase px-1 py-1 rounded-sm">
          {props.type}
        </small>
      </div>
      {/* snipinfo */}
      <EntitlementBox>
        <EntitlementInfo
          icon={CurrencyPoundIcon}
          bgColor="bg-green-100"
          textColor="text-green-900"
          title={t("howMuch")}
          body={t("perMonth")}
        />
        <EntitlementInfo
          bgColor="bg-blue-100"
          textColor="text-blue-900"
          title={t("howMuch")}
          body={t("perMonth")}
        />
        <EntitlementInfo
          bgColor="bg-red-100"
          textColor="text-red-900"
          title={t("howMuch")}
          body={t("perMonth")}
        />
      </EntitlementBox>

      {/* snip info end */}
      <div className="flex-1">
        <span>
          {" "}
          <p className="pb-2 font-body text-base ">{props.description}</p>
        </span>
      </div>

      <div className="pb-2 pr-2 flex flex-wrap justify-end ">
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
