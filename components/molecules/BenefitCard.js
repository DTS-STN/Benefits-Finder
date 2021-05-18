import { ButtonLink } from "../atoms/ButtonLink";
import PropTypes from "prop-types";
import { useTranslation } from "next-i18next";
import { EntitlementInfo } from "../atoms/EntitlementInfo";
import { EntitlementBox } from "../atoms/EntitlementBox";
import {
  CalendarIcon,
  ChartPieIcon,
  ClockIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/solid";
import { Share } from "../atoms/Share";

export function BenefitCard(props) {
  const { t } = useTranslation("common");
  return (
    <div
      className={` flex flex-col  h-50 max-w-lg mx-full hover:shadow-cards border border-b-4 border-green-600 pl-3 pr-3
      ${!props.eligibility ? "bg-gray-300" : ""}`}
    >
      <div className="flex justify-between py-2 ">
        <a href="#catalog">
          <h2 className="text-h3">{props.title}</h2>
        </a>
        {/* share link href still to be determined */}
        <Share href="#" text={t("share")}></Share>
      </div>
      <div className="my-1">
        <small className="bg-gray-800 text-white uppercase px-1 py-1 rounded-sm">
          {props.type}
        </small>
      </div>
      {/* snipinfo */}
      <EntitlementBox>
        <EntitlementInfo
          icon={<CurrencyDollarIcon className=" text-green-800" />}
          bgColor="bg-green-100"
          textColor="text-green-900"
          title={t("howMuchTitle")}
          body={t("howMuchBody")}
        />
        <EntitlementInfo
          icon={<ChartPieIcon className=" text-blue-800" />}
          bgColor="bg-blue-100"
          textColor="text-blue-900"
          title={t("howLongTitle")}
          body={t("howLongBody")}
        />
        <EntitlementInfo
          icon={<ClockIcon className=" text-red-800" />}
          bgColor="bg-red-100"
          textColor="text-red-900"
          title={t("howSoonTitle")}
          body={t("howSoonBody")}
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
