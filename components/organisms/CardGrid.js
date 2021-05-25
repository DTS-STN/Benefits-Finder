import PropTypes from "prop-types";

export function CardGrid(props) {
  return (
    <div className="flex flex-wrap pt-5">
      <div className="grid grid-cols-3 gap-10">{props.children}</div>
    </div>
  );
}

CardGrid.propTypes = {
  /**
   * child elements that will constitute the page
   */
  children: PropTypes.arrayOf(PropTypes.element),
};
