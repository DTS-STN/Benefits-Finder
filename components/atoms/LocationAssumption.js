import React from "react";
import PropTypes from "prop-types";

export function LocationAssumption(props) {
  return !props.isActive ? (
    ""
  ) : (
    <h4 id={props.id}>
      It seems like you are located in
      {" " +
        (!props?.location ? "someplace outside of Canada" : props.location) +
        " "}
      based on your IP address. Please confirm or modify this information.
    </h4>
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
};
