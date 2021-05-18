import PropTypes from "prop-types";

export function CardGrid(props) {
  return (
    <div className="flex flex-wrap py-5">
      <div className="grid grid-cols-1 xxl:grid-cols-2  gap-10 px-2  md:px-0 mx-auto">
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
