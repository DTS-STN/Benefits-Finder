import { ShareIcon } from "@heroicons/react/solid";
import Link from "next/link";
import PropTypes from "prop-types";

export function Share(props) {
  return (
    <div className="flex ">
      <Link href={props.href}>
        <a className="flex items-center" data-cy="share">
          <ShareIcon className="h-5 w-5" />
          <span className="text-custom-blue-link hover:text-custom-blue-link underline pl-1 mb-1">
            {props.text}
            {props.dataCy}
          </span>
        </a>
      </Link>
    </div>
  );
}

Share.propTypes = {
  /**
   * The destination URL
   */
  href: PropTypes.string,

  /**
   * The button text
   */
  text: PropTypes.string.isRequired,

  /**
   * Test id for cypress test
   */
  dataCy: PropTypes.string,
};
