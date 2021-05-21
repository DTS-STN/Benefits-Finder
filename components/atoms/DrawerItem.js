import PropTypes from "prop-types";

export function DrawerItem(props) {
  return (
    <details className="pt-7 mt-7 border-t border-gray-300">
      <summary className="w-full relative cursor-pointer list-none px-0 text-base font-semibold ">
        {props.summary}
      </summary>
      {props.children}
    </details>
  );
}

DrawerItem.propTypes = {
  /**
   * child elements that will constitute the drawer
   */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  /**
   * cypress selector
   */
  dataCy: PropTypes.string,
  /**
   * summary of the item
   */
  summary: PropTypes.string.isRequired,
};
