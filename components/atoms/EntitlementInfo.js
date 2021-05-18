import PropTypes from "prop-types";

export function EntitlementInfo(props) {
  return (
    <div
      className={`flex flex-col items-center rounded-b-lg shadow-sm border relative w-full ${props.bgColor}`}
      data-cy={props.dataCy}
    >
      <span className=" absolute -top-3  bg-white rounded-full ">
        {props.icon}
      </span>

      <div
        className={`flex-1 static items-center mt-3  text-xs font-semibold ${props.textColor}`}
      >
        {props.title}
      </div>
      <div className={`py-3 font-body ${props.textColor}`}>{props.body}</div>
    </div>
  );
}

EntitlementInfo.propTypes = {
  /**
   * child elements that will constitute the page
   */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /**
   * The button text
   */
  title: PropTypes.string.isRequired,
  /**
   * The button text
   */
  body: PropTypes.string.isRequired,
  /**
   * The background color
   */
  bgColor: PropTypes.string,
  /**
   * The text color
   */
  textColor: PropTypes.string,
  /**
   * This will add a icon inside the section
   */
  icon: PropTypes.element,
  /**
   * Test id for unit test
   */
  dataTestId: PropTypes.string,
  /**
   * cypress selector
   */
  dataCy: PropTypes.string,
};
