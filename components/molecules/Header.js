import PropTypes from "prop-types";
import { SearchBar } from "../atoms/SearchBar";

export function Header(props) {
  return (
    <header>
      <div className="relative bg-white">
        <div className="w-full">
          <div className="flex justify-between items-center border-b-2 border-custom-blue-dark py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="#">
                <img src="#" alt="Governement of Canada" />
                <span lang="en">Government of Canada </span>
                <span lang="fr">Gouvernment du Canada</span>
              </a>
            </div>
            <div className="md:flex items-center justify-end md:flex-1 lg:w-0">
              <a href="#" className="">
                Français
              </a>
              <SearchBar
                placeholder={"Search Canada.ca"}
                dataCy={"search-bar"}
                className="justify-end"
              />
            </div>
          </div>
          <nav className="layout-container">Menu</nav>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {};
