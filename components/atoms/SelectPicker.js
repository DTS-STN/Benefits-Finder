import PropTypes from "prop-types";

export function SelectPicker(props) {
  return (
    <select
      id={props.id}
      aria-label={props.ariaLabel}
      name={props.name}
      data-cy={props.dataCy}
      className="form-select my-2 px-1 block w-full rounded"
    >
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
   * the aria-label for the select
   */
  ariaLabel: PropTypes.string.isRequired,
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
};
