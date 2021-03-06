import PropTypes from "prop-types";
import React from "react";
import { useTranslation } from "next-i18next";
import FocusTrap from "focus-trap-react";
import { ActionButton } from "../atoms/ActionButton";

export const Drawer = ({ children, onClick, isOpen, clearSituation }) => {
  const { t } = useTranslation("common");

  return (
    <div className="lg:w-1/4">
      <div className="flex justify-around lg:hidden">
        <ActionButton
          className="content-center h-auto p-1 rounded-sm py-2 px-4 focus:ring-1 focus:ring-black focus:ring-offset-2 bg-white text-custom-blue-blue border border-custom-blue-blue active:bg-gray-400 hover:bg-gray-200"
          onClick={onClick}
          text={t("filterButton")}
        ></ActionButton>
        <ActionButton
          className="content-center h-auto p-1 rounded-sm py-2 px-4 focus:ring-1 focus:ring-black focus:ring-offset-2 bg-white text-custom-blue-blue border border-custom-blue-blue active:bg-gray-400 hover:bg-gray-200"
          onClick={clearSituation}
          text={t("clearFilters")}
        ></ActionButton>
      </div>
      <FocusTrap
        active={isOpen}
        focusTrapOptions={{
          fallbackFocus: "#drawer",
        }}
      >
        <div
          className={`w-full fixed ${
            isOpen ? "bottom-0 h-full" : "-bottom-8 h-0"
          } left-0 z-10 bg-white px-6 py-4 drawer-transition overflow-y-scroll lg:w-auto lg:relative lg:h-auto lg:bottom-auto lg:left-auto lg:p-auto lg:overflow-y-hidden`}
          id="drawer"
          tabIndex="-1"
        >
          <div className="flex justify-between lg:hidden">
            <h1>{t("filtersTitle")}</h1>
            <button
              className="text-h1 cursor-pointer"
              onClick={onClick}
              role="button"
              id="closeButton"
            >
              &times;
            </button>
          </div>
          <div className="relative w-full top-10 lg:top-auto lg:block">
            {children}
          </div>
        </div>
      </FocusTrap>
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
  /**
   * Callback for a click event on the button
   */
  onClick: PropTypes.func,
  /**
   * Disables body scroll when filter is open.
   */
  isOpen: PropTypes.bool,
  /**
   * Callback for a click to erase the filter
   */
  clearSituation: PropTypes.func,
};
