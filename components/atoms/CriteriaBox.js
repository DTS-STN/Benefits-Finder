import PropTypes from "prop-types";

export function CriteriaBox(props) {
  return (
    <label className="block flex-1 my-1 mx-1 p-4 md:my-0 md:mx-0 rounded-lg shadow-lg border border-gray-200 ">
      <h4 className="text-gray-700 sm:text-xs" data-cy={props.dataCy}>
        {props.criteriaTitle}
      </h4>
    </label>
  );
}

CriteriaBox.propTypes = {
  /**
   * Title for the box
   */
  criteriaTitle: PropTypes.string,
  /**
   * cypress selector
   */
  dataCy: PropTypes.string,
};
