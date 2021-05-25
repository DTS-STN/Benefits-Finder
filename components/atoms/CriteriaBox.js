import PropTypes from "prop-types";

export function CriteriaBox(props) {
  return (
    <div className="block flex-1 my-1 mx-1 p-4 md:my-0 md:mx-0 rounded-sm border border-gray-200">
      {props.children}
    </div>
  );
}

CriteriaBox.propTypes = {
  /**
   * child elements that will constitute the page
   */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /**
   * cypress selector
   */
  dataCy: PropTypes.string,
};
