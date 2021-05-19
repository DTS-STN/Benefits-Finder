import PropTypes from "prop-types";

import { useTranslation } from "next-i18next";

export function CriteriaGrid(props) {
  const { t } = useTranslation("common");
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 px-2  md:px-0">
      {props.children}
    </div>
  );
}

CriteriaGrid.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};
