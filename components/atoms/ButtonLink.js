import Link from "next/link";
import PropTypes from "prop-types";

export function ButtonLink(props) {
  return (
    <div className="rounded-md shadow ml-2 mt-2">
      <Link href={props.href}>
        <a
          className={`flex items-center justify-center p-2 border border-transparent text-base font-medium rounded-md text-white border-gray-400  hover:text-white focus:text-white
          ${
            props.primary
              ? "bg-lightBlue-700 hover:bg-blue-700 focus:bg-blue-900"
              : "bg-gray-500 hover:bg-gray-700 focus:bg-gray-700"
          }`}
        >
          {props.text}
        </a>
      </Link>
    </div>
  );
}

ButtonLink.propTypes = {
  /**
   * The destination URL
   */
  href: PropTypes.string.isRequired,

  /**
   * The button text
   */
  text: PropTypes.string.isRequired,

  /**
   * Change appearance (colour) if it's a primary/secondary button
   */
  primary: PropTypes.bool,
};
