import React from "react";
import PropTypes from "prop-types";

export function LocationAssumption(props) {
  return !props.isActive ? (
    ""
  ) : (
    <p id={props.id}>
      {props.locationAssumption}
      {" " + (!props?.location ? props.outsideCanada : props.location) + " "}
      {props.basedOnIP} <br />
      {props.confirmModify}
    </p>
  );
}

LocationAssumption.propTypes = {
  /*
   * Whether or not this component is active
   */
  isActive: PropTypes.bool.isRequired,

  /*
   * The id of this component
   */
  id: PropTypes.string.isRequired,

  /*
   * The assumed location of the user
   */
  location: PropTypes.string,

  /*
   * Initial part of the location assumption message "It seems like you are located in"
   */
  locationAssumption: PropTypes.string.isRequired,

  /*
   * The message to display when the user is outside canada "someplace outside of canada"
   */
  outsideCanada: PropTypes.string.isRequired,

  /*
   * Notifies the user that the information is collected from their IP address "based on your IP address"
   */
  basedOnIP: PropTypes.string.isRequired,

  /*
   * Prompts user to confirm/modify info "Please confirm or modify this information."
   */
  confirmModify: PropTypes.string.isRequired,
};
