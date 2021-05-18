import PropTypes from "prop-types";

export function EntitlementInfo(props) {
  return (
    <div
      className={`flex flex-col items-center rounded-b-lg shadow-lg border relative w-full ${props.bgColor}`}
      data-cy={props.dataCy}
    >
      <span className=" absolute -top-3  bg-white rounded-full ">
        {props.icon}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 "
          viewBox="0 0 20 20"
          fill="green"
        >
          <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
            clipRule="evenodd"
          />
        </svg>
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
  icon: PropTypes.string,
  /**
   * Test id for unit test
   */
  dataTestId: PropTypes.string,
  /**
   * cypress selector
   */
  dataCy: PropTypes.string,
};
