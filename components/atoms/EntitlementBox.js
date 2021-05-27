import PropTypes from "prop-types";

export function EntitlementBox(props) {
  return (
    <div
      className="flex flex-col space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0 mt-3"
      data-cy={props.dataCy}
    >
      {props.children}
    </div>
  );
}

EntitlementBox.propTypes = {
  /**
   * child elements that will constitute the page for the entitlement box.
   */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  /**
   * cypress selector
   */
  dataCy: PropTypes.string,
};
