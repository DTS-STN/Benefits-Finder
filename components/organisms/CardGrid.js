import PropTypes from "prop-types";

export function CardGrid(props) {
  return (
    <div className="flex flex-wrap pt-5">
      <div className="grid md:grid-cols-3 gap-8">{props.children}</div>
    </div>
  );
}

CardGrid.propTypes = {
  /**
   * child elements that will constitute the page
   */
  children: PropTypes.arrayOf(PropTypes.element),
};
