import PropTypes from "prop-types";

export function NumInput(props) {
  return (
    <label
      className="text-gray-700 font-display font-bold"
      data-cy={props.dataCy}
    >
      {props.criteriaTitle}
      <input
        id={props.id}
        type="number"
        min="1"
        step="1"
        max="120"
        className="form-input my-2  block w-full rounded"
        onChange={props.onChange}
        defaultValue={props.defaultValue}
        placeholder={props.placeholder}
        data-cy={props.dataCy}
      ></input>
    </label>
  );
}

NumInput.propTypes = {
  /**
   * the id of the field
   */
  id: PropTypes.string.isRequired,
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

  /**
   * default value for the imput
   */
  defaultValue: PropTypes.string,

  /**
   * function to handle when the value changes
   */
  onChange: PropTypes.func,
};
