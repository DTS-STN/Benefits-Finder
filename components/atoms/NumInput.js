import PropTypes from "prop-types";

export function NumInput(props) {
  return (
    <input
      type="number"
      min="1"
      step="1"
      max="120"
      className="form-input my-2  block w-full rounded"
      placeholder={props.placeholder}
      data-cy={props.dataCy}
    ></input>
  );
}

NumInput.propTypes = {
  /**
   * Placeholder text for the field
   */
  placeholder: PropTypes.string,

  /**
   * cypress selector
   */
  dataCy: PropTypes.string,
};
