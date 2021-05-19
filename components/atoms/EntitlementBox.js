import PropTypes from "prop-types";

export function EntitlementBox(props) {
  return (
    <div className="flex space-x-4 mt-3" data-cy={props.dataCy}>
      {props.children}
    </div>
  );
}

EntitlementBox.propTypes = {
  /**
   * child elements that will constitute the page
   */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /**
   * cypress selector
   */
  dataCy: PropTypes.string,
};
