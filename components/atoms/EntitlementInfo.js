import PropTypes from "prop-types";

export function EntitlementInfo(props) {
  return (
    <div
      className={`flex flex-col items-center rounded-b-lg shadow-sm border relative w-full align-top ${props.bgColor}`}
      data-cy={props.dataCy}
    >
      <span className=" absolute -top-3  bg-white rounded-full h-5 w-5 xl:h-7 xl:w-7">
        {props.icon}
      </span>

      <div
        className={`flex-1 static items-center mt-3 xl:mt-4 text-xs font-semibold ${props.textColor}`}
      >
        {props.title}
      </div>
      <div
        className={`flex-grow py-3 text-center align-middle ${props.textColor}`}
      >
        {props.body}
      </div>
    </div>
  );
}

EntitlementInfo.propTypes = {
  /**
   * The element info title
   */
  title: PropTypes.string.isRequired,
  /**
   * The element info body
   */
  body: PropTypes.string.isRequired,
  /**
   * The background color of the entitlement container
   */
  bgColor: PropTypes.string,
  /**
   * The colour of the text in the entitlement container
   */
  textColor: PropTypes.string,
  /**
   * icon shown at the top of the entitlement container
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
