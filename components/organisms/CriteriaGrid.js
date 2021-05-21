import PropTypes from "prop-types";

export function CriteriaGrid(props) {
  return (
    <div className="grid grid-cols-1 gap-10 mx-auto">{props.children}</div>
  );
}

CriteriaGrid.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};
