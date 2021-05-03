import PropTypes from "prop-types";

export function CriteriaBox(props) {
  return (
    <div className="block flex-1 my-1 mx-1 p-4 md:my-0 md:mx-0 rounded-lg shadow-lg border border-gray-200 ">
      <label
        className="text-gray-700 font-display font-bold"
        data-cy={props.dataCy}
      >
        {props.criteriaTitle}
      </label>
      {props.children}
    </div>
  );
}

CriteriaBox.propTypes = {
  /**
   * child elements that will constitute the page
   */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  /**
   * Title for the box
   */
  criteriaTitle: PropTypes.string,
  /**
   * cypress selector
   */
  dataCy: PropTypes.string,
};
