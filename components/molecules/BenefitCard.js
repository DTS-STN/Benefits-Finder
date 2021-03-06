import { ButtonLink } from "../atoms/ButtonLink";
import PropTypes from "prop-types";
import { useTranslation } from "next-i18next";
import ReactMarkdown from "react-markdown";
import { ActionButton } from "../atoms/ActionButton";
import { EntitlementInfo } from "../atoms/EntitlementInfo";
import { EntitlementBox } from "../atoms/EntitlementBox";
import { useState } from "react";
import {
  ChartPieIcon,
  ClockIcon,
  CurrencyDollarIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/solid";
import { Share } from "../atoms/Share";

export function BenefitCard(props) {
  const { t } = useTranslation("common");
  const [expanded, setExpanded] = useState(true);

  return (
    <div
      className={` flex flex-col  h-50 w-full hover:shadow-cards border border-b-4 border-green-600 pl-3 pr-3
      ${!props.eligibility ? "bg-gray-300" : ""}`}
    >
      <div className="flex justify-between pt-2 ">
        <a href="#catalog">
          <h2 className="text-h3">{props.title}</h2>
        </a>
        {/* share link href and funtionality still to be determined */}
        <Share href="#" text={t("share")}></Share>
      </div>
      <div className="my-2 pb-1">
        <small className="bg-gray-800 text-white uppercase px-1 py-1 rounded-sm">
          {props.type ? (
            <span>{props.type}</span>
          ) : (
            <span>{t("contentMissing")}</span>
          )}
        </small>
      </div>
      {/* Entitlement info */}
      <EntitlementBox>
        <EntitlementInfo
          icon={
            <CurrencyDollarIcon
              className=" text-green-dark"
              alt="dollar-sign"
            />
          }
          bgColor="bg-green-light"
          textColor="text-green-dark"
          title={t("howMuchTitle")}
          body={t("howMuchBody")}
          dataCy="how-much"
        />
        <EntitlementInfo
          icon={
            <ChartPieIcon
              className=" text-custom-blue-bright"
              alt="piechart-icon"
            />
          }
          bgColor="bg-custom-blue-pale"
          textColor="text-custom-blue-bright"
          title={t("howLongTitle")}
          body={t("howLongBody")}
          dataCy="how-long"
        />
        <EntitlementInfo
          icon={<ClockIcon className=" text-brown-dark" alt="clock-icon" />}
          bgColor="bg-brown-lighter"
          textColor="text-brown-dark"
          title={t("howSoonTitle")}
          body={t("howSoonBody")}
          dataCy="how-soon"
        />
      </EntitlementBox>
      {/* entitlement info end */}
      {/* benefit description start */}
      <div className="flex-1 p-4">
        <p className="text-xl font-extrabold py-3">{t("overview")}</p>
        {props.description ? (
          <p className="prose md:max-w-none">{props.description}</p>
        ) : (
          <p className="prose">{t("contentMissing")}</p>
        )}

        {/* don't show the criteria section if there isn't anything in strapi for EligibilityCriteria */}
        {props.eligibilityCriteria ? (
          <div>
            <p className="text-xl font-body font-extrabold py-3">
              {t("amIEligible")}
            </p>
            <span className="text-sm font-semibold pl-1">{t("youMayBe")}</span>

            <ReactMarkdown
              className={`prose md:max-w-none mt-1 ${
                expanded === true ? "line-clamp-3" : "line-clamp-none"
              }`}
            >
              {props.eligibilityCriteria}
            </ReactMarkdown>

            <ActionButton
              className="flex  items-center group font-body group-hover:text-red-300 group-focus:text-link-visited"
              invert
              linklook={true}
              text={`${expanded === true ? t("expand") : t("collapse")}`}
              iconObject={
                expanded === true ? (
                  <ChevronDownIcon
                    className="h-6 w-6  text-link-unvisited group-focus:text-link-visited group-hover:text-link-hover"
                    alt="show-more"
                  />
                ) : (
                  <ChevronUpIcon
                    className=" h-6 w-6 text-link-unvisited group-focus:text-link-visited group-hover:text-link-hover"
                    alt="show-more"
                  />
                )
              }
              onClick={() => {
                expanded === true ? setExpanded(false) : setExpanded(true);
              }}
            ></ActionButton>
          </div>
        ) : null}
      </div>
      {/* benefit desctiption end */}

      <div className="flex flex-wrap justify-end pb-2 pr-2 ">
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
   * which bundles the benefit belongs to
   */
  bundles: PropTypes.arrayOf(PropTypes.number),
  /**
   * eligibility criteria that belongs to a benefit
   */
  eligibilityCriteria: PropTypes.string,
  /**
   * eligible for benefit
   */
  eligibility: PropTypes.bool,
};
