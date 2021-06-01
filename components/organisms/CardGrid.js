import PropTypes from "prop-types";

export function CardGrid(props) {
  return (
    <div className="flex flex-wrap pt-5">
      <div className="grid grid-cols-2 lg:grid-cols-2 gap-8 mx-auto">
        {props.children}
      </div>
    </div>
  );
}

CardGrid.propTypes = {
  /**
   * child elements that will constitute the page
   */
  children: PropTypes.arrayOf(PropTypes.element),
};
