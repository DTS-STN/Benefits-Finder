import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

/**
 * Language component which is used to change language on the page
 */
export function LanguageToggle(props) {
  const langSwap = props.lang === "en" ? "fr" : "en";
  const href = props.queryValues === undefined ? "" : props.queryValues;
  console.log(href);
  return (
    <Link href={href} locale={langSwap}>
      <a data-cy="toggle-language-link">{props.languageToggleText}</a>
    </Link>
  );
}

LanguageToggle.propTypes = {
  /**
   * The language that the toggle will display
   */
  lang: PropTypes.string.isRequired,
  /**
   * The text that the toggle will display
   */
  languageToggleText: PropTypes.string.isRequired,
  /**
   * The query values for navigation
   */
  queryValues: PropTypes.string,
};
