import PropTypes from "prop-types";
import Image from "next/image";

export function PopularCategoryCard(props) {
  return (
    <div
      className={`md:shadow-md h-auto min-h-96 w-full rounded-md border-2 pl-3 pr-3 ${
        props.selected ? "border-blue-500" : ""
      }`}
      onClick={() => props.onClick(props.id)}
    >
      {props.imgSource ? (
        <div className="py-5">
          <div style={{ position: "relative", width: "100%", height: "5rem" }}>
            <Image
              src={props.imgSource}
              alt={props.imgAltText}
              layout="fill"
            ></Image>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="my-5">
        <small className="text-gray-500 uppercase">{props.type}</small>
        <a href="#catalog">
          <h2 className="text-h3">{props.title}</h2>
        </a>
      </div>
      <p className="pb-4">{props.description}</p>
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
  selected: PropTypes.bool.isRequired,
};

PopularCategoryCard.defaultProps = {
  /**
   * Default value of false for selected
   */
  selected: false,
};
