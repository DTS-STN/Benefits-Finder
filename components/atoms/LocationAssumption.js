import React from "react";
import PropTypes from "prop-types";

export function LocationAssumption(props) {
  return !props.isActive ? (
    ""
  ) : (
    <p id={props.id}>
      It seems like you are located in
      {" " +
        (!props?.location ? "someplace outside of Canada" : props.location) +
        " "}
      based on your IP address. <br />
      Please confirm or modify this information.
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
};
