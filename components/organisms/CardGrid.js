import PropTypes from "prop-types";

export function CardGrid(props) {
  return (
    <div className="flex flex-wrap py-5">
      <div className=" mx-auto">{props.children}</div>
    </div>
  );
}

CardGrid.propTypes = {
  /**
   * child elements that will constitute the page
   */
  children: PropTypes.arrayOf(PropTypes.element),
};
