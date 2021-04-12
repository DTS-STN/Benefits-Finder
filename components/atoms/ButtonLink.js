import Link from "next/link";
import PropTypes from "prop-types";

export function ButtonLink(props) {
  return (
    <div className="rounded-md shadow">
      <Link href={props.href}>
        <a
          className={
            "w-full flex items-center justify-center p-2 border border-transparent text-base font-medium rounded-md bg-lightBlue-700 text-white hover:bg-blue-900 hover:text-white focus:bg-blue-900 focus:text-white"
          }
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
};
