import PropTypes from "prop-types";
import Image from "next/image";

export function PopularCategoryCard(props) {
  return (
    <div className="md:shadow-md h-auto min-h-96 w-full rounded-md border pl-3 pr-3">
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
};
