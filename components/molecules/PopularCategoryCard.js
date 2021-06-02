import PropTypes from "prop-types";
import Image from "next/image";
import { LibraryIcon } from "@heroicons/react/solid";

export function PopularCategoryCard(props) {
  return (
    <div
      className={`flex flex-col items-center md:shadow-md w-32 h-32 xs:w-40 xs:h-40 rounded-full border-2 hover:shadow-cards bg-white overflow-clip overflow-hidden ${
        props.selected ? "border-blue-500" : ""
      }`}
      onClick={() => props.onClick(props.id)}
    >
      {props.imgSource ? (
        <div className=" mt-4 mb-2 border bg-gray-100  rounded-md">
          <div className="aspect-w-1 aspect-h-1 w-8 xs:w-10 rounded-md  ">
            <Image
              src={props.imgSource}
              alt={props.imgAltText}
              layout="fill"
              className="rounded-md object-cover"
            ></Image>
          </div>
        </div>
      ) : (
        <div className=" mt-4 mb-2 p-1 bg-gray-100  rounded-md">
          <div className="aspect-w-1 aspect-h-1 w-6 xs:w-8 rounded-md  ">
            <LibraryIcon
              className=" text-gray-500"
              alt="support-icon"
            ></LibraryIcon>
          </div>
        </div>
      )}

      <p className="px-2 text-xs xs:text-base text-center font-semibold overflow-ellipsis line-clamp-2">
        {props.title}
      </p>
    </div>
  );
}

PopularCategoryCard.propTypes = {
  /**
   * category id
   */
  id: PropTypes.string.isRequired,

  /**
   * category title
   */
  title: PropTypes.string.isRequired,

  /**
   * category image source
   */
  imgSource: PropTypes.string,

  /**
   * category image alt text
   */
  imgAltText: PropTypes.string,

  /**
   * category description
   */
  description: PropTypes.string,

  /**
   * category type
   */
  type: PropTypes.string,

  /**
   * Callback for a click event on the card
   */
  onClick: PropTypes.func,

  /**
   * Callback for a click event on the card
   */
  selected: PropTypes.bool,
};
