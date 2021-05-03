import PropTypes from "prop-types";
import { CriteriaBox } from "../atoms/CriteriaBox";
import { SelectPicker } from "../atoms/SelectPicker";
import { NumInput } from "../atoms/NumInput";

import { useTranslation } from "next-i18next";

export function CriteriaGrid(props) {
  const { t } = useTranslation("common");
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 px-2  md:px-0">
      {/* location picker */}
      <CriteriaBox criteriaTitle={t("location.title")}>
        <SelectPicker
          id="location-select"
          ariaLabel="location-select"
          name="location"
          dataCy="location-select-picker"
          selects={[
            {
              criteriaSelect: t("location.on"),
            },
            {
              criteriaSelect: t("location.ab"),
            },
            {
              criteriaSelect: t("location.mb"),
            },
            {
              criteriaSelect: t("location.nb"),
            },
            {
              criteriaSelect: t("location.nl"),
            },
            {
              criteriaSelect: t("location.ns"),
            },
            {
              criteriaSelect: t("location.nu"),
            },
            {
              criteriaSelect: t("location.pe"),
            },
            {
              criteriaSelect: t("location.sk"),
            },
            {
              criteriaSelect: t("location.bc"),
            },
            {
              criteriaSelect: t("location.yt"),
            },
          ]}
        ></SelectPicker>
      </CriteriaBox>

      {/* age input box */}
      <CriteriaBox criteriaTitle={t("age.title")}>
        <NumInput placeholder={t("age.placeholder")}></NumInput>
      </CriteriaBox>

      {/* income picker */}
      <CriteriaBox criteriaTitle={t("income.title")}>
        <SelectPicker
          id="income-select"
          name="income"
          ariaLabel="income-select"
          dataCy="income-select-picker"
          selects={[
            {
              criteriaSelect: t("income.option-1"),
            },
            {
              criteriaSelect: t("income.option-2"),
            },
            {
              criteriaSelect: t("income.option-3"),
            },
          ]}
        ></SelectPicker>
      </CriteriaBox>
    </div>
  );
}

CriteriaGrid.propTypes = {
  /**
   * Criteria box Title text
   */
  criteriaTitle: PropTypes.string,
  /**
   * the select picker
   */
  criteriaSelect: PropTypes.string,
  /**
   * array of objects containing the select item
   */
  selects: PropTypes.arrayOf(
    PropTypes.shape({
      criteriaSelect: PropTypes.string,
    })
  ),

  /**
   * the number box
   */
  criteriaNumber: PropTypes.number,
  /**
   * placeholder text for inside the number box
   */
  placeholder: PropTypes.string,
  /**
   * child elements that will constitute the page
   */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};
