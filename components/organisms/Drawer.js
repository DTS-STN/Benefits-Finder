import PropTypes from "prop-types";
import { React, useState } from "react";
import { useTranslation } from "next-i18next";

export const Drawer = ({ children }) => {
  const [isOpen, setisOpen] = useState(false);
  const { t } = useTranslation("common");
  const toggleDrawer = () => {
    setisOpen(!isOpen);
    if (!isOpen) document.getElementById("myNav").style.height = "100%";
    else document.getElementById("myNav").style.height = "0%";
  };

  return (
    <div>
      <div className="bg-gray-200 py-8">
        <div className="flex justify-around">
          <p>
            <span className="font-bold text-green-500">23</span>{" "}
            {` ${t("filterMatches")}`}
          </p>
          <button
            type="button"
            role="button"
            className="bg-white border border-blue-700 rounded font-medium text-blue-700 px-2 py-1"
            onClick={toggleDrawer}
          >
            {t("filterButton")}
          </button>
        </div>
      </div>
      <div
        className={`w-full fixed bottom-0 left-0 z-10 bg-white px-6 py-4 h-0 drawer-transition`}
        id="myNav"
      >
        <h1>{t("filtersTitle")}</h1>
        <button
          className="text-h1 cursor-pointer float-right"
          onClick={toggleDrawer}
          role="button"
        >
          &times;
        </button>
        <div className="relative w-full top-10">{children}</div>
      </div>
    </div>
  );
};
Drawer.propTypes = {
  /**
   * child elements that will constitute the page
   */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};
