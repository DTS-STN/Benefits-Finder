import PropTypes from "prop-types";

export function CardGrid(props) {
  return (
    <div className="flex flex-wrap mx-auto">
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-8 mx-auto">
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
