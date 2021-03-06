import PropTypes from "prop-types";

export function SelectPicker(props) {
  return (
    <select
      id={props.id}
      name={props.name}
      data-cy={props.dataCy}
      onChange={props.onChange}
      defaultValue={props.defaultValue}
      className="form-select my-2 px-1 block w-full rounded"
      aria-label={props.ariaLabel}
    >
      <option value=""></option>
      {props.selects.map((value, index) => {
        return <option key={index}>{value.criteriaSelect}</option>;
      })}
    </select>
  );
}

SelectPicker.propTypes = {
  /**
   * the id of the field
   */
  id: PropTypes.string.isRequired,
  /**
   * the name of the field
   */
  name: PropTypes.string.isRequired,
  /**
   * array of objects containing the select picker items
   */
  selects: PropTypes.arrayOf(
    PropTypes.shape({
      criteriaSelect: PropTypes.string,
    })
  ),
  /**
   * cypress selector
   */
  dataCy: PropTypes.string,

  /**
   * function to handle when the value changes
   */
  onChange: PropTypes.func,

  /**
   * default value for the input
   */
  defaultValue: PropTypes.string,
  /**
   * Accessibility label value
   */
  ariaLabel: PropTypes.string.isRequired,
};
