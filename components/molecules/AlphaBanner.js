import PropTypes from "prop-types";

import { ButtonLink } from "../atoms/ButtonLink";
import { useTranslation } from "next-i18next";
import Link from "next/link";

export function AlphaBanner(props) {
  const { t } = useTranslation("common");
  return (
    <div className="flex flex-col md:flex-row items-stretch sm:items-center  lg:flex lg:flex-row justify-between bg-gray-100 ">
      <div className="flex justify-start items-baseline ">
        <div className=" bg-gray-100  border-2 border-gray-700 p-1 mt-1 lg:mt-0 ">
          <p
            className="font-medium whitespace-normal md:whitespace-nowrap text-sm pl-2 sm:pl-0"
            data-cy="alpha-banner-text"
          >
            {props.bannerText}
          </p>
        </div>

        <p
          className="font-small sm:font-medium self-center pl-2 text-sm "
          data-cy="alpha-banner-description"
        >
          {props.bannerDesc}
        </p>
      </div>

      <div className="flex items-baseline justify-end ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 items-center pt-3 pl-1"
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
            className="font-body xl:whitespace-nowrap text-custom-blue-dark hover:text-custom-blue-link visited:text-purple-700 underline pl-1 lg:pl-0"
            data-cy="back-to-active-experiments"
          >
            {props.linkText}
          </a>
        </Link>
        <ButtonLink
          href={props.feedbackButtonLink}
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
  bannerText: PropTypes.string,
  /**
   * top banner description text
   */
  bannerDesc: PropTypes.string,
  /**
   * Button to link to feedback page (??)
   */
  feedbackButtonLink: PropTypes.string,
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
