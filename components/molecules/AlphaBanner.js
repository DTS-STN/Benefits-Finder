import PropTypes from "prop-types";

import { ButtonLink } from "../atoms/ButtonLink";
import { useTranslation } from "next-i18next";
import Link from "next/link";

export function AlphaBanner(props) {
  const { t } = useTranslation("common");
  return (
    <div className="flex items-center flex-wrap lg:flex lg:flex-row justify-between bg-gray-100 ">
      <div className="flex justify-start items-center flex-wrap pl-2">
        <div className=" bg-gray-100  border-2 border-gray-700 p-1">
          <p
            className="font-medium break-normal text-sm"
            data-cy="alpha-banner-text"
          >
            {props.alphaBannerText}
          </p>
        </div>

        <p
          className=" font-medium pl-2 text-sm"
          data-cy="alpha-banner-description"
        >
          {props.alphaBannerDesc}
        </p>
      </div>

      <div className="flex items-center justify-end flex-wrap  m-4 lg:mt-0 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 items-center pt-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>

        <Link href={props.link}>
          <a
            className="text-custom-blue-dark hover:text-custom-blue-link visited:text-purple-700 underline pr-2"
            data-cy="back-to-active-experiments"
          >
            {props.linkText}
          </a>
        </Link>
        <ButtonLink
          href={props.feedbackButton}
          text={t("provideFeedback")}
          dataCy={"feedback-button"}
          primary
        />
      </div>
    </div>
  );
}

AlphaBanner.propTypes = {
  /**
   * alpha banner text
   */
  alphaBannerText: PropTypes.string,
  /**
   * top banner description text
   */
  alphaBannerDesc: PropTypes.string,
  /**
   * Button to link to feedback page (??)
   */
  feedbackButton: PropTypes.string,
  /**
   * link to another page
   */
  link: PropTypes.string,
  /**
   * link text
   */
  linkText: PropTypes.string,

  /**
   * Test id for unit test
   */
  dataTestId: PropTypes.string,
  /**
   * Test id for e2e test
   */
  dataCy: PropTypes.string,
};
