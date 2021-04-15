import PropTypes from "prop-types";
import Head from "next/head";
import { Header } from "../molecules/Header";
import { Footer } from "../molecules/Footer";

/**
 * Component which defines the layout of the page for all screen sizes
 */
export function Layout(props) {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  /**
   * child elements that will constitute the page
   */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};
