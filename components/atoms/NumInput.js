import PropTypes from "prop-types";

export function NumInput(props) {
  return (
    <label
      className="text-gray-700 font-display font-bold"
      data-cy={props.dataCy}
    >
      {props.criteriaTitle}
      <input
        type="number"
        min="1"
        step="1"
        max="120"
        className="form-input my-2  block w-full rounded"
        placeholder={props.placeholder}
        data-cy={props.dataCy}
      ></input>
    </label>
  );
}

NumInput.propTypes = {
  /**
   * Title for the box
   */
  criteriaTitle: PropTypes.string,

  /**
   * Placeholder text for the field
   */
  placeholder: PropTypes.string,

  /**
   * cypress selector
   */
  dataCy: PropTypes.string,
};
