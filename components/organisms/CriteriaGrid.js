import PropTypes from "prop-types";

import { useTranslation } from "next-i18next";

export function CriteriaGrid(props) {
  const { t } = useTranslation("common");
  return <div className="grid grid-cols-1  gap-0 px-2  ">{props.children}</div>;
}

CriteriaGrid.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};
