import PropTypes from "prop-types";
import { React, useState } from "react";
import { useTranslation } from "next-i18next";
import FocusTrap from "focus-trap-react";

export const Drawer = ({ children }) => {
  const [isOpen, setisOpen] = useState(false);
  const { t } = useTranslation("common");
  const toggleDrawer = () => {
    setisOpen(!isOpen);
    const drawerEl = document.getElementById("drawer");
    const bodyEl = document.body.style;
    if (!isOpen) {
      drawerEl.style.height = "100%";
      bodyEl.overflow = "hidden";
      bodyEl.height = "100%";
    } else {
      drawerEl.style.height = "0%";
      bodyEl.overflow = "auto";
      bodyEl.height = "auto";
    }
  };

  return (
    <div className="lg:w-1/4">
      {/* 768px and smaller (mobile)*/}
      <div className="lg:hidden">
        <div className="bg-gray-200 py-8">
          <div className="flex justify-around">
            <p>
              <span className="font-bold text-green-500">23</span>{" "}
              {` ${t("filterMatches")}`}
            </p>
            <button
              type="button"
              role="button"
              className="bg-white border border-blue-700 rounded font-medium text-blue-700 px-2 py-1 focus:border-black"
              onClick={toggleDrawer}
            >
              {t("filterButton")}
            </button>
          </div>
        </div>
        <FocusTrap active={isOpen}>
          <div
            className={`w-full fixed ${
              isOpen ? "bottom-0" : "-bottom-8"
            } left-0 z-10 bg-white px-6 py-4 h-0 drawer-transition overflow-y-scroll`}
            id="drawer"
          >
            <div className="flex justify-between">
              <h1>{t("filtersTitle")}</h1>
              <button
                className="text-h1 cursor-pointer"
                onClick={toggleDrawer}
                role="button"
              >
                &times;
              </button>
            </div>
            <div className="relative w-full top-10">{children}</div>
          </div>
        </FocusTrap>
      </div>

      {/* 768px and larger (desktop)*/}
      <div className="hidden lg:block">{children}</div>
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
