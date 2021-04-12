import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

/**
 * Language component which is used to change language on the page
 */
export function LanguageToggle(props) {
  const langSwap = props.lang == "en" ? "fr" : "en";
  return (
    <Link href={props.queryValues} locale={langSwap}>
      <a>{props.languageToggleText}</a>
    </Link>
  );
}

LanguageToggle.propTypes = {
  /**
   * The text that the button will display
   */
  lang: PropTypes.string.isRequired,
  /**
   * The text that the button will display
   */
  languageToggleText: PropTypes.string.isRequired,
  /**
   * The text that the button will display
   */
  queryValues: PropTypes.string,
};
