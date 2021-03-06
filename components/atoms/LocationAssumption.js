import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "next-i18next";

export function LocationAssumption(props) {
  const { t } = useTranslation("common");
  return props.isActive ? (
    <p className="text-sm text-left">
      {t("locationAssumption")}
      <span className="font-bold">
        {" " + (!props?.location ? t("outsideCanada") : props.location) + " "}
      </span>
      {t("basedOnIP")}
    </p>
  ) : (
    ""
  );
}

LocationAssumption.propTypes = {
  /*
   * Whether or not this component is active
   */
  isActive: PropTypes.bool.isRequired,

  /*
   * The assumed location of the user
   */
  location: PropTypes.string,
};
