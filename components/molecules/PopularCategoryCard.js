import PropTypes from "prop-types";
import Image from "next/image";

export function PopularCategoryCard(props) {
  return (
    <div className="flex flex-col md:w-64 lg:w-1/3 ">
      <div className="px-3 py-2">
        <div className="rounded-lg border p-5">
          {props.imgSource ? (
            <div
              className={"py-2"}
              style={{ position: "relative", width: "100%", height: "5rem" }}
            >
              <Image
                layout="fill"
                objectFit="contain"
                src={props.imgSource}
                alt={props.imgAltText}
              />
            </div>
          ) : (
            ""
          )}
          <small className="text-gray-500 uppercase">{props.type}</small>
          <div className="flex w-full py-2">
            <div className="flex flex-col justify-start">
              <a href="#catalog">
                <h3 className="text-lg">{props.title}</h3>
              </a>
            </div>
          </div>
          <p className="truncate-4-lines py-2">{props.description}</p>
        </div>
      </div>
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
