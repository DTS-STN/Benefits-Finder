import PropTypes from "prop-types";
import { useTranslation } from "next-i18next";

export function PopularCategoryCard(props) {
  const { t } = useTranslation("common");
  return (
    <div className="flex flex-col md:w-64 lg:w-1/3 ">
      <div className="px-3 py-2">
        <div className="rounded-lg border p-5">
          <div>
            <img src={props.imgSource} alt={props.altText} />
          </div>
          <small className="text-gray-500 uppercase">{props.type}</small>
          <div className="flex w-full">
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
  altText: PropTypes.string.isRequired,

  /**
   * category description
   */
  description: PropTypes.string,

  /**
   * category type
   */
  type: PropTypes.string,
};
