import PropTypes from "prop-types";

export function SelectPicker(props) {
  return (
    <select
      name="location"
      id="location-select"
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
   * array of objects containing the select picker items
   */
  selects: PropTypes.arrayOf(
    PropTypes.shape({
      criteriaSelect: PropTypes.string,
    })
  ),
};
