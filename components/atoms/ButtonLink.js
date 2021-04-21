import Link from "next/link";
import PropTypes from "prop-types";

export function ButtonLink(props) {
  return (
    <div className="rounded-md shadow ml-2 mt-2">
      <Link href={props.href}>
        <a
          className={`flex justify-center content-center h-auto p-1 rounded-sm py-2 px-4 focus:ring-1 focus:ring-black focus:ring-offset-2
          ${
            props.primary
              ? "bg-custom-blue-blue text-white border border-custom-blue-blue active:bg-custom-blue-dark hover:bg-custom-blue-light"
              : "bg-white text-custom-blue-blue border border-custom-blue-blue active:bg-gray-400 hover:bg-gray-200"
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
