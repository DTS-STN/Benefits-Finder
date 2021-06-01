import PropTypes from "prop-types";
import Image from "next/image";

export function PopularCategoryCard(props) {
  return (
    <div
      className={`flex flex-col items-center md:shadow-md w-40 h-40 rounded-full border-2 hover:shadow-cards ${
        props.selected ? "border-blue-500" : ""
      }`}
      onClick={() => props.onClick(props.id)}
    >
      {props.imgSource ? (
        <div className=" mt-4 mb-2 p-1 bg-gray-100  rounded-md">
          <div className="aspect-w-1 aspect-h-1 w-16 rounded-md  ">
            <Image
              src={props.imgSource}
              alt={props.imgAltText}
              layout="fill"
              className="rounded-md object-cover"
            ></Image>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="mb-5">
        <small className="text-gray-500 uppercase">{props.type}</small>
        <a href="#catalog">
          <h2 className="font-display text-base">{props.title}</h2>
        </a>
      </div>
      {/* <p className="pb-4">{props.description}</p> */}
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
  imgSource: PropTypes.string.isRequired,

  /**
   * category image alt text
   */
  imgAltText: PropTypes.string.isRequired,

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
