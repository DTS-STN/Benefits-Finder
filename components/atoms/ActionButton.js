import React from "react";
import PropTypes from "prop-types";

/**
 * Button component which is used to trigger actions on the page
 */
export function ActionButton(props) {
  return (
    <button
      className={`flex mx-auto ${
        props.rounded
          ? "rounded-md py-2 px-4"
          : props.notRound
          ? "rounded-sm"
          : "rounded-md"
      } shadow-lg ${
        !props.invert && !props.disabled
          ? "bg-lightBlue-700 text-white border-gray-400 hover:bg-blue-700 hover:text-white focus:bg-blue-900 focus:text-white focus:ring"
          : props.className
      } ${
        props.disabled
          ? "bg-gray-400 text-gray-700 border border-gray-500 "
          : props.className
      } text-md focus:outline-none`}
      onClick={props.onClick}
      onMouseEnter={props.onHover}
      onMouseLeave={props.onMouseLeave}
      id={props.id}
      data-cy={props.id}
      data-cy-button={props.dataCyButton}
      disabled={props.disabled}
    >
      {props.icon ? (
        <span className={props.icon} data-testid={props.dataTestId} />
      ) : undefined}
      {props.text}
      {props.children}
    </button>
  );
}

ActionButton.propTypes = {
  /**
   * This will add the smallest rd css to the button
   */
  notRound: PropTypes.bool,
  /**
   * This will add a img inside the button when needed
   */
  icon: PropTypes.string,
  /**
   * The text that the button will display
   */
  text: PropTypes.string.isRequired,

  /**
   * Identify which button being clicked
   */
  id: PropTypes.string,

  /**
   * Inverted color styling on the buttons as an default option
   */
  invert: PropTypes.bool,

  /**
   * Boolean flag that specifies the button should be rounded
   */
  rounded: PropTypes.bool,

  /**
   * Callback for a click event on the button
   */
  onClick: PropTypes.func,

  /**
   * Callback for when a user's mouse goes over the button
   */
  onHover: PropTypes.func,

  /**
   * Callback for when a user's mouse leaves the button
   */
  onMouseLeave: PropTypes.func,

  /**
   * css overrides for button
   */
  className: PropTypes.string,

  /**
   * any other elements you want to add to the button
   */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  /**
   * Test id for unit test
   */
  dataTestId: PropTypes.string,
  /**
   * Test id for e2e
   */
  dataCy: PropTypes.string,
  /**
   * Test id for e2e test - use when the button is nested inside another item that uses dataCy
   */
  dataCyButton: PropTypes.string,
  /**
   * Enabled or disabled the button
   */
  disabled: PropTypes.bool,
};

// some possible uses
{
  /* <ActionButton
//  id={id + "-MoreInfo"}
  text='Action button'
  rounded={true}
  invert={false}
  className={"font-semibold"}
  disabled={false}
  dataCyButton='action-button'
/> */
}
