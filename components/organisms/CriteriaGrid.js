import PropTypes from "prop-types";
import { CriteriaBox } from "../atoms/CriteriaBox";
import { SelectPicker } from "../atoms/SelectPicker";
import { NumInput } from "../atoms/NumInput";

import { useTranslation } from "next-i18next";

export function CriteriaGrid(props) {
  const { t } = useTranslation("common");
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 px-2  md:px-0">
      {props.children}
      <CriteriaBox criteriaTitle={t("location.title")}></CriteriaBox>

      <CriteriaBox criteriaTitle={t("age.title")}>
        <NumInput>placeholder={t("age.placeholder")}</NumInput>
      </CriteriaBox>
      {/* flex inside */}

      {/* <label className="block flex-1 my-1 mx-1 p-4 md:my-0 md:mx-0 rounded-lg shadow-lg border border-gray-200 ">
        <h4 className="text-gray-700 md:text-s">{props.criteriaTitle}</h4>

        <select name="location" id="location-select" className="form-select my-2 px-1 block w-full rounded">
        {props.selects.map((value, index) => {
                return (
                    <option key={index} >{value.criteriaSelect}</option>
                );
              })}
        </select>

        <h4 className="text-gray-700 ">{props.criteriaTitle}</h4>
        <input type="number" min="1" step="1" max="120" 
        className="form-input my-2  block w-full rounded"
        placeholder={props.placeholder}>
        {props.criteriaNumber}
        </input>
      </label> */}

      {/*end  flex inside */}
    </div>
  );
}

CriteriaGrid.propTypes = {
  /**
   * array of objects containing the select item
   */
  selects: PropTypes.arrayOf(
    PropTypes.shape({
      criteriaSelect: PropTypes.string,
    })
  ),
  /**
   * alpha banner text
   */
  criteriaTitle: PropTypes.string,
  /**
   * top banner description text
   */
  criteriaSelect: PropTypes.string,
  /**
   * top banner description text
   */
  placeholder: PropTypes.string,
  /**
   * top banner description text
   */
  criteriaNumber: PropTypes.number,
  /**
   * child elements that will constitute the page
   */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};
